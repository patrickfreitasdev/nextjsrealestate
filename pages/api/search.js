const { gql } = require("@apollo/client");
const { default: client } = require("client")

const handler = async (req, res) => {
  try {
    
    const { hasParking, petFriendly, minPrice, maxPrice, page } = JSON.parse(req.body);
   
    
    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (hasParking) {
      hasParkingFilter =
        `{
          key: "has_parking"
          compare: EQUAL_TO
          value: "1"
        },`;
    }

    if (petFriendly) {
      petFriendlyFilter =
        `{
          key: "pet_friendly"
          compare: EQUAL_TO
          value: "1"
        },`;
    }

    if (minPrice) {
      minPriceFilter =
        `{
          key: "price"
          compare: GREATER_THAN_OR_EQUAL_TO
          value: "${minPrice}"
          type: NUMERIC
        },`;
    }

    if (maxPrice) {
      maxPriceFilter =
        `{
          key: "price"
          compare: LESS_THAN_OR_EQUAL_TO
          value: "90000"
          type: NUMERIC
        },`;
    }

    const { data } = await client.query({
      query: gql`
            query AllPropertiesQuery {
                properties(
                  where: {offsetPagination: {offset: ${ ( (page || 1) - 1 ) * 3}, size: 3},
                  metaQuery: {
                    relation: AND
                      metaArray: [
                        ${hasParkingFilter},
                        ${petFriendlyFilter},
                        ${minPriceFilter},
                        ${maxPriceFilter},
                      ]}
                    }
                  ) {
                    nodes {
                      databaseId
                      title
                      uri
                      featuredImage {
                        node {
                          uri
                          sourceUrl
                        }
                      }
                      propertyFeatures {
                        bathrooms
                        bedrooms
                        hasParking
                        petFriendly
                        price
                      }
                    }
                    pageInfo {
                      offsetPagination {
                        total
                      }
                    }
                  }
                }
              `
        });

    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes
    });
  } catch (error) {
    console.log(error)
  }
}

export default handler;
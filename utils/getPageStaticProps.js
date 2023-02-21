import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransfor } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

export const getPageStaticProps = async (context) => {

  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
        query PageQuery( $uri: String! ){
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocksJSON
              seo {
                title
                metaDesc
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
            ... on Property {
              id
              title
              blocksJSON
              seo {
                title
                metaDesc
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          mainMenu {
            mainMenu {
              callToActionButton {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              menuItems {
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
        `, variables: {
      uri
    }
  })

  const blocks = cleanAndTransfor(data.nodeByUri.blocksJSON);


  return {
    props: {
      seo: data.nodeByUri.seo,
      propertyFeatures: data.nodeByUri.propertyFeatures || null,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMainMenuItems(data.mainMenu.mainMenu.menuItems),
      callToActionLabel: data.mainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.mainMenu.mainMenu.callToActionButton.destination.uri,
      blocks: blocks,
    }
  }
}
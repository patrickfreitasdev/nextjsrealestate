import { gql } from "@apollo/client";
import client from "client";
import { BlockRender } from "Components/BlockRender";
import { Page } from "Components/Page";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default Page;

export async function getStaticPaths() {

  // Query
  const { data } = await client.query({
    query: gql`
    query AllPagesQuery {
      pages {
        nodes {
          uri
        }
      }
      properties {
        nodes {
          uri
        }
      }
    }
    `
  });

  const pathsData = [];

  [...data?.pages?.nodes, ...data?.properties?.nodes].map(page => {
    const slugs = page?.uri.substring(1, page?.uri.length - 1).split("/").filter(pageSlug => pageSlug)
    pathsData.push({
      params: {
        slug: slugs
      }
    })
  })

  return {
    paths: pathsData,
    fallback: true
  }

}

export const getStaticProps = getPageStaticProps;
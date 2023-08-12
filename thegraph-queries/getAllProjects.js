const { request, gql } = require("graphql-request");

async function getAllProjectsQuery() {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint-testing/v0.0.2";
  const query = gql`
    query Projects {
      dropCollections {
        creator
        dropAddress
        editionSize
        currentTokenId
        vaultAddress
        metadataContractURI
      }
      editionCollections {
        creator
        editionAddress
        editionSize
        metadataContractURI
        vaultAddress
        currentTokenId
      }
    }
  `;

  try {
    const data = await request(endpoint, query, {});
    console.log("Data:", data);
    return data.dropCollections.concat(data.editionCollections);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getAllProjects() {
  getAllProjectsQuery()
    .then((projects) => {
      return projects;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

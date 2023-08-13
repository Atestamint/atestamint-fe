const { request, gql } = require("graphql-request");

async function getAllProjectsQuery() {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint-testing/v0.0.10";
  const query = gql`
    query Projects {
      dropCollections {
        creator
        dropAddress
        editionSize
        currentTokenId
        vault {
          id
          positiveVotes
          nftAddress
          isUnlocked
          editionSize
        }
        metadataContractURI
      }
      editionCollections {
        creator
        editionAddress
        editionSize
        metadataContractURI
        vault {
          id
          positiveVotes
          nftAddress
          isUnlocked
          editionSize
        }
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
  return getAllProjectsQuery()
    .then((projects) => {
      console.log("Projects:", projects);
      return projects;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

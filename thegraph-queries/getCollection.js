const { request, gql } = require("graphql-request");

async function getCollectionQuery(collectionAddress) {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint-testing/v0.0.2";
  const query = gql`
    query CollectionDetails($id: ID!) {
      dropCollection(id: $id) {
        creator
        currentTokenId
        dropAddress
        editionSize
        metadataContractURI
        vaultAddress
      }
      editionCollection(id: $id) {
        creator
        currentTokenId
        editionAddress
        editionSize
        metadataContractURI
        vaultAddress
      }
    }
  `;

  try {
    const data = await request(endpoint, query, { id: collectionAddress });
    console.log("Data:", data);
    if (data.dropCollection) return data.dropCollection;
    else return data.editionCollection;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getCollection(collectionAddress) {
  getCollectionQuery(collectionAddress)
    .then((collection) => {
      return collection;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

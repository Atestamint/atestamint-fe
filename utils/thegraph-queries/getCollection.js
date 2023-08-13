const { request, gql } = require("graphql-request");

async function getCollectionQuery(collectionAddress) {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint/v4.0.0";
  const query = gql`
    query Projects {
      editionCollections {
        creator
        currentTokenId
        editionSize
        metadataContractURI
        id
        imageURI
        vault {
          positiveVotes
          nftAddress
          isUnlocked
          id
          editionSize
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);

    console.log("Data:", data.editionCollections);
    console.log("Collection Address:", collectionAddress);

    const collection = data.editionCollections.find(
      (collection) => collection.id === collectionAddress
    );
    return collection;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getCollection(collectionAddress) {
  return getCollectionQuery(collectionAddress)
    .then((collection) => {
      return collection;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

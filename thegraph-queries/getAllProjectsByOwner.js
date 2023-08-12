const { request, gql } = require("graphql-request");

async function getAllProjectsByOwnerQuery(ownerAddress) {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint-testing/v0.0.2";
  const query = gql`
    query ProjectsByOwner($owner: Bytes!) {
      dropNFTs(where: { owner: $owner }) {
        dropAddress
        owner
        tokenId
      }
      editionNFTs(where: { owner: $owner }) {
        editionAddress
        owner
        tokenId
      }
    }
  `;

  try {
    const data = await request(endpoint, query, { owner: ownerAddress });
    console.log("Data:", data);
    return data.dropNFTs.concat(data.editionNFTs);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getAllProjectsByOwner(ownerAddress) {
  getAllProjectsByOwnerQuery(ownerAddress)
    .then((projects) => {
      return projects;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

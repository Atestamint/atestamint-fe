const { request, gql } = require("graphql-request");

async function getLeaderboardQuery() {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint/v4.0.0";
  const query = gql`
    query Leaderboard {
      vaults(orderBy: positiveVotes, orderDirection: desc) {
        positiveVotes
        editionSize
        nftAddress
      }
    }
  `;

  try {
    const data = await request(endpoint, query, {});
    console.log("Data:", data);
    return data.vaults;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getLeaderboard() {
  return getLeaderboardQuery()
    .then((leaderboard) => {
      return leaderboard;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

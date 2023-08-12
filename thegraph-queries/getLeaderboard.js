const { request, gql } = require("graphql-request");

async function getLeaderboardQuery() {
  const endpoint =
    "https://api.studio.thegraph.com/query/51108/atestamint-testing/v0.0.2";
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
    return data.accounts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function getLeaderboard() {
  getLeaderboardQuery()
    .then((leaderboard) => {
      return leaderboard;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

import Image from "next/image";
import { IDKitWidget } from "@worldcoin/idkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import getLeaderboard from "../utils/thegraph-queries/getLeaderboard";

const collections = [
  {
    id: 1,
    pfp: "/mutant-ape.png",
    name: "",
    verified_on: "",
    supply: "100",
    funds_locked: "10 ETH",
    milestones: "1",
    date: "Dec 23, 2023",
    attestations: "9%",
  },
  {
    id: 2,
    pfp: "",
    name: "",
    verified_on: "",
    supply: "100",
    funds_locked: "10 ETH",
    milestones: "1",
    date: "Dec 23, 2023",
    attestations: "35%",
  },
  {
    id: 3,
    pfp: "",
    name: "",
    verified_on: "",
    supply: "100",
    funds_locked: "10 ETH",
    milestones: "1",
    date: "Dec 23, 2023",
    attestations: "64%",
  },
];

export default function ProjectAttestations() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  enum CredentialType {
    Orb = "orb",
    Phone = "phone",
  }

  const handleWorldCoinSuccess = (data: any) => {
    console.log("WorldCoin Success:", data);
  };

  const handleVerify = (data: any) => {
    console.log("WorldCoin Verify:", data);
  };

  useEffect(() => {
    (async () => {
      const leaderboard = await getLeaderboard();
      console.log(leaderboard);
      setLeaderboard(leaderboard);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Atestamint Score
          </h2>
        </div>
      </div>

      <div className="mt-5 lg:mt-8 xl:mt-16">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Project Collections
            </h1>
          </div>
        </div>
        <div className="-mx-4 mt-5 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
          <table className="min-w-full bg-white divide-y divide-gray-300 sm:rounded-lg">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Collections
                </th>

                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Attestamint Score
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((collection: any, collectionIdx) => (
                <tr key={collectionIdx}>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <div className="font-medium text-gray-900">
                      <a
                        href={`/collections/${collection.nftAddress}`}
                        className="group block flex-shrink-0"
                      >
                        <div className="flex items-center">
                          <div>
                            <Image
                              className="inline-block h-9 w-9 rounded-full"
                              src="/nftree.jpg"
                              height={64}
                              width={64}
                              alt=""
                            />
                          </div>

                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              {collection.nftAddress}...
                            </p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                              View collection
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </td>

                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    <span>
                      {(parseInt(collection.positiveVotes) /
                        parseInt(collection.editionSize)) *
                        100}
                    </span>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

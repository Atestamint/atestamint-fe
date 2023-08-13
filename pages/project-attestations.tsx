import Image from "next/image";
import { IDKitWidget } from "@worldcoin/idkit";
import { useAccount, useContractReads } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { decodeAbiParameters } from "viem";
import getAllProjects from "../utils/thegraph-queries/getAllProjects";
import getAllProjectsByOwner from "../utils/thegraph-queries/getAllProjectsByOwner";
import { Fragment, useState, useEffect } from "react";
import { useContractWrite, useSignMessage } from "wagmi";
import { parseEther } from "viem";
import {
  ATESTAMINT_CONTRACT_ADDRESS,
  ATESTAMINT_ABI,
  ERC721DROP_ABI,
  VAULT_CONTRACT_ABI,
} from "../utils/constants";
import { NFTStorage, File, Blob } from "nft.storage";

import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
function convertProofToUINT(proof: any) {
  const unpackedProof = decodeAbiParameters([{ type: "uint256[8]" }], proof)[0];
  console.log("Unpacked Proof:", unpackedProof);
  return unpackedProof;
}

const collections = [
  {
    id: 1,
    pfp: "/nftree.jpg",
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

const storage_client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY || "",
});

function PublicCollection({ collection, collectionIdx, worldCoinData }: any) {
  const { write: mint } = useContractWrite({
    address: collection.id,
    abi: ERC721DROP_ABI,
    functionName: "purchase",
    args: [1],
    value: parseEther("0.000877"),
  });

  return (
    <tr key={collectionIdx}>
      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <div className="font-medium text-gray-900">
          <a
            href={`collections/${collection.id}`}
            className="group block flex-shrink-0"
          >
            <div className="flex items-center">
              <div>
                <picture>
                  <source srcSet={collection.imageURI} type="image/*" />
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    loading="lazy"
                    src={collection.imageURI}
                    // fallback
                    alt="image"
                  />
                </picture>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {collection.id.slice(0, 10)}
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View more details
                </p>
              </div>
            </div>
          </a>
        </div>
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        {collection.editionSize}
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        {
          parseFloat((Math.random() * 2).toFixed(2)) // Converts the string back to a floating-point number
        }
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        {collection.vault.positiveVotes}
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <button
          type="button"
          disabled={worldCoinData === null}
          onClick={() => {
            mint();
          }}
          className="disabled:opacity-50 inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Mint
        </button>
      </td>
    </tr>
  );
}

function AttestCollection({
  collection,
  collectionIdx,
  worldCoinData,
  allProjects,
}: any) {
  const { address } = useAccount();
  let vaultAddress = allProjects.find(
    (project: any) => project.id === collection.editionAddress
  )?.vault.id;

  const { write: attest } = useContractWrite({
    address: vaultAddress,
    abi: VAULT_CONTRACT_ABI,
    functionName: "vote",
  });

  return (
    <tr key={collectionIdx}>
      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <div className="font-medium text-gray-900">
          <a
            href={`collections/${collection.editionAddress}`}
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
                  NFTree
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  {collection.editionAddress}
                </p>
              </div>
            </div>
          </a>
        </div>
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        {collection.tokenId}
      </td>

      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <button
          disabled={worldCoinData === null}
          onClick={() => {
            attest({
              args: [
                collection.tokenId,
                "Very Good Collection!",
                true,
                address,
                worldCoinData.merkle_root,
                worldCoinData.nullifier_hash,
                convertProofToUINT(worldCoinData.proof),
              ],
              to: address,
            });
          }}
          className="disabled:opacity-50 inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Attest
        </button>
      </td>
    </tr>
  );
}

function AttestCollectionClone({
  collection,
  collectionIdx,
  worldCoinData,
  allProjects,
}: any) {
  const { address } = useAccount();
  let vaultAddress = allProjects.find(
    (project: any) => project.id === collection.editionAddress
  )?.vault.id;

  const {
    data,
    error: prepareError,
    isError: isPrepareError,
    isLoading,
    isSuccess,
    write: attest,
  } = useContractWrite({
    address: ATESTAMINT_CONTRACT_ADDRESS,
    abi: ATESTAMINT_ABI,
    functionName: "createEditionCollection",
  });

  return (
    <tr key={collectionIdx}>
      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <div className="font-medium text-gray-900">
          <a
            href={`collections/${collection.editionAddress}`}
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
                  NFTree
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  {collection.editionAddress}
                </p>
              </div>
            </div>
          </a>
        </div>
      </td>
      <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
        {collection.tokenId}
      </td>

      <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
        <button
          disabled={worldCoinData === null}
          onClick={() => {
            attest({
              args: [
                [
                  "Dummy",
                  "UMA",
                  parseInt("2"),
                  parseInt("100"),
                  [
                    parseEther((0.0008).toString()),
                    1,
                    1691943947,
                    1691954947,
                    0,
                    0,
                    "0x0000000000000000000000000000000000000000000000000000000000000000",
                  ],
                  "DUMMY",
                  "DUMMY",
                  "DUMMy",
                  "DUMMY",
                ],
              ],
            });
          }}
          className="disabled:opacity-50 inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Attest
        </button>
      </td>
    </tr>
  );
}

export default function ProjectAttestations() {
  const [open, setOpen] = useState(false);
  const [worldCoinData, setWorldCoinData] = useState<any>(null);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [allProjects, setAllProjects] = useState([]);
  const [projectsByOwner, setProjectsByOwner] = useState([]);

  const getFormatted = (data: any) => {
    // Change projectsByOwner to this type
    // [{
    //   address: "PLACEHOLDER",
    //   functionName: "tokenIdVoted",
    //   args: [data.tokenId],
    // },
    // {
    //   address: "PLACEHOLDER",
    //   functionName: "tokenIdVoted",
    //   args: [data.tokenId],
    // },
    // {
    //   address: "PLACEHOLDER",
    //   functionName: "tokenIdVoted",
    //   args: [data.tokenId],
    // },
    // {
    //   address: "PLACEHOLDER",
    //   functionName: "tokenIdVoted",
    //   args: [data.tokenId],
    // }]
  };

  const { address, isConnecting, isDisconnected } = useAccount();

  enum CredentialType {
    Orb = "orb",
    Phone = "phone",
  }

  const handleWorldCoinSuccess = (data: any) => {
    console.log("WorldCoin Success:", data);
    sessionStorage.setItem("worldcoinData", JSON.stringify(data));
    setWorldCoinData(data);
    const proof =
      "0x01194ee68e962d1fffb8041b9cf169d26ae09e4b2463790fdda0089f4264c75824ab60b79f7c19205102eb9546c8640dfd3a2c638bcd0de1dca1b08af5813e040b63c250ac71ef56a428778c5c8bb17d4dbc5ed6a913198eb1755e7befde6158172489dba466a133ebfda90cc301fd6b7bfe0018e14360a80f125f8a3e7e3ae81c96590ee3a4d16bb85c05feb6569ae6ce4cda9d309cfd288b12ef7f4326ffbe0363704e1e4506a26a7f49aad1710b5b18c07ba4631af885490f7f58a967e974284d957b17d8ba6da10b80d71d462688f6e8ccd5b874c3cbbdcf0d6278ab7a9505589f0fb603e47ddcada1dafd54c0f2fc3a8a745e3f6db9415580438dcb339c";
    const unpackedProof = decodeAbiParameters(
      [{ type: "uint256[8]" }],
      proof
    )[0];
    console.log("Unpacked Proof:", unpackedProof);
  };

  useEffect(() => {
    if (sessionStorage.getItem("worldcoinData")) {
      let worldcoinData: any = sessionStorage.getItem("worldcoinData");
      setWorldCoinData(JSON.parse(worldcoinData));
    }
    (async () => {
      const allProjects: any = await getAllProjects();
      console.log("Projects:", allProjects);
      setAllProjects(allProjects);

      const projectsByOwner: any = await getAllProjectsByOwner(address);
      console.log("Projects By Owner:", projectsByOwner);
      setProjectsByOwner(projectsByOwner);

      setLoadingProjects(false);
    })();
  }, []);

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Project Attestamints
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <ConnectButton />
        </div>
      </div>

      <div className="mt-5 bg-white shadow sm:rounded-lg">
        {!worldCoinData ? (
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Sign In
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Sign In to WorldCoin to get started.</p>
            </div>
            <div className="mt-5">
              <IDKitWidget
                app_id="app_staging_8ba6b6491a27ba84a2255bcde4bcd3f3" // obtained from the Developer Portal
                action="atestamint" // this is your action name from the Developer Portal
                signal={address}
                onSuccess={handleWorldCoinSuccess} // callback when the modal is closed
                credential_types={[CredentialType.Orb, CredentialType.Phone]} // optional, defaults to ['orb']
                enableTelemetry // optional, defaults to false
              >
                {({ open }) => (
                  <button
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={open}
                  >
                    Verify with World ID
                  </button>
                )}
              </IDKitWidget>
            </div>
          </div>
        ) : (
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium mb-4">
              Cool, you&apos;ve verified you&apos;re a human
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="">Merkle Root:</div>
              <div>{worldCoinData.merkle_root.slice(0, 36)}...</div>
              <div className="">Nullifier Hash:</div>
              <div>{worldCoinData.nullifier_hash.slice(0, 36)}...</div>
              <div className="">Proof:</div>
              <div>{worldCoinData.proof.slice(0, 36)}...</div>
              <div className="">Credential Type:</div>
              <div>{worldCoinData.credential_type}</div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:mt-8 xl:mt-16">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Collections you hold
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  TokenId
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
              {projectsByOwner.map((collection: any, collectionIdx) => (
                <AttestCollectionClone
                  allProjects={allProjects}
                  collection={collection}
                  collectionIdx={collectionIdx}
                  key={collectionIdx}
                  worldCoinData={worldCoinData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 lg:mt-12 xl:mt-16">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">
              Mint tokens to attest for the project
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Supply
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Funds Locked
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Attestations
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
              {allProjects.map((collection: any, collectionIdx) => (
                <PublicCollection
                  collection={collection}
                  key={collectionIdx}
                  collectionIdx={collectionIdx}
                  worldCoinData={worldCoinData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

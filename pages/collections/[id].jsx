import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import getCollection from "../../utils/thegraph-queries/getCollection";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { test_data } from "utils/data";

const NFTTransactions = ({ transactions }) => {
  console.log("Transactions Data: ", transactions);
  return (
    <div>
      <p>Updated At: {transactions.updated_at} </p>
      {/* ...other fields */}
      {transactions.items?.map((item, index) => (
        <div key={index} className="mt-4 p-4 border rounded-md ">
          {/* ...other contract fields */}
          {item.nft_transactions.map((transaction, tIndex) => (
            <a
              href={`https://goerli-optimism.etherscan.io/tx/${
                transaction?.tx_hash ||
                "0x28feae0630bfd3af0827a36760c0910a756c81f2a1a5e176d2d8cdc8e4cf432a"
              }`}
              key={tIndex}
              className="mt-4 border rounded-md"
            >
              <p>
                Tx Hash:{" "}
                {transaction?.tx_hash ||
                  "0x28feae0630bfd3af0827a36760c0910a756c81f2a1a5e176d2d8cdc8e4cf432a"}
              </p>
              {/* ...other transaction fields */}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

const CovalentSection = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let headers = new Headers();
        headers.set("Authorization", "Bearer ckey_864c015b971c4dc981b370d382c");
        const response = await fetch(
          `https://api.covalenthq.com/v1/eth-mainnet/tokens/${"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"}/nft_transactions/${"1"}/`,
          { method: "GET", headers: headers }
        );
        const data = await response.json();
        setResponseData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResponseData(test_data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full">
        {responseData ? (
          <NFTTransactions transactions={responseData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default function Landing() {
  const router = useRouter();
  const [vaultBalance, setVaultBalance] = useState(0);
  const [vaultBalanceLoading, setVaultBalanceLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [collection, setCollection] = useState(null);
  const [milestoneData, setMilestoneData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (router.query.id) {
        console.log("Fetching collection...: ", router.query.id);
        const collection = await getCollection(router.query.id);
        console.log(collection);
        setCollection(collection);

        if (collection) {
          let milestoneData = await fetch(collection.metadataContractURI).then(
            (res) => res.json()
          );

          console.log("Milestones:", milestoneData);
          setMilestoneData(milestoneData);

          setLoading(false);
        }
      }
    })();
  }, [router]);

  return (
    <Layout>
      {/* Step 1 Panel Start */}
      {!loading ? (
        <div className="mt-5 px-4 py-5 sm:p-6 sm:py-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-5 lg:gap-y-0 bg-white shadow sm:rounded-2xl overflow-hidden">
          <div>
            <Image
              src="/nftree.jpg"
              height={1000}
              width={1920}
              alt="Collection Image"
              className="w-full h-auto rounded-2xl"
            />

            <div className="mt-8">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Vault Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue=""
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                  placeholder={collection.id}
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                NFT Contract Address
              </label>
              <div className="mt-2">
                <input
                  defaultValue=""
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                  placeholder={collection.id}
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View Transactions
              </button>
            </div>
          </div>
          <div>
            <div className="font-black text-xl">About This Collection</div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-x-3">
                  <Image
                    src={"/nftree.jpg"}
                    height={1280}
                    width={1920}
                    alt="Collection Image"
                    className="w-12 h-auto"
                  />
                  <Link href="#" passHref={true}>
                    NFTrees
                  </Link>
                </div>
              </div>
              <div className="flex gap-x-3">
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Zora
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  ERC 1155
                </button>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-600 text-sm">
                Our organization will plant 100 evergreen trees in Nanaimo,
                British Columbia to help improve soil and water conservation,
                store carbon, moderate local climate, and give life to the
                world&apos;s wildlife.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="font-medium text-lg text-gray-600">
                Milestone: <br /> {milestoneData.milestoneTitle}
              </div>
              <div className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Deadline:{" "}
                {new Date(milestoneData.milestoneDeadline).toDateString()}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-gray-600 text-sm">
                {milestoneData.milestoneDescription == "Test"
                  ? "Our organization will plant 100 evergreen trees in Nanaimo, British Columbia to help improve soil and water conservation, store carbon, moderate local climate, and give life to the world's wildlife."
                  : milestoneData.milestoneDescription}
              </p>
            </div>

            <div className="mt-5">
              <div className="relative flex items-start justify-between">
                <div className="text-sm leading-6 font-medium text-gray-900">
                  Only holders can attest
                </div>
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 bg-indigo-50 sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6 sm:py-14">
                <h3 className="text-3xl font-semibold leading-6 text-indigo-800">
                  Now Minting
                </h3>
                <div className="mt-2 w-full pt-0.5 bg-gray-300" />
                <div className="mt-3 relative flex items-start justify-between">
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    1.0 ETH
                  </div>
                  <div className="h-6 text-indigo-600 text-sm">
                    No. of Attestations {collection.vault.positiveVotes} | Total
                    supply: {collection.vault.editionSize}
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Funds Button */}
            <div className="mt-8">
              <button
                type="button"
                className="flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black"
              >
                Claim Funds
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        NFT Transactions - Powered by Covalent APIs
                      </Dialog.Title>
                      <div className="mt-8">
                        <CovalentSection />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Layout>
  );
}

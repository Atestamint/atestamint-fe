import Image from "next/image";
import { IDKitWidget } from "@worldcoin/idkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { decodeAbiParameters } from "viem";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
  const [open, setOpen] = useState(false);

  const { address, isConnecting, isDisconnected } = useAccount();

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
    // const proof =
    //   "0x01194ee68e962d1fffb8041b9cf169d26ae09e4b2463790fdda0089f4264c75824ab60b79f7c19205102eb9546c8640dfd3a2c638bcd0de1dca1b08af5813e040b63c250ac71ef56a428778c5c8bb17d4dbc5ed6a913198eb1755e7befde6158172489dba466a133ebfda90cc301fd6b7bfe0018e14360a80f125f8a3e7e3ae81c96590ee3a4d16bb85c05feb6569ae6ce4cda9d309cfd288b12ef7f4326ffbe0363704e1e4506a26a7f49aad1710b5b18c07ba4631af885490f7f58a967e974284d957b17d8ba6da10b80d71d462688f6e8ccd5b874c3cbbdcf0d6278ab7a9505589f0fb603e47ddcada1dafd54c0f2fc3a8a745e3f6db9415580438dcb339c";
    // const unpackedProof = decodeAbiParameters(
    //   [{ type: "uint256[8]" }],
    //   proof
    // )[0];
    // console.log("Unpacked Proof:", unpackedProof);
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
              handleVerify={handleVerify} // optional callback when the proof is received
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Milestones
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
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
              {collections.map((collection, collectionIdx) => (
                <tr key={collection.id}>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <div className="font-medium text-gray-900">
                      <a href="#" className="group block flex-shrink-0">
                        <div className="flex items-center">
                          <div>
                            <Image
                              className="inline-block h-9 w-9 rounded-full"
                              src="/avatar.png"
                              height={64}
                              width={64}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              Richard Hendricks
                            </p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.supply}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.funds_locked}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.milestones}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    <span>{collection.date}</span>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    <span>{collection.attestations}</span>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Attest
                    </button>
                  </td>
                </tr>
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Milestones
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
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
              {collections.map((collection, collectionIdx) => (
                <tr key={collection.id}>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <div className="font-medium text-gray-900">
                      <a href="#" className="group block flex-shrink-0">
                        <div className="flex items-center">
                          <div>
                            <Image
                              className="inline-block h-9 w-9 rounded-full"
                              src="/avatar.png"
                              height={64}
                              width={64}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              Richard Hendricks
                            </p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.supply}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.funds_locked}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    {collection.milestones}
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    <span>{collection.date}</span>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-sm text-gray-500">
                    <span>{collection.attestations}</span>
                  </td>
                  <td className="border-t border-gray-200 px-3 py-3.5 text-smtext-gray-500">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Mint
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
                        Fill the form biatch
                      </Dialog.Title>
                      <div className="mt-8">
                        <div>
                          <label
                            htmlFor="nftName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Name
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="nftName"
                              id="nftName"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Colossal Shitcake"
                            />
                          </div>
                        </div>

                        <div className="mt-5">
                          <label
                            htmlFor="symbol"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Symbol
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="symbol"
                              id="symbol"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="CS"
                            />
                          </div>
                        </div>

                        <div className="mt-5">
                          <label
                            htmlFor="editionSize"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Edition Size
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="editionSize"
                              id="editionSize"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="24"
                            />
                          </div>
                        </div>

                        <div className="mt-5">
                          <label
                            htmlFor="royaltyBPS"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Royalty BPS
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="royaltyBPS"
                              id="royaltyBPS"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="UGDF"
                            />
                          </div>
                        </div>
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
    </>
  );
}

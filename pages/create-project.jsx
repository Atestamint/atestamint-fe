import React, { useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function CreateProject() {
  const [files, setFiles] = useState([]);

  return (
    <Layout>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Create Project: Step One
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Step 1 Panel Start */}
      <div className="mt-5 bg-white shadow sm:rounded-2xl overflow-hidden">
        <div className="px-5 py-3 text-white font-semibold text-xl bg-indigo-600">
          1. Add Your Milestones
        </div>
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Sign In With WorldCoin
          </h3>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Verify WorldID
            </button>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your WorldID
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="JohnDoe123"
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Wallet Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="JohnDoe123"
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>

        {/* Form Start */}
        <div className="px-4 py-5 sm:p-6">
          <div className="flex -space-x-px rounded-md shadow-sm">
            <div className="relative grow rounded-md rounded-r-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900"
              >
                First Milestone <sup className="font-bold">*</sup>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Plant 100 trees"
              />
            </div>
            <div className="relative grow px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor="job-title"
                className="block text-xs font-medium text-gray-900"
              >
                Attestation Deadline <sup className="font-bold">*</sup>
              </label>
              <input
                type="text"
                name="job-title"
                id="job-title"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Dec 3, 2023"
              />
            </div>
            <div className="relative grow rounded-md rounded-l-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
              <label
                htmlFor="job-title"
                className="block text-xs font-medium text-gray-900"
              >
                Attestation Required for Unlock{" "}
                <sup className="font-bold">*</sup>
              </label>
              <input
                type="text"
                name="job-title"
                id="job-title"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="50% of Minted Supply"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="comment"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Milestone Description <sup className="font-bold">*</sup>
            </label>
            <div className="mt-2">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Our organization will plant 100 evergreen trees in Nanaimo, British Columbia to help improve soil and water conservation, store carbon, moderate local climate, and give life to the world's wildlife."
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Add Milestones
          </button>

          <div className="mt-3 relative flex items-start">
            <div className="text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-600">
                Only allow holders to attest.
              </label>
            </div>
            <div className="flex ml-3 h-6 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-3">
            <button
              type="button"
              className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Deploy Safe
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Next Step
            </button>
          </div>
        </div>
        {/* Form End */}
      </div>
      {/* Step 1 Panel End */}

      {/* Step 2 Panel Start */}
      {/* <div className="mt-5 bg-white shadow sm:rounded-2xl overflow-hidden">
        <div className="px-5 py-3 text-white font-semibold text-xl bg-indigo-600">
          2. Create Your NFT Collection
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              1. Go to your preferred NFT Collection Creator.
            </label>
            <div className="mt-3 flex items-center gap-x-3">
              <Image
                src="/zora.png"
                height={50}
                width={220}
                className="h-8 w-auto"
                alt="ZORA"
              />
              <Image
                src="/third-web.png"
                height={50}
                width={313}
                className="h-8 w-auto"
                alt="Third Web"
              />
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              2. Copy and paste your safe address into your “Payout Address”
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="Your Safe Address:   0xbbDd1b3C87c211E482CdA98eA14fa8bF50022CA0"
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="Your Safe Address: 0xbbDd1b3C87c211E482CdA98eA14fa8bF50022CA0"
              />
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              3. Sync Metadata
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Your NFT Contract Address"
              />
            </div>

            <button
              type="button"
              className="mt-3 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sync
            </button>
          </div>

          <div className="mt-5 flex justify-end gap-x-3">
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Next Step
            </button>
          </div>
        </div>
      </div> */}
      {/* Step 2 Panel End */}

      {/* New Step 2 Panel Start */}
      <div className="mt-5 bg-white shadow sm:rounded-2xl overflow-hidden">
        <div className="px-5 py-3 text-white font-semibold text-xl bg-indigo-600">
          2. Create Your NFT Collection
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-5">
            {/* Image upload column */}
            <div>
              <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={1}
                server="/api"
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            {/* NFT Details Column */}
            <div>
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address Payable Funds Recipient
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address Default Admin
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    placeholder="Our organization will plant 100 evergreen trees in Nanaimo, British Columbia to help improve soil and water conservation, store carbon, moderate local climate, and give life to the world's wildlife."
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Animation URI
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image URI
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Animation URI
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

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mint Start
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="royaltyBPS"
                    id="royaltyBPS"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="UGDF"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mint Duration
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="royaltyBPS"
                    id="royaltyBPS"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="UGDF"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="royaltyBPS"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mint Limit per Address
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

          <div className="mt-5 flex justify-end gap-x-3">
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      {/* New Step 2 Panel End */}
    </Layout>
  );
}

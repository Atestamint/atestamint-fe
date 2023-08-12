import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Landing() {
  return (
    <Layout>
      {/* Step 1 Panel Start */}
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
                placeholder="0xFdEdFc08cfa325fC2479dAf28Ae7e3A326EEC20C"
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
                type="email"
                name="email"
                id="email"
                defaultValue=""
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                placeholder="0xFdEdFc08cfa325fC2479dAf28Ae7e3A326EEC20C"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="font-black text-xl">About This Collection</div>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <Image
                  src="/hero.jpg"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              veniam dignissimos distinctio eveniet animi a maxime fugit
              possimus? At molestias facere animi laborum qui amet eaque ea sit
              corporis impedit.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="font-medium text-lg text-gray-600">
              Milestone 1:
            </div>
            <div className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Deadline: 13th August, 2023
            </div>
          </div>

          <div className="mt-5">
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              veniam dignissimos distinctio eveniet animi a maxime fugit
              possimus? At molestias facere animi laborum qui amet eaque ea sit
              corporis impedit.
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
                <div className="h-6 text-indigo-600 text-sm">22/100 Minted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

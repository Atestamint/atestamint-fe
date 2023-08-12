import Image from "next/image";

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

export default function Hero() {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Project Attestamints
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

      <div className="mt-5 bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Sign In
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Sign In to WorldCoin to get started.</p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign In
            </button>
          </div>
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
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">MINT</span>
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
                      MINT
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

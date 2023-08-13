import { CheckCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  tx: string;
}
export function Success({ tx }: Props) {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Success</p>
        </div>

        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <a
              target="_blank"
              href={`https://goerli-optimism.etherscan.io/tx/${tx}`}
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

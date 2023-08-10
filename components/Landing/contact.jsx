import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import axios from "axios";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const regions = [
  { id: 1, name: "North America" },
  { id: 2, name: "South America" },
  { id: 3, name: "Europe" },
  { id: 4, name: "Middle East" },
  { id: 5, name: "APAC" },
  { id: 6, name: "India" },
];

const inquiryTypes = [
  { id: 1, name: "Request for Services" },
  { id: 2, name: "Partnerships" },
  { id: 3, name: "Media" },
  { id: 4, name: "Investor Relations" },
  { id: 5, name: "Career Seekers" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedInquiryType, setSelectedInquiryType] = useState(
    inquiryTypes[0]
  );
  const [Loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    region: selectedRegion.name,
    inquiryType: selectedInquiryType.name,
    message: "",
  });

  const handleInput = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setShowSuccess(false);
    setShowFailed(false);

    axios({
      method: "POST",
      url: "/api/contact",
      data: inputs,
      // data: {...inputs, 'g-recaptcha-response': recaptchaRef.current.getValue()},
    })
      .then((response) => {
        setLoading(false);
        setShowSuccess(true);
        setShowFailed(false);

        setInputs({
          fullName: "",
          email: "",
          organization: "",
          phone: "",
          region: "",
          inquiryType: "",
          message: "",
        });
      })
      .catch((r) => {
        setLoading(false);
        setShowSuccess(false);
        setShowFailed(true);
      });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-2xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-primary-700 px-6 py-10 sm:px-10 xl:p-12 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl">
              <div
                className="pointer-events-none absolute inset-0 sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Contact Us</h3>
              <p className="mt-6 max-w-3xl text-base text-primary-50">
                Get in touch with our friendly support team and let us assist
                you with any inquiries or concerns you may have.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-primary-50">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-primary-200"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="ml-3">+91 (8610) 045-905</div>
                    <div className="ml-3">+91 (8754) 462-663</div>
                  </div>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-primary-50">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-primary-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">hello@blitzcrafthq.com</span>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12 border-y border-r border-zinc-100 lg:rounded-r-2xl">
              <h3 className="text-lg font-medium text-gray-900">
                Send us a message
              </h3>
              <form
                onSubmit={handleOnSubmit}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      autoComplete="name"
                      required={true}
                      onChange={handleInput}
                      value={inputs.fullName}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required={true}
                      autoComplete="email"
                      onChange={handleInput}
                      value={inputs.email}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Organization
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      required={true}
                      autoComplete="organization"
                      onChange={handleInput}
                      value={inputs.organization}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      (Including country code)
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      required={true}
                      onChange={handleInput}
                      value={inputs.phone}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Region
                  </label>
                  <div className="mt-1">
                    <Listbox value={inputs.region} onChange={setSelectedRegion}>
                      {({ open }) => (
                        <>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white px-4 py-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
                              <span className="block truncate">
                                {selectedRegion.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {regions.map((region) => (
                                  <Listbox.Option
                                    key={region.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-primary-600 text-white"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={region}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {region.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-primary-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-type"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Inquiry Type
                  </label>
                  <div className="mt-1">
                    <Listbox
                      value={inputs.inquiryType}
                      onChange={setSelectedInquiryType}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white px-4 py-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
                              <span className="block truncate">
                                {selectedInquiryType.name}
                              </span>
                              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {inquiryTypes.map((inquiryType) => (
                                  <Listbox.Option
                                    key={inquiryType.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "bg-primary-600 text-white"
                                          : "text-gray-900",
                                        "relative cursor-default select-none py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={inquiryType}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {inquiryType.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-primary-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required={true}
                      onChange={handleInput}
                      value={inputs.message}
                      className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>

                {showSuccess && (
                  <div className="sm:col-span-2 rounded-md bg-green-600 px-4 py-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-5 w-5 text-green-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-50">
                          We have received your message!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {showFailed && (
                  <div className="sm:col-span-2 rounded-md bg-red-600 px-4 py-3">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <XCircleIcon
                          className="h-5 w-5 text-red-300"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-50">
                          Uh oh! Something went wrong. Please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className={`mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto" ${
                      Loading && "opacity-50 cursor-progress"
                    }`}
                    disabled={Loading}
                  >
                    {Loading ? (
                      "Submitting"
                    ) : (
                      <>
                        Submit <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

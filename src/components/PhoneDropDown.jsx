import { useState } from "react";

const countries = [
  {
    name: "United States",
    code: "+1",
    flag: (
      <svg
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 me-2"
        viewBox="0 0 20 15"
      >
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zM0 2.367h19.6v.933H0v-.933zM0 4.233h19.6v.934H0v-.934zM0 6.1h19.6v.933H0V6.1zM0 7.967h19.6V8.9H0v-.933zM0 9.833h19.6v.934H0v-.934zM0 11.7h19.6v.933H0V11.7zM0 13.567h19.6v.933H0v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
        </g>
      </svg>
    ),
  },
  {
    name: "India",
    code: "+91",
    flag: <span className="me-2">🇮🇳</span>,
  },
  // Add more countries here...
];

export default function PhoneDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-sm mx-auto">
      <button
        type="button"
        className="flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 border-y border-l border-gray-300 rounded-s-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.flag}
        {selected.code}
        <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-52 ">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {countries.map((country) => (
              <li key={country.code}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700"
                  onClick={() => handleSelect(country)}
                >
                  <span className="inline-flex items-center">
                    {country.flag}
                    {country.name} ({country.code})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

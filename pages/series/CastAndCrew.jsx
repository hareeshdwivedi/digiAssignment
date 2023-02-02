import { useState } from "react";

const up = (
  <span>
    show less{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-up ml-1 inline"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  </span>
);

const down = (
  <span>
    show all{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-chevron-down ml-1 inline"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </span>
);

const CastAndCrew = ({ castandcrew }) => {
  const [showAll, setShowAll] = useState(true);

  const data = castandcrew && (showAll ? castandcrew.slice(0, 5) : castandcrew);

  return (
    <div className="w-full bg-gray-300 p-4 md:p-10">
      <h1 className="text-2xl text-green-700 font-semibold mb-4">
        {"Cast & Crew"}
      </h1>
      {data && (
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:grdi-cols-12">
          {data.map((item, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <a href={item.character.url}>
                <img
                  className="rounded-full h-24 md:h-32 lg:h-48 w-24 md:w-32 lg:w-48 mb-2"
                  src={
                    (item.character.image && item.character.image.original) ||
                    "https://via.placeholder.com/900?text=Image+Not+Found"
                  }
                  alt={item.character.name}
                />
              </a>
              <h2 className="text-sm font-semibold text-gray-700">
                {item.person.name}
              </h2>
              <h3 className="text-xs text-gray-500">
                {item.character.name.split("/")[0]}
              </h3>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-end items-center w-full border-t border-gray-400 border-solid py-2 mt-8">
        <button className="" onClick={() => setShowAll(!showAll)}>
          {showAll ? down : up}
        </button>
      </div>
    </div>
  );
};

export default CastAndCrew;

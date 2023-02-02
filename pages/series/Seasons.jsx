import Head from "next/head";
const Seasons = ({ name, seasons }) => {
  return (
    <>
      <Head>
        <title>TvMazeShow | {name}</title>
      </Head>
      <div className="w-full p-4 md:p-10">
        <h1 className="text-2xl text-green-500 font-semibold mb-4">Seasons</h1>
        {seasons && (
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {seasons.map((season, index) => (
              <li key={index} className="relative h-auto bg-gray-800">
                <a href={season.url}>
                  <img
                    className="h-full bg-gray-800"
                    src={
                      (season.image && season.image.original) ||
                      "https://via.placeholder.com/900?text=Image+Not+Found"
                    }
                    alt={`${name}-season-${season.number}`}
                  />
                </a>
                <h2 className="absolute bottom-0 left-0 w-full text-md font-semibold text-white bg-green-500 hover:bg-green-700 cursor-default transition duration-500 ease-in-out text-center uppercase py-2">
                  Season {index + 1}
                </h2>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Seasons;

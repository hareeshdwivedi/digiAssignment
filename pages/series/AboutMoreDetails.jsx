const AboutMoreDetails = ({ show }) => {
  return (
    <>
      <h2 className="text-xl text-gray-500 font-semibold my-4">More Details</h2>
      {show && (
        <div className="flex flex-row justify-between rounded-lg text-gray-200 bg-gray-800 p-4">
          <div className="w-2/4">
            <h3 className="text-md font-semibold text-green-700">
              Information
            </h3>
            <ul className="mt-3 pl-1">
              <li>
                <span className="text-sm text-gray-300 mr-4">Genre:</span>
                <small className="text-xs font-light text-gray-400">
                  {show.genres && show.genres.map((genre) => `${genre}  `)}
                </small>
              </li>
              <li>
                <span className="text-sm text-gray-300 mr-4">Released:</span>
                <small className="text-xs font-light text-gray-400">
                  {show.premiered}
                </small>
              </li>
              <li>
                <span className="text-sm text-gray-300 mr-4">Rated:</span>
                <small className="text-xs font-light text-gray-400">
                  {show.rating.average}/10
                </small>
              </li>
              <li>
                <span className="text-sm text-gray-300 mr-4">Status:</span>
                <small className="text-xs font-light text-gray-400">
                  {show.status}
                </small>
              </li>
            </ul>
          </div>
          <div className="w-2/4">
            <h3 className="text-md font-semibold text-green-700">Region</h3>
            <ul className="mt-3 pl-1">
              <li>
                <span className="text-sm text-gray-300 mr-4">Country:</span>
                <small className="text-xs font-light text-gray-400">
                  {(show.network && show.network.country.name) || "unknown"}
                </small>
              </li>
              <li>
                <span className="text-sm text-gray-300 mr-4">Network:</span>
                <small className="text-xs font-light text-gray-400">
                  {(show.network && show.network.name) || "unknown"}
                </small>
              </li>
              <li>
                <span className="text-sm text-gray-300 mr-4">Language:</span>
                <small className="text-xs font-light text-gray-400">
                  {show.language}
                </small>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMoreDetails;

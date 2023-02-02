import { useState } from "react";
import { Card, SearchForm } from "../../components";

const loading = (
  <div className="my-12">
    <h2 className="text-4xl w-2/4 mx-auto text-center animate-ping">
      Loading ...
    </h2>
  </div>
);

const Series = ({ shows }) => {
  const [search, setSearch] = useState("");
  const handleFilter = (elem) => {
    const searchItem = elem.toLowerCase();
    setSearch(searchItem);
  };

  const alert = (
    <div className="flex flex-row items-center justify-center rounded-2xl w-10/12 text-2xl text-center capitalize bg-pink-200 py-8 my-8 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        className="bi bi-exclamation-octagon inline-block fill-current text-pink-700 mr-8"
        viewBox="0 0 16 16"
      >
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
      This Show is not on our list
    </div>
  );

  const data =
    shows &&
    shows
      .filter((elem) => {
        return elem.name.toLowerCase().includes(search);
      })
      .map((show) => <Card show={show} key={show.id} />);

  return (
    <section className="w-11/12 md:w-10/12 my-12 mx-auto">
      <SearchForm handleFilter={handleFilter} />
      {!data && alert}
      {shows ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {data ? data : null}
        </div>
      ) : (
        loading
      )}
    </section>
  );
};

export default Series;

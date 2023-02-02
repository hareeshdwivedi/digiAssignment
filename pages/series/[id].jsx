import Head from "next/head";
import Seasons from "./Seasons";
import CastAndCrew from "./CastAndCrew";
import About from "./About";

const URL = "https://api.tvmaze.com/shows";

export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.map((show) => {
    return {
      params: { id: show.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  // fetch single show
  const showRes = await fetch(`${URL}/${id}`);
  const show = await showRes.json();

  // fetch seasons
  const seasonsRes = await fetch(`${URL}/${id}/seasons`);
  const seasons = await seasonsRes.json();

  // fetch cast
  const castandcrewRes = await fetch(`${URL}/${id}/cast`);
  const castandcrew = await castandcrewRes.json();

  return {
    props: { show, seasons, castandcrew },
  };
};

const Serie = ({ show, seasons, castandcrew }) => {
  const { name, image, rating } = show;
  return (
    <>
      <Head>
        <title>OnGames | {name}</title>
      </Head>
      <section id="main" className="w-full">
        <div className="w-full overflow-hidden show-header relative">
          <div className="absolute top-0 w-full p-1 md:p-8 show-header-title text-left">
            <h1 className="relative text-2xl md:text-4xl lg:text-6xl font-bold tracking-widest text-gray-400 w-full uppercase">
              {name}
            </h1>
            <h6 className="ml-5 text-md md:text-lg tracking-wide text-green-400">
              {rating.average} <span className="text-sm">/10</span>
            </h6>
          </div>
          <img
            height="944"
            width="1679"
            className="w-full h-full"
            src={
              (image && image.original) ||
              "https://via.placeholder.com/900?text=Image+Not+Found"
            }
            alt={name}
          />
          <div className="absolute bottom-0 w-full h-full show-header-shadow"></div>
        </div>
        <Seasons name={name} seasons={seasons} />
        <CastAndCrew castandcrew={castandcrew} />
        <About show={show} />
      </section>
    </>
  );
};

export default Serie;

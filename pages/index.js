import Head from "next/head";
import Series from "./series/Series";

const URL = `https://api.tvmaze.com/shows`;

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const shows = data.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });

  return {
    props: { shows },
  };
};

export default function Home({ shows }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>TvMazeShow | Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="main" className="w-full">
        <Series shows={shows} />
      </section>
    </div>
  );
}

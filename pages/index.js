import { Fragment } from "react";
import requests from "../utils/request";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Results from "../components/Results";

export default function Home({ results }) {
  // console.log(props.results);
  return (
    <Fragment>
      <SEO />
      <Header />
      <Navbar />
      <Results results={results} />
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(
    (res) => res.json()
  );
  return {
    props: { results: request.results },
  };
}

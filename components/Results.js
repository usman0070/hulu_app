import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  //   console.log(results);
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center  gap-2 px-5 m-5 ">
      {results.map((item) => (
        <Thumbnail key={item.id} result={item} />
      ))}
    </div>
  );
}

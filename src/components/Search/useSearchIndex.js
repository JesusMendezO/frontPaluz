import { useEffect, useState } from "react";
import MiniSearch from "minisearch";

export default function useSearchIndex(
  data,
  miniSearchOptions,
  searchOptions = {} // the "= {}" sets a default value of an empty object for this argument
) {
 console.log(data);
 console.log(miniSearchOptions);
  const [results, setResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);

  useEffect(() => {
    const index = new MiniSearch(miniSearchOptions);

    index.addAll(data)
console.log(index);
    setSearchIndex(index);
  }, [data]);

  const search = (value) => {
    console.log(value,"hola");
    const newResults = searchIndex?.search(value, searchOptions);
    setResults(newResults);

    console.log(newResults);
  };

  return { results, search, searchIndex };
}

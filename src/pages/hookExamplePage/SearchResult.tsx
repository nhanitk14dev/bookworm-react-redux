import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../../models";

type SearchResultProps = {
  query: string;
};

const SearchResult = ({ query }: SearchResultProps) => {
  const [results, setResults] = useState<IUser[]>([]);

  useEffect(() => {
    getSearchResults(query);
  }, [query]);

  async function getSearchResults(query: string) {
    
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });

    await axios
      .get("http://localhost:8080/users")
      .then((res) => {
        const users = res.data as IUser[];
        if (users.length) {
          const lowerQuery = query.trim().toLowerCase();
          const results = users.filter((i: IUser) => {
            const lowerName = i.name.toLowerCase();
            return (
              lowerName.startsWith(lowerQuery) ||
              lowerName.indexOf(" " + lowerQuery) !== -1
            );
          });

          if (results.length) {
            setResults(results);
          }
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <ul>
      {results.map((i) => (
        <li key={i.id}>
          {i.name} - {i.email}
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;

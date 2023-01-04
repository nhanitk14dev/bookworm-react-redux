import axios from "axios";
import { IUser } from "./../models/index";

export const searchService = {
  getSearchResults,
};

async function getSearchResults(query: string) {
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
        return results;
      }
    })
    .catch((error) => console.error(error));
}

import { SectionContainer } from "../../styles/commonStyles";
import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";
import Spinner from "../../components/Spinner";

const UseDeferredValue = () => {
  const [query, setQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(query);

  return (
    <SectionContainer>
      <h2>useDeferredValue(value)</h2>
      <div>
        <i>
          useDeferredValue is react hook that lets you defer updating a part of
          the UI
        </i>
      </div>
      <label htmlFor="search">
        Search users:
        {/* Keep passing the current text to the input */}
        <input
          value={deferredQuery}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      {/* But the list is allowed to "lag behind" when necessary */}
      <Suspense fallback={<Spinner />}>
        <SearchResult query={deferredQuery} />
      </Suspense>
    </SectionContainer>
  );
};

export default UseDeferredValue;

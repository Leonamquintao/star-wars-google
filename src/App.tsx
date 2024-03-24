import { useMemo, useState } from "react";
import "./App.css";

import withSWProvider, { useSWContext } from "./provider";
import findMatchingTerm from "./utils/findMatchingTerm";
import highlightMatchingTerms, { HighlightFormatter } from "./utils/highlightMatchingTerm";
import { SWPeopleProps } from "./hooks/useSWData";

import ListItem from "./components/ListItem";
import Footer from "./components/Footer";

const formatter: HighlightFormatter = (matchedSubstring) => (
  <span style={{ fontWeight: 400, backgroundColor: "#29f1ff" }}>
    {matchedSubstring}
  </span>
);

function App() {
  const { data, loading } = useSWContext();
  const [inputText, setInputText] = useState("");

  const filterList = useMemo(() => {
    const terms = data.filter((item) => findMatchingTerm(inputText, item.name));

    return terms.map((item) => ({
      ...item,
      name: highlightMatchingTerms(inputText, item.name, formatter),
    }));
  }, [data, inputText]) as SWPeopleProps[];

  return (
    <div className="main-container" data-testId="app-container">
      <h2>Star Wars API </h2>
      <div className="search-area">
        <input
          type="text"
          className="main-input"
          placeholder="Search for a character name ex: 'Luke'"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="data-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="list-container">
            {filterList.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default withSWProvider(App);

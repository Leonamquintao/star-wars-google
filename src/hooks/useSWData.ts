import { useEffect, useReducer, useState } from "react";

export interface SWPeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ResponseProps {
  count: number;
  next: string;
  results: SWPeopleProps[];
}

const DEFAULT_URL = "https://swapi.py4e.com/api/people/";

async function loadData() {
	try {
		const response = await fetch(DEFAULT_URL, { method: "GET" });

    console.log("response => ", JSON.stringify(response, null,2));
		const { results } = (await response.json()) as ResponseProps;

		return results;
	} catch(_exception) {
		console.log("response => ", _exception);
		/* the intention here is that the application continues to work here despite a possible error */
		return [];
	}
}

function useSWData() {
  const [loading, toggleLoading] = useReducer((prev) => !prev, false);
  const [data, setData] = useState<SWPeopleProps[]>([]);

  useEffect(() => {
    toggleLoading();
    loadData()
      .then(setData)
      .finally(() => toggleLoading());
  }, []);

  return { loading, data };
}

export default useSWData;

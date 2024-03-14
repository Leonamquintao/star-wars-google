import { createContext, useContext } from "react";
import useSWData from "../hooks/useSWData";

type ContextProps = ReturnType<typeof useSWData>;

const Context = createContext({} as ContextProps);

const useSWContext = () => useContext(Context);

const withSWProvider = <T, >(Component: React.ComponentType<T>) => {
	const Provider = (props: React.PropsWithChildren<T>) => {
		const value = useSWData();

		return (
			<Context.Provider value={value}>
				<Component {...props} />
			</Context.Provider>
		);
	};

	return Provider;
};

export { useSWContext };
export default withSWProvider;


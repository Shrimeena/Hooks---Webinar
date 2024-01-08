import React from "react";

const context = React.createContext();

export const StoreProvider = ({childern, initialState = {} }) => {
    const [store, setStore] = React.useState(()=>initialState);
    const contextValue = React.useMemo(()=>[store, setStore], [store]);

    console.log("SHRII 222", childern, '--', initialState);
    return (
        <context.Provider value={contextValue}>
            {childern}
        </context.Provider>
    )
}

export default function useStore() {
    return React.useContext(context);
}
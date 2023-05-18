import { createContext } from "react";
import Header from "./components/Header";
import Images from "./components/Images";
import Useaxios from "./hooks/Useaxios";
import Search from "./components/Search";
export const imagecontext = createContext();

function App() {
  const accesskey = "3PrABqr4uRVEmQdTTTf4HKFTKtBhzjxT2r2CjHTEfaE";
  const { response, isloading, error, fetchData } = Useaxios(
    `search/photos?per_page=50&query=cat&client_id=${accesskey}&count=30`
  );

  const value = {
    response,
    isloading,
    error,
    fetchData,
  };

  return (
    <imagecontext.Provider value={value}>
      <Header>
        <Search />
      </Header>
      <Images />
    </imagecontext.Provider>
  );
}

export default App;

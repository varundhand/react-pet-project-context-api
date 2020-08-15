import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import Pricing from "./components/Pricing";
import GlobalContextProvider from "./contexts/GlobalContext";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GlobalContextProvider>
          <Navbar />
          <Pricing />
          <List />
        </GlobalContextProvider>
      </div>
    );
  }
}

export default App;
import Header from "./Header";
import Map from "./Map";
import Panel from "./Panel";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <>
      <Header setData={setData} />
      <Panel data={data} />
      <Map data={data} />
      <Footer />
    </>
  );
}

export default App;

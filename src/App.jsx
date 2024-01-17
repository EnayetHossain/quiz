import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BreadCrumbs></BreadCrumbs>
      <Tabs></Tabs>
    </>
  );
}

export default App;

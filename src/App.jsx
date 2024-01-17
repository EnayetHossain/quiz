import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import CreateFlashCard from "./components/CreateFlashCard/CreateFlashCard";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BreadCrumbs></BreadCrumbs>
      <Tabs></Tabs>
      <CreateFlashCard></CreateFlashCard>
    </>
  );
}

export default App;

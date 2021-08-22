import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import ViewCard from "./components/ViewCard";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ViewCard />
      <Team />
      <Footer />
    </>
  );
}

export default App;

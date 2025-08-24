import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Prices from "./Components/Prices";
import Sirvices from "./Components/Sirvices";
import Travel from "./Components/Travel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Travel />
      <Sirvices />
      <Prices />
      <Contact />
    </>
  );
}

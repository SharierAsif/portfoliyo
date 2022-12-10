
import Herosection from "../src/Component/Herosection";
import Darkmode from "../src/Component/Darkmode";
import Services from "../src/Component/Services";
import Works from "./Component/Works";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

export default function App() {
 

  return (
    <div className="text-indigo-600 dark:text-indigo-500 bg-white dark:bg-slate-900">
      <div className="relative max-w-5xl m-auto w-11/12">
        <Darkmode />
        <Header/>
        <Herosection />
        <Services />
        <Works />
        <About />
        <Footer/>
      </div>
    </div>
  );
}

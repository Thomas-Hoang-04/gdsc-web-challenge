import "./App.css";
import Features from "./comp/Features/Features";
import Footer from "./comp/Footer/Footer";
import FooterHero from "./comp/Footer/FooterHero";
import Header from "./comp/Header/Header";
import Hero from "./comp/Hero/Hero";
import InputBox from "./comp/Input/InputBox";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <InputBox />
        <Features />
        <FooterHero />
      </main>
      <Footer />
    </>
  );
}

export default App;

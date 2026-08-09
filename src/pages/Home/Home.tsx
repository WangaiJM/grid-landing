import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
      <Footer />
    </>
  );
};
export default Home;

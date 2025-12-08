import Art from "./Sections/Art";
import Events from "./Sections/Events";
import Hero from "./Sections/Hero";
import Join from "./Sections/Join";
import Museum from "./Sections/Museum";
import News from "./Sections/News";

const Home = () => {
  return (
    <main>
      <Hero />
      <Museum />
      <Join />
      <Events />
      <Art />
      <News />
    </main>
  );
};

export default Home;

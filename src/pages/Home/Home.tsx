import { Main } from "./Home.style";
import CarouselTop from "../../components/CarouselTop";

const Home = () => {
  return (
    <>
      <CarouselTop />
      <Main>
        <div className="container">
          <h1 className="text-center">Content Home Page</h1>
        </div>
      </Main>
    </>
  );
};

export default Home;

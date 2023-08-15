import { homeImages } from "../../Data/Data";
import BuyOnline from "../container/BuyOnline";
import Shopping from "../container/Shopping";

function Home() {
  return (
    <>
      <section className="container" id="home">
        {homeImages.map((homeImg) => {
          return (
            <div key={homeImg.id}>
              <img src={homeImg.img} alt="img" />
              <a href="">{homeImg.name}</a>
            </div>
          );
        })}
      </section>
      <Shopping />
      {/* <PopularProd /> */}
      <BuyOnline />
    </>
  );
}

export default Home;

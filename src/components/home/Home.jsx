import { Link } from "react-router-dom";
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
              <Link to="./categories/all">
                <img src={homeImg.img} alt="img" />
                <p href="">{homeImg.name}</p>
              </Link>
            </div>
          );
        })}
      </section>
      <Shopping />
      <BuyOnline />
    </>
  );
}

export default Home;

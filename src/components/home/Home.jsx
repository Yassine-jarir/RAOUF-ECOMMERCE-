import { homeImages } from "../../Data/Data";

function Home() {
  return (
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
  );
}

export default Home;

import { shoppingImgs } from "../../Data/Data";

function Shopping() {
  return (
    <section className="container">
      {shoppingImgs.map((shopImg) => {
        return (
          <div key={shopImg.id} className="shopping">
            <img src={shopImg.img} alt="" />
            <div>
              <div className="title">{shopImg.title}</div>
              <p>{shopImg.text}</p>
              <a href="" className="shopBtn">
                {shopImg.btnText}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Shopping;

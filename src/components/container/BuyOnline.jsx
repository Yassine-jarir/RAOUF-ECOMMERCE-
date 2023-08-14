import { buyOnlineDatas } from "../../Data/Data";

export default function BuyOnline() {
  return (
    <section className="container">
      <div className="title">
        When You <span>Buy Online</span>
      </div>
      <div className="buyOnline">
        {buyOnlineDatas.map((data) => (
          <div className="data" key={data.id}>
            <div className="data_title">{data.title}</div>
            <p>{data.text}</p>
            <a href="" className="btnText">
              {data.btnText}
            </a>
            <div className="payment_images">
              {data.img?.map((img, index) => (
                <img src={img} alt="" key={index} className="payment_img" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

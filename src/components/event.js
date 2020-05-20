import React from "react";
//import { ReactComponent as BubbleBg } from "./bg_1.svg";

const style = {
  img: { width: '100%', objectFit: "cover" }
};

const Card = ({src, title, sity, name}) => {
  return (
    <div
      className="card card-profile ml-auto mr-auto"
      style={{ maxWidth: "360px" }}
    >
      <div className="card-header card-header-image">
        <img
          src={src}
          style={style.img}
          alt=""
          className="img"
        />
      </div>

      <div className="card-body ">
        <div
            className="card card-with-border"
            data-background="color"
            data-color="red"
        >
          <div className="content">
            <h3 className="description">{title}</h3>
            <p>{sity}</p>
          </div>
        </div>
      </div>
      <div className="card-footer justify-content-center">
        <h2 className="card-title gv_font text-danger">{name}</h2>
      </div>
    </div>
  );
};

const cards = [
  {
    name: '35 - 45 тыс $',
    title: 'Охотничий клуб',
    sity: 'Гомель',
    src:  '../assets/img/gal1.jpg'
  },
  {
    name: '25 - 35 тыс $',
    title: 'Яхт клуб',
    sity: 'Гомель',
    src: '../assets/img/gal2.jpg'
  },
  {
    name: '15 - 25 тыс $',
    title: 'Усадьба',
    sity: 'Гомель',
    src: '../assets/img/gal3.jpg'
  },
  {
    name: '15 - 25 тыс $',
    title: 'Загарадный коттедж',
    sity: 'Гомель',
    src: '../assets/img/gal4.jpg'
  },
  {
    name: '10 - 15 тыс $',
    title: 'Ресторан',
    sity: 'Гомель',
    src: '../assets/img/gal5.jpeg'
  },
  {
    name: '5 - 10 тыс $',
    title: 'Парк',
    sity: 'Гомель',
    src: '../assets/img/gal6.jpg'
  }
];

const Event = () => {
  return (
    <div className="section grey_bg" style={style.background}>
      <h1 className="title text-danger text-center">Свадьбы</h1>
      <div className="events">
        {cards.map((item, idx) =>
          <Card
            key={idx}
            name={item.name}
            title={item.title}
            sity={item.sity}
            src={item.src}
          />
        )}
      </div>
    </div>
  );
};

export default Event;

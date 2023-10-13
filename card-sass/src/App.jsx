import "./App.scss";

function App() {
  const card = [
    {
      img: "../public/th.jpg",
      name: "carapuce",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut ducimus id molestiae. Sint, alias consectetur! Earum voluptatem repellendus non",
      avis: 9.7,
      star: "⭐⭐⭐",
      max: "MAX VICTORY",
      power: 100,
    },
  ];

  return (
    <div className="container">
      {card.map((el) => (
        <div className="card-container">
          <img src={el.img} alt={"Photo:" + el.name} />
          <div className="star">
            <h1>{el.name}</h1>
            <p>{el.power}</p>
          </div>
          <p>{el.content}</p>
          <h2>{el.max}</h2>
          <div className="flex">
            <span>{el.avis}%</span>
            <p>{el.star}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

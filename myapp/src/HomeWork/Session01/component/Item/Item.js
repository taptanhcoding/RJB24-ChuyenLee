const colorL = (value) => value.id%2 == 0 ? {color:'red'}:{color:'blue'}

function Item({actor}) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={actor.avatar} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title" style={colorL(actor)}>
            {actor.name}
          </h5>
          <p className="card-text">{actor.description}</p>
          <a href={actor.link} className="btn btn-primary">
            More info
          </a>
        </div>
      </div>
    </>
  );
}

export default Item;

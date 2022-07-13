import "./index.scss";
const Card = ({ key, id, image, name, type }) => {
  const style = type + " cards";
  return (
    <div className={style}>
      <div className="card">
        <div className="bunder">
          <img src={image} alt={name} />
        </div>
        <div className="text-zone">
          <span>#00{id}</span>
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;

export default function MovieCard(props) {
  return (
    <div className="moviecard">
      <div className="card">
        <h2>{props.title}</h2>
        <img src={props.posterURL} alt="nobody" />
        <span>{props.rating}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

import locationLogo from "../assets/Fill 219.png";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="card">
      <figure>
        <img src={props.imageUrl} alt={props.title} />
      </figure>
      <div className="card-info">
        <img src={locationLogo} alt="Location logo" />
        <span>{props.location.toUpperCase()}</span>
        <a href={props.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <p className="eventDate">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

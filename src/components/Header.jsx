import worldLogo from "../assets/Fill 213.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={worldLogo} alt="World logo" />
      <p>My travel journal</p>
    </header>
  );
}

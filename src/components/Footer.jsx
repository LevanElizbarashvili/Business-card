import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={facebook} />
      <img src={twitter} />
      <img src={linkedin} />
      <img src={github} />
    </div>
  );
}

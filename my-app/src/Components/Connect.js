import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";

function Connect() {
  return (
    <footer className="Connect">
      <img src={logo} alt="suite" />
      <small>Copyright - Suite</small>
      <div className="Social">
        <img src={facebook} alt="facebook" className="SNS" />
        <img src={twitter} alt="twitter" className="SNS" />
        <img src={instagram} alt="instagram" className="SNS" />
      </div>
    </footer>
  );
}
export default Connect;

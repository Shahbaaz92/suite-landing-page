import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <nav className="Navigation">
      <img src={logo} alt="suite" />
      <button className="Navigation-Btn">Request Beta Access</button>
    </nav>
  );
}
export default Navigation;

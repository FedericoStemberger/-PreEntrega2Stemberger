import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <img
        src="C:\Users\Eva Rojas\Desktop\Fede\React\react-router-dom2\src\assets\logo\logo.png"
        alt="Logo Stemberger"
      ></img>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="productos">
        <p>Remeras</p>
      </Link>
      <Link to="productos">
        <p>Joyeria</p>
      </Link>
      <Link to="productos">
        <p>Bolsos y carteras</p>
      </Link>
    </nav>
  );
};

export default Navbar;

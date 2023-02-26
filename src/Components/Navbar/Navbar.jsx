import styles from "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return(
    <div>
      <div className={styles.containerNavbar}>
        <img src="https://res.cloudinary.com/dgq2xreyb/image/upload/v1677390500/img/logo_sv5mth.png"
        alt=""
        style={{width:"10%", objectFit:"cover", height:"10vh"}} 
        />
        <ul className={styles.containerList}>
          <list>Consolas</list>
          <list>Juegos PS5</list>
          <list>Juegos Xbox</list>
          <list>Juegos Nintendo</list>
          <list>Accesorios</list>
        </ul>
        <CartWidget  />
      </div>
    </div>
  );
};

export default Navbar;
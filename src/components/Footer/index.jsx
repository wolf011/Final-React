import { Link } from "react-router-dom";
import "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <h1>Dragon Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="https://github.com/wolf011/Final-React">Sobre nós</Link>
          </li>
          <li>
            <Link to="https://discord.com/">Discord</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

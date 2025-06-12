import { Link } from "react-router-dom";
import "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <h1>Dragon Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Games</Link>
          </li>
          <li>
            <Link to="/home">Contato(Provisório)</Link>
          </li>
          <li>
            <Link to="https://discord.com/">Discord</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

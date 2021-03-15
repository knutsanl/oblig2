import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="Nav-Bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!props.isAuth &&
            <li>
              <Link to="/login">Log in</Link>
            </li>}
          {props.isAuth &&
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>}
          {props.isAuth &&
            <li>
              <Link to="/user"> User page</Link>
            </li>}
          {props.isAuth &&
            <li onClick={props.handleLogOut}>
              <Link to="/login">Log out</Link>
            </li>}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;

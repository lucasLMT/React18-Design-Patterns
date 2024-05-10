import { Link, Outlet } from 'react-router-dom'

const Root = () => (
  <>
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pokemons">Pokemons</Link>
      </li>
    </ul>
    <div>
      <Outlet />
    </div>
  </>
)

export default Root

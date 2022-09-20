import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex justify-around text-xl shadow-xl h-12">
        <Link to="/">Editing</Link>
        <ul>
            <li className="space-x-5">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
    </div>
  )
}
export default Navbar
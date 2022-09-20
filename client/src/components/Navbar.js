import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full flex justify-around text-xl shadow-xl h-12 place-items-center ">
        <Link 
            className="font-bold hover:underline"
            to="/">Editing Services
        </Link>
        <ul>
            <li className="space-x-10">
                <Link 
                    className="hover:underline"
                    to="/login">Login
                </Link>
                <Link
                    className="hover:underline"
                    to="/signup">Signup
                </Link>
            </li>
        </ul>
    </div>
  )
}
export default Navbar
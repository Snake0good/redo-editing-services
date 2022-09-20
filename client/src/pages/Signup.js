import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Signup({validationErrors}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {name, email, password, confirmPassword}

        const response = await fetch('http://localhost:2121/signup', {
        // const response = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // const json = await response.json()


        // BACKEND CONNECTION WITH ERRORS
        // if (!response.ok) {
        //     setError(json.error)
        //     setEmptyFields(json.emptyFields)
        // }

        if (response.ok) {
            setName('')
            setEmail('')
            setPassword('')
            setError(null)
            console.log('Signup Successful')
            
            // go back to the home page
            navigate('/')
        }

        if(!response.ok) {
            setError('Sorry, there seems to be a problem')
        }
    }

  return (
    <div className="w-full h-screen flex justify-center place-items-center">
        <form 
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col w-96 h-fit bg-black p-5"
        >
            <h1 className="text-white text-3xl">Signup</h1>
            
            <input 
                type="text"
                placeholder="Name"
                value={name}a
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-300 p-2 text-blue-800 placeholder-blue-800"    
            />

            <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-300 p-2 text-blue-800 placeholder-blue-800"    
            />
            
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-300 p-2 text-blue-800 placeholder-blue-800"    
            />

            <input 
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-slate-300 p-2 text-blue-800 placeholder-blue-800"    
            />

            <button
                className="bg-green-300 p-3 w-1/3 rounded-3xl font-bold"
            >
                Signup
            </button>
            
            {error && <div className="text-red-500">{error}</div>}
        </form>


    </div>
  )
}
export default Signup
import { useState } from "react"
import Navbar from "../components/Navbar"

function Login({validationErrors}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {name, email, password}

        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()


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
            console.log('Login Successful')
        }
    }

  return (
    <div>
        <form 
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col w-96 bg-black p-5"
        >
            <h1 className="text-white text-3xl">Login</h1>
            
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

            <button>Add Workout</button>
            {error && <div className="text-red-500">{error}</div>}
        </form>


    </div>
  )
}
export default Login
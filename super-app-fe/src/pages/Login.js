import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5009/api/auth/login', {
                username,
                password,
            })
            console.log(res.data)
        } catch (err) {
            setError(err.res.data.msg || 'Login failed')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 p-2 mb-4 w-full rounded"
                    required
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 mb-4 w-full rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
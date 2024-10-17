import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? 'http://localhost:5009/api/v1/auth/signin' : 'http://localhost:5009/api/v1/auth/signup';
            const payload = isLogin ? { email, password } : { email, username, password };

            const res = await axios.post(endpoint, payload);

            localStorage.setItem('token', res.data.token)

            Swal.fire({
                icon: 'success',
                title: isLogin ? 'Login Successful' : 'Registration Successful',
                text: 'Welcome to the Time Management App!',
            });

            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data.msg || (isLogin ? 'Login failed' : 'Registration failed'));

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response?.data.msg || (isLogin ? 'Login failed' : 'Registration failed'),
            });
        }
    };

    return (
        <div className="flex min-h-screen background">
            <div className="overlay"></div>
            <div className="flex-1 flex items-center justify-center relative">
                <div className="circle"></div>
                <div className="circle"></div>
                <h1 className="text-8xl font-bold text-white animate-fadeIn font-poppins z-10 text-shad">Welcome</h1>
                <h1 className="text-4xl font-bold text-white animate-fadeIn font-poppins mt-10 p-6 z-10">to your daily app</h1>
            </div>
            <div className="flex-1 flex items-center justify-center z-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-12 rounded-lg shadow-2xl w-55 transition-transform transform hover:scale-105 form-container"
                >
                    <h2 className="text-2xl mb-6 text-center font-semibold text-gray-500 font-poppins">{isLogin ? 'Login' : 'Register'}</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-4 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-blue-300 transition font-poppins"
                        required
                    />

                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-300 p-4 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-blue-300 transition font-poppins"
                            required={!isLogin}
                        />
                    )}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-4 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-blue-300 transition font-poppins"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-4 rounded w-full hover:bg-blue-600 transition shadow-md hover:shadow-lg font-poppins"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                    <p className="mt-4 text-center text-gray-600 font-poppins">
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setEmail('');
                                setUsername('');
                                setPassword('');
                                setError('');
                            }}
                            className="text-blue-500 ml-2 underline font-poppins">
                            {isLogin ? 'Register' : 'Login'}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Auth;

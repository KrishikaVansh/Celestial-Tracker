import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const[email,setEmail]=useState('');
    const [password,setPassword]= useState('');
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log("Logging in:",email,password);
        //api calls from backend

        navigate('/');
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
  
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
  
          <p className="mt-4 text-sm text-center">
            Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign up</Link>
          </p>
        </form>
      </div>

    );
};

export default Login;
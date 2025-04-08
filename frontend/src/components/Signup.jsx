
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up:", email, password);
    // Add backend POST request here
    navigate('/login'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

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

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account? <Link to="/" className="text-green-500 underline">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

// import React from 'react';
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home.jsx';
// import Search from './components/Search.jsx';

// import History from './components/History.jsx';
// import Login from './components/Login.jsx';
// import Signup from './components/Signup.jsx';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import "./App.css";
 import Home from './components/Home.jsx';
  import Search from './components/Search.jsx';
  import Login from './components/Login.jsx';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

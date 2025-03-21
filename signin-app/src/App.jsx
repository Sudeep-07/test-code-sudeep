// import React from "react";
// import Signup from "./components/Signup";
// import LogInModal from "./components/login";

// function App() {
//   // return <Signup />;
//   return <LogInModal/>;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;

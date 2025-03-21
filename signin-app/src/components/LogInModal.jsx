// import React, { useState } from "react";
// import googleLogo from "../assets/logo.png";
// import { Modal, Button, Input, Typography } from "antd";

// const LogInModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       {/* Sign In Button to Open Modal */}
//       <Button type="primary" onClick={() => setIsModalOpen(true)}>
//         Log In
//       </Button>

//       {/* Login Modal */}
//       <Modal
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//         centered
//       >
//         <Typography.Title level={3} className="text-center">
//           Welcome back to <strong>Hunt The Career</strong>
//         </Typography.Title>

//         {/* Google Login Button */}
//         <Button
//           block
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//             height: "40px",
//             border: "none",
//           }}
//         >
//           <img
//             src={googleLogo}
//             alt="Google Logo"
//             style={{ width: 20, height: 20 }}
//           />
//           Log in with Google
//         </Button>

//         <Typography.Paragraph className="text-center">OR</Typography.Paragraph>

//         {/* Email & Password Input Fields */}
//         <Input placeholder="Email" className="mb-2" />
//         <Input.Password placeholder="Password" className="mb-2" />

//         {/* Sign In Button */}
//         <Button
//           block
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             height: "40px",
//             border: "none",
//           }}
//         >
//           LOG IN
//         </Button>

//         {/* Forgot Password Link */}
//         <Typography.Link className="text-center block">Forgot Password?</Typography.Link>

//         {/* Sign Up Button */}
//         <Button
//           block
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             height: "40px",
//             border: "none",
//           }}
//         >
//           Not a member? <strong>Sign up now</strong>
//         </Button>
//       </Modal>
//     </div>
//   );
// };

// export default LogInModal;

import React, { useState } from "react";
import googleLogo from "../assets/logo.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import { Modal, Button, Input, Typography } from "antd";

const LogInModal = ({ isModalOpen, setIsModalOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // FIX: Define the missing function
  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} centered>
      <Typography.Title level={3} className="text-center">
        Welcome back to <strong>Hunt The Career</strong>
      </Typography.Title>

      {/* Social Login Buttons - Vertical Layout */}
      <div className="flex flex-col w-full space-y-4 mb-6">
        <Button block style={{ backgroundColor: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
          Log in with Google
        </Button>
          <button className="w-full py-2 bg-blue-700 text-white rounded flex items-center justify-center">
            <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 mr-2" />
            Log in with LinkedIn
          </button>
        <Button block style={{ backgroundColor: "#333", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={githubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
          Log in with GitHub
        </Button>
      </div>

      <Typography.Paragraph className="text-center mt-2">OR</Typography.Paragraph>

      {/* Input Fields with Proper Spacing */}
      <div style={{ marginTop: "20px" }}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            height: "45px",
            marginBottom: "16px", // Space between email & password
            padding: "10px",
          }}
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "45px",
              padding: "10px",
              paddingRight: "40px", // Space for icon
            }}
          />
          <img
            src={showPassword ? showIcon : hideIcon}
            alt="Toggle Password"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>

      {/* Log In Button */}
      <Button
        block
        onClick={handleLogin} // FIX: Now it has a function
        style={{
          backgroundColor: "black",
          color: "white",
          height: "45px",
          border: "none",
          marginTop: "24px", // Space above login button
        }}
      >
        LOG IN
      </Button>

      <Typography.Link className="text-center block mt-2">Forgot Password?</Typography.Link>
      <Button type="link" block onClick={() => setIsModalOpen(false)}>Not a member? <strong>Sign up now</strong></Button>
    </Modal>
  );
};

export default LogInModal;







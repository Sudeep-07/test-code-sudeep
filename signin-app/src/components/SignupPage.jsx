// import React, { useState } from "react";
// import googleLogo from "../assets/logo.png";
// import showIcon from "../assets/show.png"; // Icon for showing password
// import hideIcon from "../assets/hide.png"; // Icon for hiding password

// const SignupPage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex h-screen">
//       {/* Left Side */}
//       <div className="w-1/2 bg-gradient-to-b from-green-100 to-white p-10 flex flex-col justify-center">
//         <h1 className="text-4xl font-bold mb-4 text-black">
//           Ensure a <span className="text-black">Fast and Successful Journey</span>
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">Your Next Career Move</p>
//         <ul className="text-lg text-black">
//           <li className="flex items-center mb-2">✅ 2X More Qualified Job Matches</li>
//           <li className="flex items-center mb-2">⏳ 60% Time Savings in Job Searches</li>
//           <li className="flex items-center">📅 50% More Interview Invites</li>
//         </ul>
//       </div>
      
//       {/* Right Side */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
//         <h2 className="text-2xl text-black text-center mb-6 mt-[-40px]">
//           Welcome to <span className="font-bold">Hunt The Career</span>
//         </h2>
//         <button className="w-full py-2 mt-6 bg-black text-white rounded flex items-center justify-center">
//           <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
//           Sign up with Google
//         </button>
//         <div className="my-4 text-gray-500">OR</div>
        
//         {/* {full name} */}
//         <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2 text-black placeholder-gray-500" />

//         {/* Email Input */}
//         <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2 text-black placeholder-gray-500" />
        
//         {/* Password Input with Toggle */}
//         <div className="relative w-full mb-4">
//           <input 
//             type={showPassword ? "text" : "password"} 
//             placeholder="Password" 
//             className="w-full p-2 border rounded text-black placeholder-gray-500 pr-10"
//           />
//           <img 
//             src={showPassword ? showIcon : hideIcon} 
//             alt="Toggle Password" 
//             className="absolute right-3 top-2 cursor-pointer w-5 h-5"
//             onClick={() => setShowPassword(!showPassword)}
//           />
//         </div>

//         {/* Checkbox */}
//         <div className="flex items-center mb-4">
//           <input
//             id="sign-up_emailSub"
//             type="checkbox"
//             className="w-4 h-4 border-2 border-black bg-transparent checked:bg-white checked:border-black focus:ring-0 appearance-none 
//             relative before:content-['✔'] before:absolute before:text-black before:text-xs before:left-[2px] before:top-[-1px] before:opacity-0 
//             checked:before:opacity-100"
//           />
//           <label htmlFor="sign-up_emailSub" className="text-gray-600 ml-2">
//             I want to receive updates from Jobright about the latest job offers
//           </label>
//         </div>

//         <button className="w-full py-2 bg-black text-white rounded">SIGN UP</button>
//         <p className="text-gray-500 text-sm mt-4">
//           By continuing, you agree to the Hunt the career <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
//         </p>
//         <p className="text-gray-500 text-sm mt-2">
//           Already a member? <a href="#" className="text-blue-500">Log in now</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import LogInModal from "./LogInModal";
import googleLogo from "../assets/logo.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import showIcon from "../assets/show.png";
import hideIcon from "../assets/hide.png";
import logo from "../assets/image.png"; 

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-b from-green-100 to-white p-10 flex flex-col justify-center relative">
        <div className="absolute top-4 left-4 flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-black font-bold text-lg">Hunt The Career</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-black mt-16">
          Ensure a <span className="text-black">Fast and Successful Journey</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">Your Next Career Move</p>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white">
        <h2 className="text-2xl text-black text-center mb-6">
          Welcome to <span className="font-bold">Hunt The Career</span>
        </h2>

        {/* Social Login Buttons - Vertical Layout */}
        <div className="flex flex-col w-full space-y-4 mb-6">
          <button className="w-full py-2 bg-black text-white rounded flex items-center justify-center">
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button className="w-full py-2 bg-blue-700 text-white rounded flex items-center justify-center">
            <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 mr-2" />
            Sign up with LinkedIn
          </button>
          <button className="w-full py-2 bg-gray-900 text-white rounded flex items-center justify-center">
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
            Sign up with GitHub
          </button>
        </div>

        <div className="my-4 text-gray-500">OR</div>

        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded mb-4 text-black placeholder-gray-500" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-4 text-black placeholder-gray-500" />

        <div className="relative w-full mb-6">
          <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-3 border rounded text-black placeholder-gray-500 pr-10" />
          <img src={showPassword ? showIcon : hideIcon} alt="Toggle Password" className="absolute right-3 top-3 cursor-pointer w-5 h-5" onClick={() => setShowPassword(!showPassword)} />
        </div>
      
          {/* Checkbox */}
          <div className="flex items-center mb-4">
          <input
          id="sign-up_emailSub"
          type="checkbox"
          className="w-4 h-4 border-2 border-black bg-transparent checked:bg-white checked:border-black focus:ring-0 appearance-none 
          relative before:content-['✔'] before:absolute before:text-black before:text-xs before:left-[2px] before:top-[-1px] before:opacity-0 
          checked:before:opacity-100"
         />
         <label htmlFor="sign-up_emailSub" className="text-gray-600 ml-2">
           I want to receive updates from  Hunt The career about the latest job offers
         </label>
          </div>


        <button className="w-full py-3 bg-black text-white rounded">SIGN UP</button>
        <p className="text-gray-500 text-sm mt-4">
          Already a member? <a href="#" className="text-blue-500" onClick={() => setIsLoginModalOpen(true)}>Log in now</a>
        </p>
      </div>

      <LogInModal isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen} />
    </div>
  );
};

export default SignupPage;






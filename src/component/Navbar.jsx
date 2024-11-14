import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const about = () => toast("🦄 I am Aashutosh Heh!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce, 
  });

  const contact = () => toast(<div>
    <span>Check out my LinkedIn profile: </span>
    <a
      href="https://www.linkedin.com/in/aashutosh-patel/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline"
    >
      Aashutosh Patel
    </a>
  </div>, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

  return (
    <>
      <nav className="bg-purple-200 flex justify-between items-center px-4 h-12">
        <div className="logo font-bold">Aashus-Pass</div>
        <ul>
          <li className="flex gap-4">
            <Link className="font-bold" to="/">Home</Link>
            <button className='font-bold' onClick={about}>About</button>
            <button className='font-bold' onClick={contact}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        style={{ top: '48px' }}
      />
    </>
  );
}

export default Navbar;

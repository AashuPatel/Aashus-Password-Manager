import React from 'react';

function Navbar() {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-4 h-12 ">
      <div className="logo font-bold">Aashus-Pass</div>
      <ul>
        <li className=' flex gap-4'>
          <a className='font-bold' href="#">Home</a>
          <a className='font-bold' href="#">About</a>
          <a className='font-bold' href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

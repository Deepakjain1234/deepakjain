import React from "react";
import logo from '../../../public/images/logo.svg'
import Image from 'next/image'
import img2 from '../../../public/logo1.png'
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image className='logo-image1'src={logo}/>
          <Image className='logo-image' src={img2}/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

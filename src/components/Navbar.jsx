import  { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10'>
      <div className='text-white'>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='cursor-pointer text-white hover:text-[rgba(255,255,255,0.3)]'>Home</li>
        <li className='cursor-pointer text-white hover:text-[rgba(255,255,255,0.3)]'>Destinations</li>
        <li className='cursor-pointer text-white hover:text-[rgba(255,255,255,0.3)]'>Travel</li>
        <li className='cursor-pointer text-white hover:text-[rgba(255,255,255,0.3)]'>View</li>
        <li className='cursor-pointer text-white hover:text-[rgba(255,255,255,0.3)]'>Book</li>
      </ul>
      <div className='hidden md:flex'> 
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className=' cursor-pointer' size={20} /> : <HiOutlineMenuAlt4 size={20} className='text-white cursor-pointer'/>}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className='text-black'>BEACHES</h1>
          <li className=''>Home</li>
          <li className=''>Destinations</li>
          <li className=''>Travel</li>
          <li className=''>View</li>
          <li className=''>Book</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

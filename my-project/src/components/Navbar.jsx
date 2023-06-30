import {logo, close, menu} from '../assets'
import {navLinks} from '../constants/index'
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hookbank" className=' w-[124px] h-[32px]'/>

      <ul className=' list-none sm:flex hidden justify-end items-center flex-1 '>
        {navLinks.map((navLink, index)=>{
          const {id, title} = navLink
          return <li key={id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0': 'mr-10' } text-white`}>
            <Link to={id} spy={true} smooth={true} duration={500}>{title}</Link></li>})}
      </ul>

      <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle? close : menu} alt="menu button" className=' w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle((prev) => !prev)} />

        <div className={`${toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className=' list-none flex flex-col justify-end items-center flex-1 w-36'>
        {navLinks.map((navLink, index)=>{
          const {id, title} = navLink
          return <li key={id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0': 'mb-4' } text-white`}>
            <Link to={id} spy={true} smooth={true} duration={500}>{title}</Link></li>})}
      </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
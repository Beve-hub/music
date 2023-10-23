import React,{useState} from 'react'
import IMG from '../Assest/Kodi.png'
import STR from '../Assest/search.png'
import USR from '../Assest/user.png'
import NOT from '../Assest/notification.png'
import DON from '../Assest/clouddownload.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div className='sticky flex bg-[--btn-color] justify-between py-6 px-[5rem] '>
      <div className='md:flex items-center gap-20'>
        <div className='flex items-center gap-2'>
            <img src={IMG} alt='' className='w-[2rem] bg-white rounded-full p-1' />
            <h1 className='text-2xl font-medium text-white'>Buzzmart</h1>
        </div>
        <div className='sm:flex hidden'>
          <img src={STR} alt='' className='w-[16px] absolute pt-2 ml-4' />  
         <input type='text' placeholder='Search'  className='w-[20rem] pl-10 py-1 rounded-full  border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500'/>
        </div>
      </div>
      <div className='items-center gap-6 sm:flex hidden'>
        <img src={DON} alt='' className='w-[2rem]'/>
        <img src={NOT} alt='' className='w-[2em]'/>
        <img src={USR} alt='' className='w-[2em]'/>
      </div>
      <div onClick={handleNav} className='flex md:hidden text-white items-center '>
        {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[50%]  h-[30rem]  border-r-gray-900 bg-[#fffdfd] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
         <ul className=' text-color grid items-center justify-center uppercase pt-24 gap-6'>
           <li>downloads</li>
           <li> Profile</li>
         </ul>
      </div>
    </div>
  )
}

export default Navbar

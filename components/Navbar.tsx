import { logo } from '@/public/assets/inedx';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh sticky top-0 z-50 bg-bodyColor px-4">
      <div className='flex items-center justify-between h-full py-1 mx-auto max-w-container font-titleFont'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Image src={logo} alt="Logo" className='w-14' />
        </motion.div>
        <div className="items-center hidden mdl:inline-flex gap-7">
          <ul className='flex text[13px] gap-7'>
            <Link href="#home" className='flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}>
                Home</motion.li>
            </Link>
            <Link href="#about" className='flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}>
                About</motion.li>
            </Link>
            <Link href="#experience" className='flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}>
                Experience</motion.li>
            </Link>
            <Link href="#project" className='flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3, delay: 0.3
                }}>
                Project</motion.li>
            </Link>
            <Link href="#contact" className='flex items-center gap-1 font-medium duration-300 cursor-pointer text-textDark hover:text-textGreen nav-link'>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}>
                Contact</motion.li>
            </Link>
          </ul>
          <a href="https://rxresu.me/javiyabhumit54/bhumit" target='_blank'>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
              Resume</motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <div className='flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textGreen group'>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
          <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar

import Image from 'next/image'
import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import { FaGithub, FaLinkedinIn} from "react-icons/fa"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai"
import { BsFillPersonLinesFill} from "react-icons/bs"

const Navbar = () => {
    const [ nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }



  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center h-full px-2 2xl:px-16'>
        <Image src="..public/assets/vercel.svg" width={125} height={50} alt='/' />
        <div>
            <ul className='hidden md:flex'>
                <Link>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
                </Link>
                <Link>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div className='md:hidden'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
      </div>

      <div className='fixed left-0 top-20 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10'>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src="..public/assets/next.svg" width={87} height={35} alt='/' />
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer '>
                        <AiOutlineClose size={20}  />
                    </div>
                    <div>
                        <p className='w-[85%] md:w-[90%]'>Let's build something legendary together</p>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul>
                            <Link href="/">
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href="/">
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href="/">
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href="/">
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href="/">
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[]'>
                                Let's Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:sc'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:sc'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:sc'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:sc'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

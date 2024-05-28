import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contacts</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                 {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 p-4 rounded-xl '>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image src="/../" alt='' className="rounded-xl hover:scale-100 ease-in duration-300" width="64px" height="64px" />
                        </div>
                        <div>
                            <h2 className='py-2'>Victor Ogunwehin</h2>
                            <p>Software Developer</p>
                            <p className='py-4'>I am available for freelance or full time positions. Contact me and let's talk</p>
                        </div>
                    </div>
                    <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                        <div className='flex items-center justify-center py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                 {/* right */}
                 <div>
                    <div>
                        <form>
                            <div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type='text' />
                                </div>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                 </div>
                </div>
                <div className='flex justify-center py-4'>
                    <Link href="/">
                        <div>
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact

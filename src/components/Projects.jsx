import React from 'react'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../" alt=''
                            width="64px"
                            height="64px"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

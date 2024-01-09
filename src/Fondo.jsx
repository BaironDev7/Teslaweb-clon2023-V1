import React from 'react'

export const Fondo = () => {
  return (
    <section className='bg-black h-screen w-screen text-center relative overflow-hidden'>
        <div className='z-30 relative h-full flex flex-col'>
        <header>
            <h2 className='text-white pt-[90px] text-[42px] font-medium font-sans'>Model Y</h2>
            <p className='text-white text-[22px]'>Lease starting at $399/mo*</p>
        </header>

        <footer className='flex flex-col flex-grow justify-end'>
            <div className='text-white pb-10 gap-x-6 flex mx-auto min-[320px]:flex-col xl:flex-row lg:flex-row md:flex-row'>
            <a className='rounded font-medium px-24 py-2 bg-neutral-800/80 min-[320px]:m-2' href="#">Order Now</a>
            <a className='text-black rounded font-medium px-24 py-2 bg-neutral-50/60 min-[320px]:m-2' href="#">Demo Drive</a>
            </div>

            <p className='text-white pb-4 text-sm'>*Excludes taxes and fees with price subject to change. Available in select states. <a className='underline' href="#">See Details</a></p>
        </footer>
        </div>
        <header className='z-30 relative'>
            <h2 className='text-white pt-40 text-5xl font-medium'>Model Y</h2>
            <p className='text-white text-2xl'>Lease starting at $399/mo*</p>
        </header>

        <footer className='z-30 relative'>
            <a href="#">Order Now</a>
            <a href="#">Demo Drive</a>

            <p>*Excludes taxes and fees with price subject to change. Available in select states. <a href="#">See Details</a></p>
        </footer>

        <div className='absolute top-0 bottom-0 w-full z-10'>
            <video className='object-center h-full w-full object-cover' autoPlay muted loop src="src/assets/Tesla-pc.webm"></video>
        </div>
    </section>
  )
}

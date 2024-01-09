import React, { useState } from 'react'

export const Navbar = () => {
  let Links =[
    {name:"Vehicle",link:"/"},
    {name:"Energy",link:"/"},
    {name:"Charging",link:"/"},
    {name:"Discover",link:"/"},
    {name:"Shop",link:"/"},
    {name:"Support",link:"/"},
    {name: (
      <div>
        <ion-icon name="globe-outline"></ion-icon>
        Language
      </div>
    ), link: "/"},
    {name: (
      <div>
        <ion-icon name="person-circle-outline"></ion-icon>
        Account
      </div>
    ), link: "/"}
    
  ];
  let [open,setOpen]=useState(false);
  return (
    <div>
      <header className="py-2 md:py-5 min-[320px]:py-5 px-11 flex items-center fixed top-0 w-full md:bg-white min-[320px]:bg-white lg:bg-transparent xl:bg-transparent justify-between z-40 text-white min-[320px]:px-[24px]">
        <div className="flex flex-grow basis-0 min-[280px]:mr-4">
          <div className='logo-container py-2 w-full'>
          <svg
            class="h-6 w-32 md:text-black  md:bg-transparent min-[320px]:bg-transparent min-[320px]:bg-white min-[320px]:text-black lg:text-white xl:text-white"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
          </div>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                Vehicles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                Energy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                Charging
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                Shop
              </a>
            </li>
          </ul>
        </nav>

        <nav className="flex flex-grow basis-0 justify-end">
          <ul className="flex text-2xl [&>li>a>ion-icon]:inline-block [&>li>a>ion-icon]:px-2">
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                <ion-icon name="help-circle-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                <ion-icon name="globe-outline"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-black/30 hidden lg:block rounded transition-all duration-500
              ease-in-out"
              >
                <ion-icon name="person-circle-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden text-black md:text-black lg:text-black"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <nav className='lg:hidden'>
        <ul className={`lg:flex lg:items-center lg:pb-0 pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-590px]'} overflow-y-auto max-h-[100vh]`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='lg:ml-8 text-xl lg:my-[42px] my-8 min-[320px]:my-[42px]'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
        </nav>
      </header>
    </div>
  );
};

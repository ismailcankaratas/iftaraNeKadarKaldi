import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaWhatsapp, FaGithub } from 'react-icons/fa';
import Logo from '../assets/image/Logo.png'
import { useSelector } from "react-redux";
export default function Navbar(props) {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);
    const cities = useSelector(state => state.namazVakitleriSlice.cities)
    return (
        <>
            {/* Navigation starts */}
            {/* Mobile */}
            <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"}>
                <div className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full" onClick={() => setShow(!show)} />
                <div className="w-64 z-20 absolute left-0 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div className="px-6 pt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <p className="text-bold md:text2xl text-base pl-3 text-gray-800">İftara Nekadar Kaldı</p>
                                </div>
                                <div id="cross" className=" text-gray-800" onClick={() => setShow(!show)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                            <ul className="f-m-m">
                                <a>
                                    <li className="text-white pt-8">
                                        <div className="flex items-center">
                                            <div className="md:w-6 md:h-6 w-5 h-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                    <path d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z" stroke="#FA7316" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z" stroke="#FA7316" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z" stroke="#FA7316" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z" stroke="#FA7316" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-orange-500 ml-3 text-lg">AnaSayfa</p>
                                        </div>
                                    </li>
                                </a>
                                <a>
                                    <li className="text-gray-700 pt-8">
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <div className="md:w-6 md:h-6 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                                        <path
                                                            d="M2.33333 4.83333H4.83333C5.05435 4.83333 5.26631 4.74554 5.42259 4.58926C5.57887 4.43298 5.66667 4.22101 5.66667 4V3.16667C5.66667 2.72464 5.84226 2.30072 6.15482 1.98816C6.46738 1.67559 6.89131 1.5 7.33333 1.5C7.77536 1.5 8.19928 1.67559 8.51184 1.98816C8.8244 2.30072 9 2.72464 9 3.16667V4C9 4.22101 9.0878 4.43298 9.24408 4.58926C9.40036 4.74554 9.61232 4.83333 9.83333 4.83333H12.3333C12.5543 4.83333 12.7663 4.92113 12.9226 5.07741C13.0789 5.23369 13.1667 5.44565 13.1667 5.66667V8.16667C13.1667 8.38768 13.2545 8.59964 13.4107 8.75592C13.567 8.9122 13.779 9 14 9H14.8333C15.2754 9 15.6993 9.17559 16.0118 9.48816C16.3244 9.80072 16.5 10.2246 16.5 10.6667C16.5 11.1087 16.3244 11.5326 16.0118 11.8452C15.6993 12.1577 15.2754 12.3333 14.8333 12.3333H14C13.779 12.3333 13.567 12.4211 13.4107 12.5774C13.2545 12.7337 13.1667 12.9457 13.1667 13.1667V15.6667C13.1667 15.8877 13.0789 16.0996 12.9226 16.2559C12.7663 16.4122 12.5543 16.5 12.3333 16.5H9.83333C9.61232 16.5 9.40036 16.4122 9.24408 16.2559C9.0878 16.0996 9 15.8877 9 15.6667V14.8333C9 14.3913 8.8244 13.9674 8.51184 13.6548C8.19928 13.3423 7.77536 13.1667 7.33333 13.1667C6.89131 13.1667 6.46738 13.3423 6.15482 13.6548C5.84226 13.9674 5.66667 14.3913 5.66667 14.8333V15.6667C5.66667 15.8877 5.57887 16.0996 5.42259 16.2559C5.26631 16.4122 5.05435 16.5 4.83333 16.5H2.33333C2.11232 16.5 1.90036 16.4122 1.74408 16.2559C1.5878 16.0996 1.5 15.8877 1.5 15.6667V13.1667C1.5 12.9457 1.5878 12.7337 1.74408 12.5774C1.90036 12.4211 2.11232 12.3333 2.33333 12.3333H3.16667C3.60869 12.3333 4.03262 12.1577 4.34518 11.8452C4.65774 11.5326 4.83333 11.1087 4.83333 10.6667C4.83333 10.2246 4.65774 9.80072 4.34518 9.48816C4.03262 9.17559 3.60869 9 3.16667 9H2.33333C2.11232 9 1.90036 8.9122 1.74408 8.75592C1.5878 8.59964 1.5 8.38768 1.5 8.16667V5.66667C1.5 5.44565 1.5878 5.23369 1.74408 5.07741C1.90036 4.92113 2.11232 4.83333 2.33333 4.83333"
                                                            stroke="currentColor"
                                                            strokeWidth={1}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700 ml-3 text-lg">Şehirler</p>
                                            </div>
                                            <div onClick={() => setProduct(!product)}>
                                                {product ? (
                                                    <div className=" ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className="ml-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={14} height={14} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {product ? (
                                            <div>
                                                <ul className="my-3">
                                                    {cities.map(city => (
                                                        <li className="text-sm hover:text-orange-500 py-2 px-6" key={city.id}>
                                                            <a href={"/sehir/" + city.name.toLowerCase()}>
                                                                {city.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </li>
                                </a>
                            </ul>
                        </div>
                        {/* <div className="w-full">
                            <div className="flex justify-center mb-4 w-full px-6">
                                <div className="relative w-full">
                                    <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={10} cy={10} r={7} />
                                            <line x1={21} y1={21} x2={15} y2={15} />
                                        </svg>
                                    </div>
                                    <input className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="border-t border-gray-300">
                                <div className="w-full flex items-center justify-between px-6 pt-1">
                                    <div className="flex items-center">
                                        <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                        <p className=" text-gray-800 text-base leading-4 ml-2">Jane Doe</p>
                                    </div>
                                    <ul className="flex">
                                        <li className="cursor-pointer text-white pt-5 pb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </li>
                                        <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <nav className="w-full mx-auto bg-white shadow relative z-20">
                <div className="justify-between container px-6 h-16 flex items-center lg:items-stretch mx-auto">
                    <div className="flex items-center">
                        <div className="mr-10 flex items-center">
                            <Link to="/">
                                <img src={Logo} width="44px" />
                            </Link>
                            <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                İftara Nekadar Kaldı
                            </h3>
                        </div>
                        <ul className="pr-32 xl:flex hidden items-center h-full space-x-4">
                            <li className="hover:text-orange-600 cursor-pointer h-full flex items-center text-sm text-orange-600 tracking-normal">
                                <Link to="/">AnaSayfa</Link>
                            </li>
                            <li className="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal relative">
                                {deliverables ? (
                                    <ul className="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute  top-0">
                                        {cities.map(city => (
                                            (city.id != 0) && <li className="text-sm text-gray-800 hover:text-orange-500 py-2 px-6" key={city.id}>
                                                <a href={"/sehir/" + city.name.toLowerCase()}>
                                                    {city.name}
                                                </a>
                                            </li>

                                        ))}
                                    </ul>
                                ) : (
                                    ""
                                )}
                                Şehirler
                                <span className="ml-2" onClick={() => setDeliverables(!deliverables)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full xl:flex hidden items-center justify-end">
                        <div className="h-full flex items-center">
                            <div className="w-32 pr-16 h-full flex items-center justify-end border-r" />
                            <div className="w-full h-full flex">
                                <div className="w-16 xl:w-32 h-full flex items-center justify-center xl:border-r">
                                    <div className="relative">
                                        <div className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-gray-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                        <div className="animate-ping w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                    </div>
                                </div>
                                {/* <div aria-haspopup="true" className="cursor-pointer w-full flex items-center justify-end relative" onClick={() => setProfile(!profile)}>
                                    {profile ? (
                                        <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-64 ">
                                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={12} cy={7} r={4} />
                                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                    </svg>
                                                    <span className="ml-2">My Profile</span>
                                                </div>
                                            </li>
                                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={12} cy={12} r={9} />
                                                    <line x1={12} y1={17} x2={12} y2="17.01" />
                                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                </svg>
                                                <span className="ml-2">Help Center</span>
                                            </li>
                                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <circle cx={12} cy={12} r={3} />
                                                </svg>
                                                <span className="ml-2">Account Settings</span>
                                            </li>
                                        </ul>
                                    ) : (
                                        ""
                                    )}
                                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                    <p className="text-gray-800 text-sm ml-2">Jane Doe</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="visible xl:hidden flex items-center">
                        <div>
                            <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navigation ends */}
        </>
    );
}

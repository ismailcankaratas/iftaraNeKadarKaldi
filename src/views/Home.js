import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/Logo.png'
import PageTitle from '../Components/toolbox/PageTitle';

const Home = () => {
    return (
        <>
            <PageTitle title="İftara Ne Kadar Kaldı?" />
            <div className="container px-6 mx-auto">
                <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-96">
                    <div className="flex justify-center pt-6 pb-3">
                        <img src={Logo} alt="" width="100" />
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-3xl text-orange-600 font-bold">İftara Ne Kadar Kaldı?</h1>
                    </div>
                    <div className="flex justify-center my-4 w-full px-6">
                        <div className="relative w-2/4">
                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2" type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <h2 className='font-semibold text-2xl mb-4'>Hızlı Seçim</h2>
                        </div>
                        <div className='flex space-x-3 justify-center'>
                            <Link to="/sehir/istanbul" className='border-orange-700 border text-orange-700 hover:bg-orange-600 hover:text-white py-1 px-2 rounded-md'>İstanbul</Link>
                            <Link to="/sehir/ankara" className='border-orange-700 border text-orange-700 hover:bg-orange-600 hover:text-white py-1 px-2 rounded-md'>Ankara</Link>
                            <Link to="/sehir/izmir" className='border-orange-700 border text-orange-700 hover:bg-orange-600 hover:text-white py-1 px-2 rounded-md'>İzmir</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;

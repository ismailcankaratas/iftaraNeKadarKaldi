import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/Logo.png'
import ComboBox from '../Components/toolbox/ComboBox';
import PageTitle from '../Components/toolbox/PageTitle';

const Home = () => {
    return (
        <>
            <PageTitle title="İftara Ne Kadar Kaldı?" whatsappMessage={"İftara ne kadar kaldığını görmek için: " + window.location.href} />
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

                            <ComboBox />
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

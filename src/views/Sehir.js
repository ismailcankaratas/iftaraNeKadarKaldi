import React, { useEffect, useState } from 'react';
import PageTitle from '../Components/toolbox/PageTitle';

const Sehir = ({ city, currentCity }) => {
    const [iftaraKaldi, setIftaraKaldi] = useState(0);

    useEffect(()=> {
        function iftarHesap() {
            const date = new Date();
            const hours = currentCity.time?.split(":")[0];
            const minutes = currentCity.time?.split(":")[1];
            
            var iftarTime = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), hours,minutes).getTime(); 
            var nowTime = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()).getTime();
            
            var sure_farki = (iftarTime - nowTime) / 1000;
            var dakika = 60;
            var saat = dakika * 60;
            var gun = saat * 24;
    
            var saat_farki = Math.floor((sure_farki % gun) / saat);
            var dakika_farki = Math.floor((sure_farki % saat) / dakika);
            var saniye_farki = Math.floor((sure_farki % dakika));
    
            function diffrentRender(){
                if(saat_farki > 0) {
                    return `${saat_farki}s ${dakika_farki}dk`
                }else if (dakika_farki > 0) {
                    return `${dakika_farki}dk ${saniye_farki}sn`
                }else if (saniye_farki > 0) {
                    return `${saniye_farki} saniye`
                }else {
                    return `İftar vakti`
                }
            }
    
            setIftaraKaldi(diffrentRender())
        }
        iftarHesap()
    },[city,currentCity.time])

    return (
        <>
            <PageTitle title={city.toUpperCase()} whatsappMessage={city.toUpperCase() + " için iftara ne kadar kaldığını görmek için: " + window.location.href} urlIsActive="true" />
            
                <div className="container px-6 mx-auto">
                    <div className="rounded shadow relative bg-[#1e293b] z-10 -mt-8 mb-8 w-full h-96">
                        <div className="flex justify-center pt-5">
                            <h1 className="text-3xl text-orange-600 font-bold">İftara Ne Kadar Kaldı?</h1>
                        </div>
                        {!currentCity.loading ? (
                        <>
                            <div className='flex flex-col text-white text-center mt-4'>
                                <span className='text-2xl text-slate-500'>İftar Saati</span>
                                <span className='text-6xl'>{currentCity.time}</span>
                            </div>
                            <div className='text-center text-orange-600 mt-4 text-2xl'>
                                {iftaraKaldi}
                            </div>
                        </>
                        ): <div className='mt-12 text-center text-orange-600 font-bold text-2xl'>Loading...</div>}


                        {/* <div className='pt-5'>
                            <ProgressBar percent="63%" message="Az kaldı sabır" />
                        </div> */}
                    </div>
                </div>
        </>
    );
}


export default Sehir;

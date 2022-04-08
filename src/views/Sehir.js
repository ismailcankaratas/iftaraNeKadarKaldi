import React from 'react';
import PageTitle from '../Components/toolbox/PageTitle';

const Sehir = ({ city, currentCity }) => {
    function iftarHour(currentCity) {
        return (
            <>
                {(currentCity.hour) ? currentCity.hour.replace("saat", "") : "Yükleniyor..."}
            </>
        )
    }
    function iftarMin(currentCity) {
        return (
            <>
                {(currentCity.min) ? currentCity.min.replace("dakika.", "") : "Yükleniyor..."}
            </>
        )
    }
    function remainingTimeRender(currentCity) {
        return (
            <>
                {(currentCity.remainingTime === undefined) ? <h1>{city.toUpperCase()} İÇİN İFTAR VAKTİ.</h1> : remainingTime(currentCity)}
            </>
        )
    }
    function remainingTime(currentCity) {
        return (
            <>
                <div className='flex flex-col items-center'>
                    {iftarHour(currentCity)}
                    <div>Saat</div>
                </div>
                <span className="mx-3">:</span>
                <div className='flex flex-col items-center'>
                    {iftarMin(currentCity)}
                    <div>Dakika</div>
                </div>
            </>
        )
    }
    return (
        <>
            <PageTitle title={city.toUpperCase()} whatsappMessage={city.toUpperCase() + " için iftara ne kadar kaldığını görmek için: " + window.location.href} urlIsActive="true" />
            <div className="container px-6 mx-auto">
                <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-96">
                    <div className="flex justify-center pt-5">
                        <h1 className="text-3xl text-orange-600 font-bold">İftara Ne Kadar Kaldı?</h1>
                    </div>
                    <div className='flex text-xl w-full justify-center pt-5'>
                        {remainingTimeRender(currentCity)}
                    </div>

                    {/* <div className='pt-5'>
                        <ProgressBar percent="63%" message="Az kaldı sabır" />
                    </div> */}
                </div>
            </div>
        </>
    );
}


export default Sehir;

import React from 'react';
import PageTitle from '../Components/toolbox/PageTitle';

const Sehir = ({ city, currentCity }) => {
    return (
        <>
            <PageTitle title={city.toUpperCase()} urlIsActive="true" />
            <div className="container px-6 mx-auto">
                <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-96">
                    <div className="flex justify-center pt-5">
                        <h1 className="text-3xl text-orange-600 font-bold">İftara Ne Kadar Kaldı?</h1>
                    </div>
                    <div className='flex text-xl w-full justify-center pt-5'>
                        <div className='flex flex-col items-center'>
                            {(currentCity.hour) ? currentCity.hour.replace("saat", "") : 0}
                            <div>Saat</div>
                        </div>
                        <span className="mx-3">:</span>
                        <div className='flex flex-col items-center'>
                            {(currentCity.min) ? currentCity.min.replace("dakika.", "") : 0}
                            <div>Dakika</div>
                        </div>
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

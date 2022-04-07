import React from "react";
function ProgressBar({ percent, message }) {
    return (
        <>
            <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="flex justify-between items-center pb-2 flex-col">
                    <p className="text-xs text-orange-600 font-bold">{percent} Tamamlandı</p>
                    <p className="text-xs font-bold text-gray-800">
                        {message}
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="w-full bg-gray-200 h-1 mr-1 relative">
                        <div className={"w-[" + percent + "] h-1 bg-orange-600"} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProgressBar;

import { FaWhatsapp } from 'react-icons/fa';
const PageTitle = ({ title, urlIsActive, whatsappMessage }) => {
    function pageBack() {
        window.history.back()
    }
    function urlActive(urlIsActive) {
        if (urlIsActive) {
            return (
                <p className="flex items-center text-gray-200 text-xs">
                    <span>AnaSafa</span>
                    <span className="mx-2">&gt;</span>
                    <span>Sehir</span>
                    <span className="mx-2">&gt;</span>
                    <span>{title.toLowerCase()}</span>
                </p>
            )
        }
    }
    return (
        <>
            {/* Page title starts */}
            <div className="bg-orange-600 pt-8 pb-16 relative z-10">
                <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-col flex lg:flex-row items-start lg:items-center">
                        {/* <div className="flex items-center">
                            <img className="border-2 shadow border-gray-600 rounded-full mr-3" src="https://cdn.tuk.dev/assets/webapp/master_layouts/boxed_layout/boxed_layout2.jpg" alt="logo" />
                            <div>
                                <h5 className="text-sm text-white leading-4 mb-1">Andres Berlin</h5>
                                <p className="text-xs text-gray-400 leading-4">VP Operations</p>
                            </div>
                        </div> */}
                        <div className="ml-0 lg:ml-20 my-6 lg:my-0">
                            <h4 className="text-2xl font-bold leading-tight text-white mb-2">
                                {title}
                            </h4>
                            {urlActive(urlIsActive)}

                        </div>
                    </div>
                    <div className='flex'>
                        <button onClick={pageBack} className="focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">
                            Geri
                        </button>
                        <a href={"https://wa.me/?text=" + whatsappMessage} data-action="share/whatsapp/share" target="blank" className="focus:outline-none flex items-center space-x-1 transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">
                            <FaWhatsapp />
                            <div>Paylaş</div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Page title ends */}
        </>
    )
}

export default PageTitle;
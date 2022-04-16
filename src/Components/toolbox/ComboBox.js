import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Cevir } from '../../redux/features/namazVakitleriSlice'

export default function ComboBox() {
    const cities = useSelector(state => state.namazVakitleriSlice.cities)
    const [selected, setSelected] = useState(cities[0])
    const [query, setQuery] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredCity =
        query === ''
            ? cities
            : cities.filter((city) =>
                dispatch(Cevir(city.name)).replace(/\s+/g, '')
                    .includes(dispatch(Cevir(query)).replace(/\s+/g, ''))
            )
    function selectToNavigate(event) {
        setSelected(event)
        navigate("/sehir/" + event.name.toLowerCase());
    }
    return (
        <>
            <Combobox value={selected} onChange={(event) => selectToNavigate(event)}>
                <div>
                    <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#ff0000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        <Combobox.Input
                            autoComplete="off"
                            placeholder='Şehir arayın'
                            className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2"
                            displayValue={(city) => city.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredCity.length === 0 && query !== '' ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Aranan Şehir Bulunamadı.
                                </div>
                            ) : (
                                filteredCity.map((city) => (
                                    <Combobox.Option
                                        key={city.id}
                                        className={({ active }) =>
                                            `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-orange-500' : 'text-gray-900'
                                            }`
                                        }
                                        value={city}
                                    >

                                        {({ selected, active }) => (
                                            <>
                                                <Link
                                                    to={"/sehir/" + city.name.toLowerCase()}
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    <div className="text-orange-600 absolute ml-4 inset-0 flex items-center">
                                                        {city.id == 0 ? "" : city.id}
                                                    </div>
                                                    {city.name}
                                                </Link>
                                                {selected ? (
                                                    <Link
                                                        to={"/sehir/" + city.name.toLowerCase()}
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <CheckIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                                    </Link>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </>
    )
}

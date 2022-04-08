import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Cevir } from '../../redux/features/namazVakitleriSlice'

const cities = [
    { "id": "0", "name": "" },
    { "id": "1", "name": "ADANA" },
    { "id": "2", "name": "ADIYAMAN" },
    { "id": "3", "name": "AFYONKARAHİSAR" },
    { "id": "4", "name": "AĞRI" },
    { "id": "5", "name": "AMASYA" },
    { "id": "6", "name": "ANKARA" },
    { "id": "7", "name": "ANTALYA" },
    { "id": "8", "name": "ARTVİN" },
    { "id": "9", "name": "AYDIN" },
    { "id": "10", "name": "BALIKESİR" },
    { "id": "11", "name": "BİLECİK" },
    { "id": "12", "name": "BİNGÖL" },
    { "id": "13", "name": "BİTLİS" },
    { "id": "14", "name": "BOLU" },
    { "id": "15", "name": "BURDUR" },
    { "id": "16", "name": "BURSA" },
    { "id": "17", "name": "ÇANAKKALE" },
    { "id": "18", "name": "ÇANKIRI" },
    { "id": "19", "name": "ÇORUM" },
    { "id": "20", "name": "DENİZLİ" },
    { "id": "21", "name": "DİYARBAKIR" },
    { "id": "22", "name": "EDİRNE" },
    { "id": "23", "name": "ELAZIĞ" },
    { "id": "24", "name": "ERZİNCAN" },
    { "id": "25", "name": "ERZURUM" },
    { "id": "26", "name": "ESKİŞEHİR" },
    { "id": "27", "name": "GAZİANTEP" },
    { "id": "28", "name": "GİRESUN" },
    { "id": "29", "name": "GÜMÜŞHANE" },
    { "id": "30", "name": "HAKKARİ" },
    { "id": "31", "name": "HATAY" },
    { "id": "32", "name": "ISPARTA" },
    { "id": "33", "name": "MERSİN" },
    { "id": "34", "name": "İSTANBUL" },
    { "id": "35", "name": "İZMİR" },
    { "id": "36", "name": "KARS" },
    { "id": "37", "name": "KASTAMONU" },
    { "id": "38", "name": "KAYSERİ" },
    { "id": "39", "name": "KIRKLARELİ" },
    { "id": "40", "name": "KIRŞEHİR" },
    { "id": "41", "name": "KOCAELİ" },
    { "id": "42", "name": "KONYA" },
    { "id": "43", "name": "KÜTAHYA" },
    { "id": "44", "name": "MALATYA" },
    { "id": "45", "name": "MANİSA" },
    { "id": "46", "name": "KAHRAMANMARAŞ" },
    { "id": "47", "name": "MARDİN" },
    { "id": "48", "name": "MUĞLA" },
    { "id": "49", "name": "MUŞ" },
    { "id": "50", "name": "NEVŞEHİR" },
    { "id": "51", "name": "NİĞDE" },
    { "id": "52", "name": "ORDU" },
    { "id": "53", "name": "RİZE" },
    { "id": "54", "name": "SAKARYA" },
    { "id": "55", "name": "SAMSUN" },
    { "id": "56", "name": "SİİRT" },
    { "id": "57", "name": "SİNOP" },
    { "id": "58", "name": "SİVAS" },
    { "id": "59", "name": "TEKİRDAĞ" },
    { "id": "60", "name": "TOKAT" },
    { "id": "61", "name": "TRABZON" },
    { "id": "62", "name": "TUNCELİ" },
    { "id": "63", "name": "ŞANLIURFA" },
    { "id": "64", "name": "UŞAK" },
    { "id": "65", "name": "VAN" },
    { "id": "66", "name": "YOZGAT" },
    { "id": "67", "name": "ZONGULDAK" },
    { "id": "68", "name": "AKSARAY" },
    { "id": "69", "name": "BAYBURT" },
    { "id": "70", "name": "KARAMAN" },
    { "id": "71", "name": "KIRIKKALE" },
    { "id": "72", "name": "BATMAN" },
    { "id": "73", "name": "ŞIRNAK" },
    { "id": "74", "name": "BARTIN" },
    { "id": "75", "name": "ARDAHAN" },
    { "id": "76", "name": "IĞDIR" },
    { "id": "77", "name": "YALOVA" },
    { "id": "78", "name": "KARABüK" },
    { "id": "79", "name": "KİLİS" },
    { "id": "80", "name": "OSMANİYE" },
    { "id": "81", "name": "DÜZCE" },
]

export default function ComboBox() {
    const [selected, setSelected] = useState(cities[0])
    const [query, setQuery] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredPeople =
        query === ''
            ? cities
            : cities.filter((person) =>
                dispatch(Cevir(person.name)).replace(/\s+/g, '')
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
                            displayValue={(person) => person.name}
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
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                    Aranan Şehir Bulunamadı.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-orange-500' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >

                                        {({ selected, active }) => (
                                            <>
                                                <Link
                                                    to={"/sehir/" + person.name.toLowerCase()}
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    <div className="text-orange-600 absolute ml-4 inset-0 flex items-center">
                                                        {person.id == 0 ? "" : person.id}
                                                    </div>
                                                    {person.name}
                                                </Link>
                                                {selected ? (
                                                    <Link
                                                        to={"/sehir/" + person.name.toLowerCase()}
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

import React from "react";
import { Link } from 'react-router-dom';
import Food1 from '../img/food1.png'

export default function MakeOrder () {
    return (
        <div className="flex items-start w-full h-screen bg-slate-100">
            <div className="w-1/2 mx-[20px]">
                <div className='grid items-center overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Pilih Restoran</h1>
                    <ul>
                        <button className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran A
                                </h3>
                                <h3>
                                    1.2 km
                                </h3>
                            </div>
                        </button>
                        <button className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran B
                                </h3>
                                <h3>
                                    1.2 km
                                </h3>
                            </div>
                        </button>
                        <button className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran C
                                </h3>
                                <h3>
                                    1.2 km
                                </h3>
                            </div>
                        </button>
                        <button className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran D
                                </h3>
                                <h3>
                                    1.2 km
                                </h3>
                            </div>
                        </button>
                        <button className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran E
                                </h3>
                                <h3>
                                    1.2 km
                                </h3>
                            </div>
                        </button>
                    </ul>
                </div>
            </div>
            <div className="grid w-1/2 mx-[20px]">
                <div className='grid items-start overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Tambah Catatan</h1>
                    <form>
                        <label class="block ml-5">
                            <input class="px-5 py-5 w-[550px] border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-xl text-lg" placeholder="Tulis catatan..."/>
                        </label>
                    </form>
                </div>
                <div className='grid items-start overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Pilih Metode Pembayaran</h1>
                    <button className=" ml-5 flex place-items-center w-[550px] bg-white px-7 py-5 rounded-xl font-muli text-lg text-slate-400 hover:bg-slate-300">
                        Pilih metode pembayaran di sini
                    </button>
                </div>
                <div className='grid items-start overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Pilih Jenis Pengiriman</h1>
                    <button className=" ml-5 flex place-items-center w-[550px] bg-white px-7 py-5 rounded-xl font-muli text-lg text-slate-400 hover:bg-slate-300">
                        Pilih jenis pengiriman di sini
                    </button>
                </div>
            </div>
        </div>
    )
}
import {React} from "react";
import { useNavigate } from "react-router-dom";
import Food1 from '../img/food1.png'
import Food2 from '../img/food2.png'
import Food3 from '../img/food3.png'
import Food4 from '../img/food4.png'
import Food5 from '../img/food5.png'

export default function MakeOrder () {
    const navTrack = useNavigate();
    const navigateToTrack = () => {
        navTrack('/Track');
    };

    return (
        <div className="flex items-start w-full h-screen bg-slate-100">
            <div className="w-1/2 mx-[20px]">
                <div className='grid items-center overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Pilih Restoran</h1>
                    <ul>
                        <li>
                        <input type="radio" id="hosting-a" name="hosting" value="hosting-a" class="hidden peer" required/>
                        <label for="hosting-a" className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black peer-checked:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-10" src={Food1} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran A
                                </h3>
                                <h3>
                                    2.5 km
                                </h3>
                            </div>
                        </label>
                        </li>
                        <li>
                        <input type="radio" id="hosting-b" name="hosting" value="hosting-b" class="hidden peer"/>
                        <label for="hosting-b" className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black peer-checked:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food2} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran B
                                </h3>
                                <h3>
                                    2.1 km
                                </h3>
                            </div>
                        </label>
                        </li>
                        <li>
                        <input type="radio" id="hosting-c" name="hosting" value="hosting-c" class="hidden peer" required/>
                        <label for="hosting-c" className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black peer-checked:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food3} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran C
                                </h3>
                                <h3>
                                    1.5 km
                                </h3>
                            </div>
                        </label>
                        </li>
                        <li>
                        <input type="radio" id="hosting-d" name="hosting" value="hosting-d" class="hidden peer" required/>
                        <label for="hosting-d" className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black peer-checked:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food4} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran D
                                </h3>
                                <h3>
                                    3.7 km
                                </h3>
                            </div>
                        </label>
                        </li>
                        <li>
                        <input type="radio" id="hosting-e" name="hosting" value="hosting-e" class="hidden peer" required/>
                        <label for="hosting-e" className="flex place-items-center w-[600px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black peer-checked:bg-slate-300">
                            <img className="justify-center items-center h-auto max-w-full mr-7" src={Food5} alt="Img"/>
                            <div className=" grid justify-items-start">
                                <h3>
                                    Restoran E
                                </h3>
                                <h3>
                                    2.3 km
                                </h3>
                            </div>
                        </label>
                        </li>
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
                    <ul class="ml-5 grid w-full gap-3 md:grid-cols-2">
                        <div class="flex items-center pl-4 bg-white rounded-xl w-[260px]">
                            <input id="radio-pay-a" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="radio-pay-a" class="ml-5 flex place-items-center w-full bg-white px-7 py-5 rounded-xl font-muli text-lg text-black">Tunai</label>
                        </div>
                        <div class="flex items-center pl-4 bg-white rounded-xl w-[260px]">
                            <input id="radio-pay-b" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="radio-pay-b" class="ml-5 flex place-items-center w-full bg-white px-7 py-5 rounded-xl font-muli text-lg text-black">Dompet virtual</label>
                        </div>
                    </ul>
                </div>
                <div className='grid items-start overflow-hidden flex justify-between bg-slate-100 w-full p-4 border-2 border-gray-100 mx-auto'>
                    <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Pilih Jenis Pengiriman</h1>
                    <ul class="ml-5 grid w-full gap-3 md:grid-cols-2">
                        <div class="flex items-center pl-4 bg-white rounded-xl w-[260px]">
                            <input id="radio-deliver-a" type="radio" value="" name="radio-deliver" class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="radio-pay-a" class="ml-5 flex place-items-center w-full bg-white px-7 py-5 rounded-xl font-muli text-lg text-black">Kilat</label>
                        </div>
                        <div class="flex items-center pl-4 bg-white rounded-xl w-[260px]">
                            <input id="radio-deliver-b" type="radio" value="" name="radio-deliver" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="radio-deliver-b" class="ml-5 flex place-items-center w-full bg-white px-7 py-5 rounded-xl font-muli text-lg text-black">Santai</label>
                        </div>
                    </ul>
                </div>
                <div className="ml-[375px] mt-5">
                    <button className="bg-red-600 w-[200px] px-3 py-2 rounded-full font-muli text-lg text-white hover:bg-red-400"
                        onClick={navigateToTrack}>
                        Order
                    </button>
                </div>
                
            </div>
        </div>
    )
}
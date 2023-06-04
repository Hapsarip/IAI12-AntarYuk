import React from "react";
import { useNavigate } from "react-router-dom";
import Food1 from '../img/food1.png';
import Food2 from '../img/food2.png';
import Food3 from '../img/food3.png';
import Food4 from '../img/food4.png';

export default function History () {
    const navigate = useNavigate();
    const navigateToTrack = () => {
        navigate('/Track');
    };
    
    return (
        <div className="flex items-start w-full h-screen bg-slate-100">
            <div className="w-1/3 mx-[20px]">
                <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Sedang Berjalan</h1>
                <ul>
                    <button className="flex place-items-center w-[400px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                        <img
                        className="justify-center items-center h-auto max-w-full mr-7"
                        src={Food1}
                        alt="Img"
                        onClick={navigateToTrack}/>
                        <div className=" grid justify-items-start">
                            <h3>
                                Restoran A
                            </h3>
                            <h3>
                                2.5 km
                            </h3>
                        </div>
                        
                    </button>
                </ul>
            </div>
            <div className="w-1/3 mx-[20px]">
                <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Order Selesai</h1>
                <ul>
                    <button className="flex place-items-center w-[400px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                        <img className="justify-center items-center h-auto max-w-full mr-7" src={Food2} alt="Img"/>
                        <div className=" grid justify-items-start">
                            <h3>
                                Restoran B
                            </h3>
                            <h3>
                                2.1 km
                            </h3>
                        </div>
                    </button>
                    <button className="flex place-items-center w-[400px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                        <img className="justify-center items-center h-auto max-w-full mr-7" src={Food3} alt="Img"/>
                        <div className=" grid justify-items-start">
                            <h3>
                                Restoran C
                            </h3>
                            <h3>
                                1.5 km
                            </h3>
                        </div>
                    </button>
                    <button className="flex place-items-center w-[400px] bg-white px-7 py-5 mb-3 rounded-xl font-muli text-lg text-black focus:bg-slate-300">
                        <img className="justify-center items-center h-auto max-w-full mr-7" src={Food4} alt="Img"/>
                        <div className=" grid justify-items-start">
                            <h3>
                                Restoran D
                            </h3>
                            <h3>
                                3.7 km
                            </h3>
                        </div>
                    </button>
                </ul>
            </div>
            <div className="w-1/3 mx-[20px]">
                <h1 className='justify-center py-4 px-5 items-center text-left text-2xl font-medium'>Order Dibatalkan</h1>
            </div>
        </div>
    )
}
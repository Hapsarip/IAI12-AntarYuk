import React from "react";
import { useNavigate } from "react-router-dom";
import Food1 from '../img/food1.png'

export default function Tracking () {
    const navHistory = useNavigate();
    const navigateToHistory = () => {
        navHistory('/History');
    };

    return (
        <div className="grid items-start w-full h-screen bg-slate-100">
            <div className="h-[300px] w-full bg-maps">

            </div>
            <div className="flex h-full w-full">
                <div className="w-1/2">
                    <div className="mx-10 my-3 h-[150px] flex place-items-center w-[600px] bg-white px-10 rounded-xl font-muli text-lg text-black">
                        <img className="justify-center items-center h-auto max-w-full mr-10" src={Food1} alt="Img"/>
                        <div className=" grid justify-items-start">
                            <h3>
                                Restoran A
                            </h3>
                            <h3>
                                2.5 km
                            </h3>
                        </div>
                    </div>
                    <div className="mx-10 h-[150px] flex place-items-center w-[600px] bg-white px-10 rounded-xl font-muli text-lg text-black">
                        <div className=" grid justify-items-start">
                            <h2 className="font-bold">
                                Restoran A
                            </h2>
                            <h3>
                                Extra pedas, telurnya diceplok, jangan lupa pakai sendok.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="mx-10 my-3 h-[150px] flex place-items-center w-[600px] bg-white px-10 rounded-xl font-muli text-lg text-black">
                        <div className=" grid justify-items-start">
                            <h2 className="font-bold">
                                Alamat
                            </h2>
                            <h3>
                                Kost Putri Cumlaude, Jl. Pogung Kidul, Sleman, 55281.
                            </h3>
                        </div>
                    </div>
                    <div className="ml-[400px] mt-5">
                        <button className="bg-red-600 w-[200px] px-3 py-2 rounded-full font-muli text-lg text-white hover:bg-red-400"
                            onClick={navigateToHistory}>
                            Batal Order
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
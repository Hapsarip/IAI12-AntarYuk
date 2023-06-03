import React from "react";
import Motor from "../img/motor.png"

export default function Dashboard () {
    return (
        <div className="bg-gradient-to-br from-white via-slate-200 to-blue-800">
            <div className="flex items-center w-full h-screen px-[100px]">
                
                <div className='grid grid-cols-1 w-full flex items-center justify-center lg:w-3/5 mr-5'>
                    <div className="w-full text-black text-4xl font-bold text-left font-muli">
                        AntarYuk!
                    </div>
                    <div className="w-full text-black text-2xl text-left my-10 font-muli">
                        Pesan makanan dengan mudah dengan layanan pengantaran makanan kami yang cepat, praktis, dan terpercaya.
                    </div>
                    <button className="place-items-start bg-red-600 w-[200px] px-3 py-2 rounded-full font-muli text-lg text-white hover:bg-red-400">
                        Order Sekarang
                    </button>
                </div>
                <div className="hidden lg:flex h-full w-2/5 items-center justify-center">
                    <img class="justify-center items-center mx-10 mt-10" src={Motor} alt="bgImg"/>
                </div>
            </div>
        </div>
    )
}
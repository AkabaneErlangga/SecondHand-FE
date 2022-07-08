import React, { useState, useCallback } from 'react';
import Deskription from '../components/Deskription';
import DeskriptionHarga from '../components/DeskriptionHarga'
import ProfilSeller from "../components/ProfilSeller";
import Carousel from '../components/Carousel';


function ProductPageBuyer() {
    return (
        <div>

<div
                className="flex flex-1 ml-[120px] mobile:flex-col mobile:relative mobile:mt-3 mobile:p-2 mobile:-ml-[15px]">
                {/* <div className="flex flex-1 items-center justify-center">
                    <img
                        src="/assets/Jamcasio.png"
                        className="w-[80%] h-[80%] rounded-xl shadow-lg"/>
                </div> */}

                <Carousel/>

                <div
                    className="flex flex-1 items-center mobile:absolute justify-items-center flex-col mt-10 shadow-around mobile:items-center ml-5 ">
                    <DeskriptionHarga/>
                    <div>
                    <ProfilSeller/>
                </div>
                </div>

                

            </div>
            <div className="flex flex-1 justify-between">
                <Deskription/>

                
            </div>
            

        </div>
    );
}

export default ProductPageBuyer;

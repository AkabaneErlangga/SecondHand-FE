import React, {useState, useCallback} from 'react';
import Deskription from '../components/Deskription';
import DeskriptionHargaSeller from '../components/DeskriptionHargaSeller'
import ProfilSeller from "../components/ProfilSeller";
import Carousel from '../components/Carousel';

function ProductPage() {
    return (
        <div>

            <div
                className="flex flex-1 justify-center mobile:flex-col mobile:mt-3 mobile:p-3">
                
                    <Carousel/>
                
                


                <div
                    className="flex flex-1 items-center justify-items-center flex-col mt-10 shadow-around mobile:items-center ">
                    <DeskriptionHargaSeller/>
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

export default ProductPage;

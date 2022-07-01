import React from "react";
import {Button} from "@material-tailwind/react";
import {Modal} from "@mui/material";

function DeskriptionHarga() {


    return (
        <div>
            <div className="shadow-md px-2 py-2">
                <h1 className="title text-[40px] mobile:text-[30px]">Jam Tangan Casio</h1>
                <p className="pr-[4rem] text-justify mt-1 mobile:pr-0 color-grey-600">
                    Aksesoris
                </p>
                <p className="mt-1 text-3xl">
                    <b>Rp 250.000</b>
                </p>

                <Button
                    className="ml-10 mb-3.5 mt-6  px-4 py-2 w-60 bg-purple-600 border-solid border-2 rounded-lg"
                     >Saya ingin nego</Button>

                
            </div>
        </div>
    );
}

export default DeskriptionHarga;

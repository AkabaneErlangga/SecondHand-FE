import React from "react";
import {Button} from "@material-tailwind/react";

function ProfilSeller() {
    return (
        <div>

            <div className="flex w-80 shadow-md mt-10 rounded-lg">
                <div className="mt-3 mb-3 ml-5">
                    <img src="/assets/FotProfil.png" className=""></img>
                </div>

                <div className="ml-5 mt-2">
                    <h1>Nama Penjual</h1>
                    <p>Kota</p>
                </div>
            </div>
        </div>

    );
}

export default ProfilSeller;

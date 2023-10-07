import React from "react";
import { Metadata } from "next";

const TopSongs = () =>{
    return(
        <div className="grid grid-cols-5 grid-rows-5">
            <div className="col-[4/6] row-[1/4] bg-red-500">1st song</div>
            <div className="col-[1/4] row-[1/6] bg-green-500">2nd song</div>
            <div className="col-[4/6] row-[4/6] bg-yellow-500">3rd song</div>
        </div>
    )
}

export default TopSongs;
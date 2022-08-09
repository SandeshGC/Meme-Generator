import React from "react";
import siteIcon from "../images/troll-face.png"
export default function Header() {
  return (
    <div className="primary-gradient h-20 p-4 ">
          <div className="max-w-5xl h-full mr-auto ml-auto flex flex-row justify-between items-center">
            <img src={siteIcon} alt="troll face" className='h-full mr-5'/>
            <h2 className="text-white text-3xl font-bold mr-auto">Meme Generator</h2>
                  <p className="text-white text-sm">React Course - Project 3</p>
          </div>
    </div>
  );
}

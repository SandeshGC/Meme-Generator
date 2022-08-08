import React from "react";
// import memeImage from "../images/meme.png";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
 console.log(memeImage)
//  console.log(setMemeImage)
  function getMemeImage(){
    //change the link later
    setMemeImage(() => "https://i.imgflip.com/43a45p.png");
  }

  return (
    <div className="meme--container max-w-5xl ml-auto mr-auto w-full">
      <div className="w-1/2 ml-auto mr-auto flex flex-col">
        <div className="flex justify-between items-center">
          <input
            name="meme__text--top"
            placeholder="Top text"
            className="rounded-md w-1/2  max-w-sm mr-2 h-10 border-2 pl-2 pr-2 text-sm mt-4"
          />
          <input
            name="meme__text--bottom"
            placeholder="Bottom text"
            className=" rounded-md w-1/2 max-w-sm ml-2 h-10 border-2 pl-2 pr-2 text-sm mt-4"
          />
        </div>
        <button onClick={getMemeImage} className="rounded-md primary-gradient text-white h-10 mt-4">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme__img w-1/2 ml-auto mr-auto mt-6" />
    </div>
  );
}

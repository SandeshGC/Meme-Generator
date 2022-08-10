import React from "react";
// import memeImage from "../images/meme.png";
export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(""); //state that is init with memeImage
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  console.log(meme);
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  //  console.log(setMemeImage)
  function handleSubmit(event) {
    event.preventDefault();
    console.log(meme.topText);
    console.log(meme.bottomText);
    console.log(meme.memeImage);
    // setMeme((prevMeme) => ({ ...prevMeme, memeImage: { randomImage } }));
    //function to get meme image
    //change the link later
    // setMemeImage("http://i.imgflip.com/1bij.jpg");
  }

  return (
    <div className="meme--container w-fit mt-12 max-w-5xl ml-auto mr-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex justify-between items-center">
          <input
            name="topText"
            value={meme.topText}
            placeholder="Top text"
            onChange={handleChange}
            className="rounded-md w-1/2  max-w-sm mr-2 h-10 border-2 pl-2 pr-2 text-sm mt-4"
          />
          <input
            name="bottomText"
            value={meme.bottomText}
            placeholder="Bottom text"
            onChange={handleChange}
            className=" rounded-md w-1/2 max-w-sm ml-2 h-10 border-2 pl-2 pr-2 text-sm mt-4"
          />
        </div>
        <button className="rounded-md primary-gradient text-white h-10 mt-4">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme relative right-0 mt-6">
        <img
          src={meme.memeImage}
          alt="a meme"
          className="meme__img w-full ml-auto mr-auto rounded-md"
        />
        <h1 className="meme__text uppercase text-5xl text-center w-full m-0 text-white top-1 absolute tracking-tighter font-extrabold">
          {meme.topText}
        </h1>
        <h1 className="meme__text uppercase text-5xl text-center w-full m-0 text-white bottom-1 absolute tracking-tighter font-extrabold">
          {meme.bottomText}
        </h1>
      </div>
    </div>
  );
}

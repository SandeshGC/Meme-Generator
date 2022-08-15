import React from "react";
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "https://i.imgflip.com/28j0te.jpg",
  }); //stores the particular meme that is displayed right now
  const [allMemes, setAllMemes] = React.useState([]);
  //initiated allMemes state as an empty array
  //stores all memes from api

  React.useEffect(() => {
    //fetches data from api
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json()) //returns a promise
      .then((res) => setAllMemes(res.data.memes)); //takes data.memes from the promise which is an array of objects and sets the state;
  }, []);

  //while clicking the "get new meme image btn"
  //to get new meme image:
  function handleSubmit(event) {
    event.preventDefault();
    //getting a random number for the index of "allMemes" array
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    console.log(allMemes[randomNumber].url);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeImage: allMemes[randomNumber].url,
        //sets a random image url as "memeImage" from the 'allMemes array of memes'
      };
    });
  }
  //handle change on input
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
        //changes the value of the "key" whose value was changed, by looking at the name of the "form element"
      };
    });
  }

  return (
    <div className="meme--container md:max-w-xl max-w-md mt-12 ml-auto mr-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex justify-between items-center">
          <input
            name="topText"
            value={meme.topText}
            placeholder="Top text"
            onChange={handleChange}
            className="rounded-md w-1/2 max-w-sm mr-2 h-10 border-2 pl-2 pr-2 text-sm mt-4"
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
      <div className="meme relative right-0 w-full mt-6">
        <img
          src={meme.memeImage}
          alt="a meme"
          className="meme__img max-w-full w-full ml-auto mr-auto rounded-md"
        />
        <h1 className="meme__text border-amber-400 uppercase text-5xl text-center w-full m-0 text-white top-1 absolute tracking-tighter font-extrabold">
          {meme.topText}
        </h1>
        <h1 className="meme__text border-amber-400 uppercase text-5xl text-center w-full m-0 text-white bottom-1 absolute tracking-tighter font-extrabold">
          {meme.bottomText}
        </h1>
      </div>
    </div>
  );
}

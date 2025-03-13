import { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log("json - ", json);
    setMemes(json.memes);
  };

  return (
    <div className="flex">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((item, i) => <MemeCard key={i} data={item} />)
      )}
    </div>
  );
};

export default Body;

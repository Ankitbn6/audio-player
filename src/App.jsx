import { useEffect, useRef, useState } from "react";

function App() {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const handleClick = (action) => {
    if (action === "prev10") {
      audioRef.current.currentTime -= 10;
    } else audioRef.current.currentTime += 10;
  };
  useEffect(() => {
    let myArray = src.split("/");
    let len = myArray.length;
    let fileName = myArray[len - 1];
    let newArray = fileName.split(".");
    setTitle(newArray[0]);

    if (src!= "") {
      localStorage.setItem("audiolink", src);
    }
  }, [src]);
  useEffect(() => {
    let link = localStorage.getItem("audiolink");
    if (link.length != 0) {
      setSrc(link);
      audioRef.current.currentTime = localStorage.getItem("AudioTime");
    }
  }, []);
  return (
    <div>
      <div className="text-center mt-[150px] mb-12">
        <div className="mb-8 text-orange-600 text-lg md:text-2xl lg:text-3xl">{title}</div>
        <input
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          value={src}
          className="border-2 rounded-lg border-purple-500 w-[250px] md:w-[500px] lg:w-[700px] h-[50px] p-2 text-lg focus:outline-none focus:text-purple-600"
          placeholder="Enter the link address of audio"
        />
      </div>
      <audio
        ref={audioRef}
        className="border-2 border-purple-700 rounded-[30px] m-auto w-[290px] md:w-[600px] lg:w-[900px] "
        controls="controls"
        src={src}
        onTimeUpdate={() => {
          localStorage.setItem("AudioTime", audioRef.current.currentTime);
          if(audioRef.current.paused)
            {
              setPlaying(false)
            }
            else
            setPlaying(true)
        }}
      ></audio>
      <div className="flex justify-center mt-8 gap-8">
        <img
          className="w-[50px] rounded-full active:bg-purple-100 active:text-white"
          src="https://img.icons8.com/?size=256&id=52193&format=png"
          onClick={() => {
            handleClick("prev10");
          }}
        />
        <div
          onClick={() => {
            if (!audioRef.current.paused&&playing) {
              audioRef.current.pause();
              setPlaying(false);
            }
            else 
            {
              audioRef.current.play();
              setPlaying(true);
            }
          }}
          className="text-2xl border-2 rounded-full active:bg-none  active:text-black bg-purple-700 text-white flex items-center justify-center w-[100px]" 
        >
          {playing ? "Pause" : "Play"}
        </div>
        <img
          className="w-[50px] rounded-full active:bg-purple-100 active:text-white"
          src="https://img.icons8.com/?size=256&id=52187&format=png"
          onClick={() => {
            handleClick("skip10");
          }}
        />
      </div>
    </div>
  );
}

export default App;

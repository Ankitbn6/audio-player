import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const [src, setSrc] = useState("");
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef(null);
//   const handleClick = (action) => {
//     if (action === "prev10") {
//       videoRef.current.currentTime -= 10;
//     } else videoRef.current.currentTime += 10;
//   };
//   useEffect(() => {
//     if (src != "" && src) {
//       let myArray = [];
//       let fileName = [];
//       myArray = src.split("/");
//       let len = myArray.length;
//       fileName = myArray[len - 1];
//       let newArray = fileName.split(".");
//       setTitle(newArray[0]);
//       localStorage.setItem("videoLink", src);
//     }
//   }, [src]);
  useEffect(() => {
    let link = localStorage.getItem("videoLink");
    if (link != "") {
      setSrc(link);
    //   videoRef.current.currentTime = localStorage.getItem("AudioTime");
    }
  }, []);
  return (
    <div>
      <div className="text-center mt-[150px] mb-12">
        <div className="flex justify-center items-center gap-0">
          <input
            onChange={(e) => {
              setSrc(e.target.value);
              localStorage.setItem("videoLink",e.target.value);
            }}
            value={src}
            className="border-2 rounded-lg border-purple-500 w-[250px] md:w-[500px] lg:w-[700px] h-[50px] p-2 text-lg focus:outline-none focus:text-purple-600"
            placeholder="Enter the link address of audio"
          />
          <div
            className=" border-2 bg-[rgb(255,255,0)]  flex text-red-500 text-2xl  items-center justify-center   w-[50px] h-[50px] rounded-xl"
            onClick={() => {
              setSrc("");
            }}
          >
            X
          </div>
        </div>
      </div>
      
      <iframe className="m-auto w-[300px] h-[215px] md:w-[620px] md:h-[315px] rounded-lg"  src={src}></iframe>
      {/* <div className="flex justify-center mt-8 gap-8">
        <img
          className="w-[50px] rounded-full active:bg-purple-100 active:text-white"
          src="https://img.icons8.com/?size=256&id=52193&format=png"
          onClick={() => {
            handleClick("prev10");
          }}
        />
        <div
          onClick={() => {
            if (!videoRef.current.paused && playing) {
              videoRef.current.pause();
              setPlaying(false);
            } else {
              videoRef.current.play();
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
      </div> */}
    </div>
  );
};

export default VideoPlayer;

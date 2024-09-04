import React, { useRef } from "react";
import CustomButton from "../../CustomButton/CustomButton";
// import video1 from "../../../assets/videos/istockphoto-1398606357-640_adpp_is.mp4";
// import img from "../../../assets/photos/image-1.jpeg";
import {motion} from "framer-motion"
const VideoPlayer = ({videoSrc , imageSrc}) => {
  const videoRef = useRef(null);

  const handleToggle = (isPlaying) => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="video-player w-[592px] h-[504px] relative">
        <motion.video
          className="w-[452px] h-[240px] absolute z-20 top-[200px] left-32 rounded-md"
          ref={videoRef}
          controls={false}
          initial= {{opacity: 0 , x: 500}}
          animate={{opacity: 1, x:0}}
          transition={{duration:3}}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <motion.img src={imageSrc} className="w-[458px] " alt="Video Thumbnail"
         initial= {{opacity: 0 , x: -500}}
         animate={{opacity: 1, x:0}}
         transition={{duration:2.6}}
        />
        <div className="absolute z-30 top-[179px] right-28">
          <CustomButton onToggle={handleToggle}/> 
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

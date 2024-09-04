import React, { useRef } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { motion } from 'framer-motion';
const videoPlayedTwo = ({videoSrc , imageSrc}) => {
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
          className="w-[452px] h-[240px] absolute z-20 bottom-[230px] left-32 rounded-md"
          ref={videoRef}
          controls={false}
          initial= {{opacity: 0 , x: -500}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 5}}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <motion.img src={imageSrc}
         className="w-[458px] absolute z-10 bottom-24" alt="Video Thumbnail" 
         initial= {{opacity: 0 , x: 500}}
         animate={{opacity: 1, x:0}}
         transition={{duration:4}}
         />
        <div className="absolute z-30 top-[90px] left-28">
          <CustomButton onToggle={handleToggle} />
        </div>
      </div>
    </>
  );
};

export default videoPlayedTwo;

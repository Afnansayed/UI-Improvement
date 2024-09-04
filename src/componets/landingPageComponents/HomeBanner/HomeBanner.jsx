import { FaSearch } from "react-icons/fa";
import banner1 from '../../../assets/banner/banner1.webp';
import {motion} from 'framer-motion';
const HomeBanner = () => {
    return (
        <>
            <motion.div
             style={{backgroundImage: `url(${banner1})`}}
              className='mb-12 flex flex-col justify-center items-center space-y-6 text-[#ffffff] p-20'
              initial= {{opacity: 0 , y: -100}}
              animate={{opacity: 1, y:0}}
              transition={{duration:0.5}}
              >
              <motion.h1 
              className="text-5xl font-bold"
              initial= {{opacity: 0 , x: -500}}
              animate={{opacity: 1, x:0}}
              transition={{duration:1.2}}
              >Your Portal to india's <br />Exquisite Real Estate</motion.h1>
              <motion.p
               initial= {{opacity: 0 , x: -500}}
               animate={{opacity: 1, x:0}}
               transition={{duration: 2}}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
              <motion.div 
              className='text-[#fff] flex items-center gap-3 bg-[#0b4689] p-2 w-[210px]'
              initial= {{opacity: 0 , x: 500}}
              animate={{opacity: 1, x:0}}
              transition={{duration:2.6}}
              > <span><FaSearch/></span> Find Property</motion.div>
        </motion.div>
        </>
    );
};

export default HomeBanner;
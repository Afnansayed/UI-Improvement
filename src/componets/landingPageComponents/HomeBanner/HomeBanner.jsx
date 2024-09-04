import { FaSearch } from "react-icons/fa";
import banner1 from '../../../assets/banner/banner1.webp';

const HomeBanner = () => {
    return (
        <>
            <div style={{backgroundImage: `url(${banner1})`}} className='mb-12 flex flex-col justify-center items-center space-y-6 text-[#ffffff] p-20'>
              <h1 className="text-5xl font-bold">Your Portal to india's <br />Exquisite Real Estate</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className='text-[#fff] flex items-center gap-3 bg-[#0b4689] p-2 w-[210px]'> <span><FaSearch/></span> Find Property</div>
        </div>
        </>
    );
};

export default HomeBanner;
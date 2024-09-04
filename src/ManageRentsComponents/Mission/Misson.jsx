import React from "react";
import DeshlineCard from "../../SheardComponents/DeshlineCard/DeshlineCard";
import imge from '../../assets/photos/image-10.jpg'
const Misson = () => {
  return (
    <>
      <div className="relative mb-40 p-8">
        <div className="flex justify-end">
          <img src={imge} className="max-w-3xl h-[450px] rounded-sm" alt="" />
        </div>
        <div className="absolute bottom-[-100px] left-[100px]">
          <DeshlineCard bgColor={"#fdf0e7"} title={"Mission Statement"} />
        </div>
      </div>
    </>
  );
};

export default Misson;

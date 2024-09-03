import React from "react";
import img1 from '../../assets/photos/image-7.jpg';
import img2 from '../../assets/photos/images-8.jpeg';
const Testimonial = () => {
  return (
    <div>
           <h3 className="text-3xl font-bold text-center mb-8">Testimonials</h3>
      <section className="p-2 flex gap-5 mb-6">
        <div className="container max-w-xl mx-auto bg-[#ecf5ff] ">
          <div className="flex flex-col items-center w-full p-6 space-y-3 rounded-md  lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
              "Et, dignissimos obcaecati. Recusandae praesentium doloribus
              vitae? Rem unde atque mollitia!"
            </blockquote>
            <img
              src={img2}
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <div className="text-center dark:text-gray-600">
              <p>Leroy Jenkins</p>
              <p>CEO of Company Co.</p>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                aria-label="Page 1"
                className="w-2 h-2 rounded-full dark:bg-gray-900"
              ></button>
              <button
                type="button"
                aria-label="Page 2"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
              <button
                type="button"
                aria-label="Page 3"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
              <button
                type="button"
                aria-label="Page 4"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
            </div>
          </div>
        </div>
        <div className="container max-w-xl bg-[#ecf5ff]  mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-3 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
              "Et, dignissimos obcaecati. Recusandae praesentium doloribus
              vitae? Rem unde atque mollitia!"
            </blockquote>
            <img
              src={img1}
              alt=""
              className="w-20 h-20 rounded-full dark:bg-gray-500"
            />
            <div className="text-center dark:text-gray-600">
              <p>Leroy Jenkins</p>
              <p>CEO of Company Co.</p>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                aria-label="Page 1"
                className="w-2 h-2 rounded-full dark:bg-gray-900"
              ></button>
              <button
                type="button"
                aria-label="Page 2"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
              <button
                type="button"
                aria-label="Page 3"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
              <button
                type="button"
                aria-label="Page 4"
                className="w-2 h-2 rounded-full dark:bg-gray-400"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

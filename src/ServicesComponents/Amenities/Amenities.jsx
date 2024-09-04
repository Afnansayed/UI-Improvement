import React from 'react';
import { FaBabyCarriage, FaDailymotion, FaDiagnoses, FaFilePowerpoint, FaGreaterThan, FaHSquare, FaJava, FaLandmark, FaMagento, FaVaadin } from 'react-icons/fa';
import { FaLandmarkDome, FaN } from 'react-icons/fa6';

const Amenities = () => {
    return (
        <div className='bg-gray-50 p-8 rounded-lg shadow-md'>
          <h4 className='text-2xl font-semibold mb-6'>Amenities</h4>
          <div className='grid grid-cols-4 gap-6'>
            <div className='space-y-12'>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaFilePowerpoint></FaFilePowerpoint></span>Power Back up</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaDiagnoses></FaDiagnoses></span>Park</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaGreaterThan></FaGreaterThan></span>Private Terrace/Garden</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaBabyCarriage></FaBabyCarriage></span>Intercom fecility</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaN></FaN></span>Notation</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaMagento></FaMagento></span>Power Back up</p>
            </div>
            <div className='space-y-12'>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaHSquare></FaHSquare></span>Humar Stapend</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaLandmark></FaLandmark></span>Parking </p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaVaadin></FaVaadin></span>Vitage </p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaJava></FaJava></span>Jusmin Appertment</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaLandmarkDome></FaLandmarkDome></span>Masque</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaDailymotion></FaDailymotion></span>Animation</p>
            </div>
            <div className='space-y-12'>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaFilePowerpoint></FaFilePowerpoint></span>Power Back up</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaDiagnoses></FaDiagnoses></span>Park</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaGreaterThan></FaGreaterThan></span>Private Terrace/Garden</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaBabyCarriage></FaBabyCarriage></span>Intercom fecility</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaN></FaN></span>Notation</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaMagento></FaMagento></span>Power Back up</p>
            </div>
            <div className='space-y-12'>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaHSquare></FaHSquare></span>Humar Stapend</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaLandmark></FaLandmark></span>Parking </p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaVaadin></FaVaadin></span>Vitage </p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaJava></FaJava></span>Jusmin Appertment</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaLandmarkDome></FaLandmarkDome></span>Masque</p>
                <p className='text-lg font-semibold'><span className='inline-block  mr-3'><FaDailymotion></FaDailymotion></span></p>
            </div>
          </div>
        </div>
    );
};

export default Amenities;
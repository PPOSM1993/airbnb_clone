'use client';
import Image from "next/image";

import { useState } from "react";

import Modal from "./Modal";
import useAddPropertyModal from "../hooks/useAddPropertyModal";
import React from "react";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
import { parse } from "path/posix";


const AddPropertyModal = () => {
    //
    //States
    const [currentStep, setCurrentStep] = useState(1);
    const[dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedRooms, setDataBedRooms] = useState('');
    const [dataBathRooms, setDataBathRooms] = useState('');
    const [dataGuest, setDataGuest] = useState('');
    //,
    //
    const addPropertyModal = useAddPropertyModal();
    //
    //Set Datas
    const setCategory = (category: string) => {
        setDataCategory(category)
    }
    //
    //



    const content = (
        <>
            {currentStep == 1? (
                <>
                    <h2 className="mb-6 text-2xl">Choose Category</h2>

                    <Categories 
                    
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}

                    />

                    <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
                </>
            ): currentStep == 2 ?  (
                <>
                    <h2 className="mb-6 text-2xl">Describe Your Place</h2>

                        <div className="pt-3 pb-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="">Title</label>
                                <input 
                                    type="text" 
                                    value={dataTitle}  
                                    onChange={(e) => setDataTitle(e.target.value)}
                                    className="w-full p-4 border border-gray-600 rounded-xl"
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="">Description</label>
                                <textarea 
                                    name="" 
                                    value={dataDescription}
                                    onChange={(e) => setDataDescription(e.target.value)}
                                    id="" 
                                    cols={10} 
                                    className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                                >

                                </textarea>
                            </div>
                        </div>
                    <CustomButton label="Previous" className="mb-2 bg-black hover:bg-gray-800" onClick={() => setCurrentStep(1)} />

                    <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
                </>
            ) :  currentStep == 3 ? (
                <>

                    <h2 className="mb-6 text-2xl">Details</h2>
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Price per night</label>
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input
                                type="number"
                                value={dataBedRooms}
                                onChange={(e) => setDataBedRooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                        />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Bathrooms</label>
                            <input
                                type="number"
                                value={dataBathRooms}
                                onChange={(e) => setDataBathRooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="">Max number of Guest</label>
                            <input
                                type="number"
                                value={dataGuest}
                                onChange={(e) => setDataGuest(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>

                    <CustomButton label="Previous" className="mb-2 bg-black hover:bg-gray-800" onClick={() => setCurrentStep(2)} />

                    <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
                </>
            ) : currentStep == 4 ? (
                <>
                    <h2 className="mb-6 text-2xl">Location</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        egfASDEg
                    </div>

                    <CustomButton label="Previous" className="mb-2 bg-black hover:bg-gray-800" onClick={() => setCurrentStep(3)} />
                    <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
                </>
            ) : (
                 <p>xD</p>
            )
        }
        </>
    )

    return(
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add Property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal
'use client';
import Modal from "./Modal";

import { useState } from "react";
import useSignUpModal from "../hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";


const SignUpModal = () => {

    const signUpModal = useSignUpModal()

    const content = (

      <>
        <br />
        <form action="" method="post" className="space-y-4">

          <input type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Email Address"/>
          <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Password"/>
          <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Repeat Password"/>

          <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
            The error message
          </div>

          <CustomButton label="Submit" onClick={() => alert("Hello World")}/>

        </form>
      </>


    )

  return (
    <Modal
        isOpen={signUpModal.isOpen}
        close={signUpModal.close}
        label="Sign Up"
        content={content}
    />
  )
}

export default SignUpModal

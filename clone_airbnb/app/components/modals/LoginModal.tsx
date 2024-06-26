'use client';
import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";


const LoginModal = () => {

    const loginModal = useLoginModal()

    const content = (

      <>
        <br />
        <form action="" method="post" className="space-y-4">
          <input type="text" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Email Address"/>
          <input type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Password"/>

          <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
            The error message
          </div>

          <CustomButton label="Submit" onClick={() => alert("Hello World")}/>

        </form>
      </>


    )

  return (
    <Modal
        isOpen={loginModal.isOpen}
        close={loginModal.close}
        label="Log in"
        content={content}
    />
  )
}

export default LoginModal

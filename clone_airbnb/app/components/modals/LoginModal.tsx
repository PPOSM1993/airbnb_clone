'use client';
import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "../../hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import { handleLogin } from "@/app/lib/action";
import apiService from "@/app/services/apiService";

const LoginModal = () => {

    const router = useRouter()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([]);
  
  //submit functionality

    const submitLogin = async () => {
      const formData = {
        email: email,
        password: password,
      }

    const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData));

    if (response.access) {
      //handle Login
      handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      router.push('/')
    } else {
      setErrors(response.non_field_errors);
    }
  }

    const content = (

      <>
        <br />
        <form action={submitLogin} className="space-y-4">
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Email Address"/>
          <input onChange={(e) => setPassword(e.target.value)}  type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" placeholder="Enter your Password"/>

          {errors.map((error, index) => {
            return (
              <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80" >
                {error}
              </div>
            )
          })}
          <CustomButton label="Submit" onClick={submitLogin}/>

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

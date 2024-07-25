'use client';

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import useWebSocket, { ReadyState } from "react-use-websocket";
import React, { useState, useEffect } from "react";

interface ConversationDetailProps {
    userId: string;
    token: string;
    conversation: ConversationType;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    userId,
    token,
    conversation
}) => {
    const myUser = conversation.users?.find((user) => user.id != userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
    },
    )


    useEffect(() => {
        console.log("Connection state changed", readyState);
    }, [readyState]);

    
  return (
    <>
        <div className='mx-h-[400px] overflow-auto flex flex-col space-y-4'>
            <div className='w-[80%] py-4 px-6 rounded-xl bg-gray-200'>
                <p className='font-bold text-gray-500'>Pedro Osorio</p>
                <p>xd</p>
            </div>

            <div className='w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200'>
                <p className='font-bold text-gray-500'>Pedro Osorio</p>
                <p>xd</p>
            </div>
        </div>

        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
            <input 
                type="text" 
                placeholder='Type your Message' 
                className='w-full p-2 bg-gray-200 rounded-xl'
            />

            <CustomButton 
                label="Send" 
                onClick={() => console.log("Clicked")}
                className="w-[95px]"
            />
        </div>
        
    </>
  )
}

export default ConversationDetail

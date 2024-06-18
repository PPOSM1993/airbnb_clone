'use client';
import CustomButton from '../components/forms/CustomButton'


const ConversationDetail = () => {
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
                className='w-full p-2 rounded-xl bg-gray-200'
            />

            <CustomButton 
                label="Send" 
                onClick={() => console.log("Clicked")}
                className="w-[100px]"
            />
        </div>
        
    </>
  )
}

export default ConversationDetail

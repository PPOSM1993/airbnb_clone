'use client';

import useLoginModal from '../hooks/useLoginModal';
import useAddPropertyModal from '../hooks/useAddPropertyModal'

import LoginModal from '../modals/LoginModal';

interface AddPrpertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPrpertyButtonProps> = ({
  userId
}) => {

  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();


  const airbnbYourHome = () => {
    if(userId) {
      addPropertyModal.open()
    } else {
      loginModal.open();
    }
  }
  return (
    <div
      onClick={airbnbYourHome}
      className='p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-100'
    >
      Airbnb your Home
      
    </div>
  )
}

export default AddPropertyButton

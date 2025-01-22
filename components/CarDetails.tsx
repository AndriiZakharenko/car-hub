import { Transition } from "@headlessui/react";

interface CarDetailsProps {
    isOpen: boolean;
  }
  
  const CarDetails = ({ isOpen}: CarDetailsProps) => {
    return (
        <Transition show={isOpen}>

        </Transition>
    )
}

export default CarDetails
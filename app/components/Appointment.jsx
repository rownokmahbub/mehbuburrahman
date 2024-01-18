import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem,Textarea} from "@nextui-org/react";
import { FaChalkboardUser } from "react-icons/fa6";

export default function Appointment() {
    const animals = [
        {label: "Cat"},
        {label: "Cat"},{label: "Cat"},{label: "Cat"},
     ]
     const doctors = [
        {label: "Aminla Gamridh"},
        {label: "Aminla Gamridh"},{label: "Aminla Gamridh"},{label: "Aminla Gamridh"},
     ]
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur')
  return (
    <>
      <Button color="primary" radius="sm" variant="shadow" onPress={onOpen}>
      <FaChalkboardUser/>
      Make an Appointment</Button>
      <Modal className="max-w-4xl w-full" backdrop="blur" scrollBehavior="inside" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Make an Appointment Now</ModalHeader>
              <ModalBody>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-center pb-4">
        <Input  type="text"  size="sm" label='Your Name' variant="bordered"/>
        <Input type="text"  size="sm" label='Your Email' variant="bordered"/>
        <Input type="text"  size="sm" label='Your Phone Number' variant="bordered"/>
        <Input labelPlacement="inside" type="date" size="sm" placeholder="date" label='date' radius="sm" variant="bordered"/>
      
      <Select 
        label="Select Department" 
        className="w-full" size="sm" variant="bordered" 
      >
        {doctors.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
       
      <Select 
        label="Select Doctor" 
        className="w-full" size="sm" variant="bordered" 
      >
        {doctors.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>

      </div>
      <Textarea
          
          variant='bordered'
          label="Description"
          labelPlacement="inside"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


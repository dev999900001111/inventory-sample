import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InventoryAllocation } from "../models";
import { InventoryService, ShippingService } from "../services";

interface InventoryAllocationPageProps {
  inventoryService: InventoryService;
  shippingService: ShippingService;
}

const InventoryAllocationPage: React.FC<InventoryAllocationPageProps> = ({
  inventoryService, shippingService,
}) => {
  const [inventoryAllocations, setInventoryAllocations] = useState<
    InventoryAllocation[]
  >([]);
  const [isAdjustingAllocation, setIsAdjustingAllocation] = useState(false);
  const [selectedAllocation, setSelectedAllocation] = useState<
    InventoryAllocation | null
  >(null);
  const [newAllocationQuantity, setNewAllocationQuantity] = useState("");
  const [allocationError, setAllocationError] = useState("");

  useEffect(() => {
    const fetchInventoryAllocations = async () => {
      const inventoryAllocations = await shippingService.getInventoryAllocation();
      setInventoryAllocations(inventoryAllocations);
    };
    fetchInventoryAllocations();
  }, [inventoryService]);

  const handleAdjustAllocationClick = (allocation: InventoryAllocation) => {
    setSelectedAllocation(allocation);
    setIsAdjustingAllocation(true);
  };

  const handleAdjustAllocationClose = () => {
    setIsAdjustingAllocation(false);
    setSelectedAllocation(null);
    setNewAllocationQuantity("");
    setAllocationError("");
  };

  const handleNewAllocationQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = event.target.value;
    setNewAllocationQuantity(newQuantity);
    if (isNaN(Number(newQuantity)) || Number(newQuantity) < 0) {
      setAllocationError("Please enter a valid quantity");
    } else {
      setAllocationError("");
    }
  };

  const handleAdjustAllocationSubmit = async () => {
    if (selectedAllocation && !allocationError) {
      const updatedAllocation = {
        ...selectedAllocation,
        allocatedQuantity: Number(newAllocationQuantity),
      };
      // await inventoryService.adjustInventoryAllocation(updatedAllocation);
      // const updatedAllocations = inventoryAllocations.map((allocation) =>
      //   allocation.id === updatedAllocation.id ? updatedAllocation : allocation
      // );
      // setInventoryAllocations(updatedAllocations);
      handleAdjustAllocationClose();
    }
  };
  
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Item Name</Th>
            <Th>Item Description</Th>
            <Th>Allocated Quantity</Th>
            <Th>Available Quantity</Th>
            {/* <Th>Expected Shipments</Th> */}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {inventoryAllocations.map((allocation) => (
            <Tr key={allocation.id}>
              <Td>{allocation.item.name}</Td>
              <Td>{allocation.item.description}</Td>
              <Td>{allocation.allocatedQuantity}</Td>
              <Td>{allocation.availableQuantity}</Td>
              {/* <Td>{allocation.expectedShipments}</Td> */}
              <Td>
                <Button
                  onClick={() => handleAdjustAllocationClick(allocation)}
                >
                  Adjust Allocation
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isAdjustingAllocation} onClose={handleAdjustAllocationClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adjust Allocation</ModalHeader>
          <ModalBody>
            <FormControl isInvalid={!!allocationError}>
              <FormLabel>Item Name</FormLabel>
              <Input value={selectedAllocation?.item.name} isReadOnly />
              <FormLabel>Item Description</FormLabel>
              <Input value={selectedAllocation?.item.description} isReadOnly />
              <FormLabel>Allocated Quantity</FormLabel>
              <Input
                value={newAllocationQuantity}
                onChange={handleNewAllocationQuantityChange}
              />
              <FormErrorMessage>{allocationError}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAdjustAllocationSubmit}>
              Save
            </Button>
            <Button onClick={handleAdjustAllocationClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InventoryAllocationPage;
import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Supplier } from "../models/Supplier";
import { Item } from "../models/Item";

interface PurchaseOrderConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  supplier: Supplier;
  item: Item;
  quantity: number;
}

const PurchaseOrderConfirmationDialog: React.FC<PurchaseOrderConfirmationDialogProps> = ({
  isOpen,
  onClose,
  supplier,
  item,
  quantity,
}) => {
  const totalCost = item.unitPrice * quantity;

  const handleConfirm = () => {
    // TODO: Send purchase order to SupplierService
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>注文確認</ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold">サプライヤー:</Text>
            <Text>{supplier.name}</Text>
            <Text>{supplier.email}</Text>
            <Text>{supplier.phone}</Text>
            <Text fontWeight="bold">アイテム:</Text>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>単価: {item.unitPrice}円</Text>
            <Text fontWeight="bold">数量:</Text>
            <Text>{quantity}</Text>
            <Text fontWeight="bold">合計金額:</Text>
            <Text>{totalCost}円</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <HStack spacing={4}>
            <Button colorScheme="blue" onClick={handleConfirm}>
              確認
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PurchaseOrderConfirmationDialog;
import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { Supplier, Item } from "../models";
import { SupplierService } from "../services";

interface ConfirmReorderPageProps {
  supplier: Supplier;
  item: Item;
  quantity: number;
}

const ConfirmReorderPage: React.FC<ConfirmReorderPageProps> = ({
  supplier,
  item,
  quantity,
}) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    try {
      await SupplierService.createPurchaseOrder(supplier, item, quantity);
      // Redirect to OrderDataPage
    } catch (error) {
      console.error(error);
      // Display error message
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <Box>
      <Heading as="h1" fontSize="2xl" mb={4}>
        注文内容の確認
      </Heading>
      <VStack align="stretch" spacing={4}>
        <Box>
          <Heading as="h2" fontSize="lg" mb={2}>
            商品詳細
          </Heading>
          <Divider />
          <VStack align="stretch" mt={4}>
            <Text fontSize="lg">{item.name}</Text>
            <Text>{item.description}</Text>
            <HStack>
              <Text>数量:</Text>
              <Text fontWeight="bold">{quantity}</Text>
            </HStack>
            <HStack>
              <Text>単価:</Text>
              <Text fontWeight="bold">{item.unitPrice}円</Text>
            </HStack>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" fontSize="lg" mb={2}>
            仕入先詳細
          </Heading>
          <Divider />
          <VStack align="stretch" mt={4}>
            <Text fontSize="lg">{supplier.name}</Text>
            <Text>{supplier.email}</Text>
            <Text>{supplier.phone}</Text>
            <Text>{supplier.address.street}</Text>
            <Text>
              {supplier.address.city}, {supplier.address.state}{" "}
              {supplier.address.zipCode}
            </Text>
            <Text>{supplier.address.country}</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" fontSize="lg" mb={2}>
            数量詳細
          </Heading>
          <Divider />
          <VStack align="stretch" mt={4}>
            <HStack>
              <Text>数量:</Text>
              <Text fontWeight="bold">{quantity}</Text>
            </HStack>
            <HStack>
              <Text>単価:</Text>
              <Text fontWeight="bold">{item.unitPrice}円</Text>
            </HStack>
            <HStack>
              <Text>合計:</Text>
              <Text fontWeight="bold">{item.unitPrice * quantity}円</Text>
            </HStack>
          </VStack>
        </Box>
        <Button
          colorScheme="blue"
          isLoading={isConfirming}
          loadingText="確認中..."
          onClick={handleConfirm}
        >
          確認する
        </Button>
      </VStack>
    </Box>
  );
};

export default ConfirmReorderPage;
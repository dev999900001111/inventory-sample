import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InventoryCount, Item } from "../models";
import { InventoryService } from "../services";

interface AdjustInventoryPageProps {
  inventoryService: InventoryService;
}

const AdjustInventoryPage: React.FC<AdjustInventoryPageProps> = ({
  inventoryService,
}) => {
  const [inventoryCounts, setInventoryCounts] = useState<InventoryCount[]>([]);
  const [adjustmentReason, setAdjustmentReason] = useState("");
  const [totalDiscrepancy, setTotalDiscrepancy] = useState(0);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchInventoryCounts = async () => {
      const items = await inventoryService.getInventoryItems();
      const counts = items.map((item) => new InventoryCount(item, 0));
      setInventoryCounts(counts);
    };
    fetchInventoryCounts();
  }, [inventoryService]);

  const handleActualQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCounts = [...inventoryCounts];
    const actualQuantity = parseInt(event.target.value);
    if (isNaN(actualQuantity)) {
      newCounts[index].actualQuantity = 0;
    } else {
      newCounts[index].actualQuantity = actualQuantity;
    }
    setInventoryCounts(newCounts);
  };

  const handleAdjustmentReasonChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAdjustmentReason(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const discrepancies = inventoryCounts.filter(
      (count) => count.actualQuantity !== count.systemQuantity
    );
    if (discrepancies.length === 0) {
      setFormError("No discrepancies found.");
      return;
    }
    try {
      await inventoryService.adjustInventory(
        discrepancies,
        adjustmentReason.trim()
      );
      setFormError("");
      setTotalDiscrepancy(0);
      setAdjustmentReason("");
      const items = await inventoryService.getInventoryItems();
      const counts = items.map((item) => new InventoryCount(item, 0));
      setInventoryCounts(counts);
    } catch (error) {
      setFormError(error.message);
    }
  };

  useEffect(() => {
    const total = inventoryCounts.reduce(
      (total, count) =>
        total + Math.abs(count.actualQuantity - count.systemQuantity),
      0
    );
    setTotalDiscrepancy(total);
  }, [inventoryCounts]);

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        在庫調整
      </Heading>
      <form onSubmit={handleSubmit}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>商品名</Th>
              <Th>商品説明</Th>
              <Th>システム数量</Th>
              <Th>実際の数量</Th>
              <Th>差異</Th>
            </Tr>
          </Thead>
          <Tbody>
            {inventoryCounts.map((count, index) => (
              <Tr key={count.item.id}>
                <Td>{count.item.name}</Td>
                <Td>{count.item.description}</Td>
                <Td>{count.systemQuantity}</Td>
                <Td>
                  <Input
                    type="number"
                    min={0}
                    value={count.actualQuantity}
                    onChange={(event) =>
                      handleActualQuantityChange(event, index)
                    }
                  />
                </Td>
                <Td>{Math.abs(count.actualQuantity - count.systemQuantity)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box mt={4}>
          <FormControl isInvalid={formError !== ""}>
            <FormLabel>調整理由</FormLabel>
            <Textarea
              value={adjustmentReason}
              onChange={handleAdjustmentReasonChange}
            />
            <FormErrorMessage>{formError}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box mt={4}>
          <Button type="submit" colorScheme="blue">
            調整する
          </Button>
        </Box>
      </form>
      <Box mt={4}>
        <strong>合計差異:</strong> {totalDiscrepancy}
      </Box>
    </Box>
  );
};

export default AdjustInventoryPage;
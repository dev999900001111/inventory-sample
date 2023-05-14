import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Item } from "../models";
import { InventoryService } from "../services";

interface InventoryStatusPageProps {
  inventoryService: InventoryService;
}

const InventoryStatusPage: React.FC<InventoryStatusPageProps> = ({
  inventoryService,
}) => {
  const [inventoryItems, setInventoryItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchInventoryItems = async () => {
      const items = await inventoryService.getInventoryItems();
      setInventoryItems(items);
    };
    fetchInventoryItems();
  }, [inventoryService]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = inventoryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">
          在庫状況
        </Heading>
        <InputGroup w="30%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="検索"
            value={searchQuery}
            onChange={handleSearch}
          />
        </InputGroup>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>商品名</Th>
            <Th>説明</Th>
            <Th>数量</Th>
            <Th>再発注ポイント</Th>
            <Th>単価</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredItems.map((item) => (
            <Tr
              key={item.id}
              bg={item.quantity < item.reorderPoint ? "red.100" : ""}
            >
              <Td>{item.name}</Td>
              <Td>{item.description}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.reorderPoint}</Td>
              <Td>{item.unitPrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default InventoryStatusPage;
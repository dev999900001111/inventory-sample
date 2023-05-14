```tsx
import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, SearchIcon } from "@chakra-ui/icons";
import { InventoryItem } from "../models/InventoryItem";
import { InventoryTableComponent } from "../components/InventoryTableComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { SideMenuComponent } from "../components/SideMenuComponent";

interface InventoryListPageProps {
  onLogout: () => void;
}

export const InventoryListPage: React.FC<InventoryListPageProps> = ({ onLogout }) => {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Call InventoryService to get inventory data
    // setInventoryData with the response data
  }, []);

  const handleSearch = (searchTerm: string) => {
    // Call InventoryService to search for inventory items
    // setInventoryData with the response data
  };

  const handleEdit = (id: string) => {
    // Navigate to InventoryEditPage for the selected inventory item
  };

  return (
    <Box>
      <HeaderComponent onLogout={onLogout} />
      <Flex>
        <SideMenuComponent activePage="inventoryList" />
        <Box flex="1" p="6">
          <Flex alignItems="center">
            <IconButton
              aria-label="Back"
              icon={<ChevronLeftIcon />}
              mr="4"
              onClick={() => {
                // Navigate back to previous page
              }}
            />
            <Heading as="h1" size="lg">
              在庫一覧
            </Heading>
          </Flex>
          <Stack direction="row" mt="6">
            <Input
              placeholder="検索"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={() => handleSearch(searchTerm)}
            />
          </Stack>
          <InventoryTableComponent inventoryData={inventoryData} onEdit={handleEdit} onSearch={handleSearch} />
        </Box>
      </Flex>
    </Box>
  );
};
```
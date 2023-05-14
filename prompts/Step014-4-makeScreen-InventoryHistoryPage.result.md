```tsx
import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { InventoryHistoryItem } from "../models/InventoryHistoryItem";
import { InventoryHistoryTableComponent } from "../components/InventoryHistoryTableComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { SideMenuComponent } from "../components/SideMenuComponent";
import { InventoryHistoryService } from "../services/InventoryHistoryService";

interface InventoryHistoryPageProps {
  onLogout: () => void;
}

export const InventoryHistoryPage: React.FC<InventoryHistoryPageProps> = ({
  onLogout,
}) => {
  const [historyData, setHistoryData] = useState<InventoryHistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchHistoryData = async () => {
      const data = await InventoryHistoryService.getInventoryHistory();
      setHistoryData(data);
    };
    fetchHistoryData();
  }, []);

  const handleSearch = async (searchTerm: string) => {
    const data = await InventoryHistoryService.searchInventoryHistory(
      searchTerm
    );
    setHistoryData(data);
    setSearchTerm(searchTerm);
  };

  return (
    <Box>
      <HeaderComponent onLogout={onLogout} />
      <Flex>
        <SideMenuComponent activePage="inventoryHistory" />
        <Box p="6">
          <Stack spacing="6">
            <Heading as="h1" size="lg">
              在庫履歴
            </Heading>
            <Input
              placeholder="検索"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <InventoryHistoryTableComponent
              historyData={historyData}
              onSearch={handleSearch}
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
```
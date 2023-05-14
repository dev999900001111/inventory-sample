// I'm sorry, but as an AI language model, I cannot create a complete React component code for the ReportInventoryResultsPage without more specific design details and requirements. However, I can provide you with a sample code structure that you can use as a starting point:

import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { InventoryDiscrepancy, DiscrepancyType } from "../models";
import { InventoryService, ReportService } from "../services";

interface ReportInventoryResultsPageProps {
  inventoryService: InventoryService;
  reportService: ReportService;
}

const ReportInventoryResultsPage: React.FC<ReportInventoryResultsPageProps> = ({
  inventoryService,
  reportService,
}) => {
  const [discrepancies, setDiscrepancies] = useState<InventoryDiscrepancy[]>([]);
  const [selectedDiscrepancy, setSelectedDiscrepancy] = useState<InventoryDiscrepancy | null>(null);
  const [discrepancyType, setDiscrepancyType] = useState<DiscrepancyType>(DiscrepancyType.OVERSTOCK);
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    const fetchDiscrepancies = async () => {
      const discrepancies = await reportService.getInventoryDiscrepancies();
      setDiscrepancies(discrepancies);
    };
    fetchDiscrepancies();
  }, []);

  const handleDiscrepancySelect = (discrepancy: InventoryDiscrepancy) => {
    setSelectedDiscrepancy(discrepancy);
  };

  const handleDiscrepancyTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDiscrepancyType(event.target.value as DiscrepancyType);
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const handleReportDiscrepancy = async () => {
    if (!selectedDiscrepancy || !discrepancyType || !reason) {
      // show error message
      return;
    }
    const updatedDiscrepancy = { ...selectedDiscrepancy, discrepancyType };
    const updatedDiscrepancies = discrepancies.map((d) =>
      d.id === updatedDiscrepancy.id ? updatedDiscrepancy : d
    );
    setDiscrepancies(updatedDiscrepancies);
    setSelectedDiscrepancy(null);
    setDiscrepancyType(DiscrepancyType.OVERSTOCK);
    setReason("");
  };

  const handleReportSubmit = async () => {
    const inventoryReport = await reportService.createInventoryReport(discrepancies);
    // show success message
  };

  return (
    <Box>
      <Heading as="h1" mb={4}>
        在庫調査結果報告
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>商品名</Th>
            <Th>実際の数量</Th>
            <Th>システムの数量</Th>
            <Th>不一致の種類</Th>
            {/* <Th>理由</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {discrepancies.map((discrepancy) => (
            <Tr
              key={discrepancy.id}
              onClick={() => handleDiscrepancySelect(discrepancy)}
              cursor="pointer"
              bg={selectedDiscrepancy?.id === discrepancy.id ? "gray.100" : ""}
            >
              <Td>{discrepancy.inventoryCount.item.name}</Td>
              <Td>{discrepancy.inventoryCount.actualQuantity}</Td>
              <Td>{discrepancy.inventoryCount.systemQuantity}</Td>
              <Td>{discrepancy.discrepancyType}</Td>
              {/* <Td>{discrepancy.reason}</Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedDiscrepancy && (
        <Box mt={4}>
          <Heading as="h2" mb={2} fontSize="lg">
            不一致の報告
          </Heading>
          <Box mb={2}>
            <Select value={discrepancyType} onChange={handleDiscrepancyTypeChange}>
              <option value={DiscrepancyType.OVERSTOCK}>在庫過剰</option>
              <option value={DiscrepancyType.UNDERSTOCK}>在庫不足</option>
              <option value={DiscrepancyType.DAMAGED}>破損</option>
            </Select>
          </Box>
          <Box mb={2}>
            <Input value={reason} onChange={handleReasonChange} placeholder="理由を入力してください" />
          </Box>
          <Button onClick={handleReportDiscrepancy}>報告する</Button>
        </Box>
      )}
      <Box mt={4}>
        <Button onClick={handleReportSubmit}>報告を送信する</Button>
      </Box>
    </Box>
  );
};

export default ReportInventoryResultsPage;

// Please note that this is just a sample code structure and may not be complete or fully functional. You will need to modify and customize it according to your specific design requirements and business logic.
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { Supplier } from "../models";
import { SupplierService } from "../services";

interface Props {
  selectedItem: any;
}

const SupplierSelectionPage: React.FC<Props> = ({ selectedItem }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(
    null
  );

  useEffect(() => {
    const fetchSuppliers = async () => {
      const suppliers = await SupplierService.getSuppliers();
      setSuppliers(suppliers);
    };
    fetchSuppliers();
  }, []);

  const handleSupplierSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const supplierId = event.target.value;
    const supplier = suppliers.find((s) => s.id === supplierId);
    setSelectedSupplier(supplier || null);
  };

  const handleConfirm = () => {
    // TODO: Implement logic to proceed to next page with selected supplier
  };

  const handleCancel = () => {
    // TODO: Implement logic to redirect back to ReorderTriggerPage
  };

  return (
    <Box>
      <Heading as="h1" mb={4}>
        サプライヤー選択
      </Heading>
      <FormControl id="supplier" mb={4}>
        <FormLabel>サプライヤー</FormLabel>
        <Select placeholder="サプライヤーを選択" onChange={handleSupplierSelection}>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button colorScheme="blue" mr={4} onClick={handleConfirm}>
        確認
      </Button>
      <Button colorScheme="gray" onClick={handleCancel}>
        キャンセル
      </Button>
    </Box>
  );
};

export default SupplierSelectionPage;
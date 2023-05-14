import { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Input,
    Button,
    useToast,
} from "@chakra-ui/react";
import { Item, Supplier } from "../models";
import { InventoryService, SupplierService } from "../services";

interface Props {
    inventoryService: InventoryService;
    supplierService: SupplierService;
}

const ReorderTriggerPage: React.FC<Props> = ({
    inventoryService,
    supplierService,
}) => {
    const [items, setItems] = useState<Item[]>([]);
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const toast = useToast();

    useEffect(() => {
        const fetchItems = async () => {
            const itemsToReorder = await inventoryService.getItemsToReorder();
            setItems(itemsToReorder);
        };
        fetchItems();
    }, [inventoryService]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            const suppliers = await supplierService.getSuppliers();
            setSuppliers(suppliers);
        };
        fetchSuppliers();
    }, [supplierService]);

    const handleQuantityChange = (itemId: string, quantity: number) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: quantity,
        }));
    };

    const handleReorderClick = async () => {
        const itemsToReorder = items.filter(
            (item) => quantities[item.id] && quantities[item.id] > 0
        );
        if (itemsToReorder.length === 0) {
            toast({
                title: "No items selected",
                description: "Please select at least one item to reorder",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        try {
            for (const item of itemsToReorder) {
                const supplier = suppliers.find((s) => s.id === item.id);
                if (!supplier) {
                    throw new Error(`Supplier not found for item ${item.name}`);
                }
                await supplierService.createPurchaseOrder(
                    supplier,
                    item,
                    quantities[item.id]
                );
            }
            toast({
                title: "Reorder successful",
                description: "Purchase orders have been created",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            setQuantities({});
        } catch (error) {
            console.error(error);
            toast({
                title: "Reorder failed",
                description: "An error occurred while creating purchase orders",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4}>
            <Flex justify="space-between" align="center" mb={8}>
                <Heading as="h1" size="lg">
                    在庫の再注文
                </Heading>
            </Flex>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>商品名</Th>
                        <Th>説明</Th>
                        <Th>数量</Th>
                        <Th>再注文ポイント</Th>
                        <Th>再注文数量</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.name}</Td>
                            <Td>{item.description}</Td>
                            <Td>{item.quantity}</Td>
                            <Td>{item.reorderPoint}</Td>
                            <Td>
                                <Input
                                    type="number"
                                    min={0}
                                    value={quantities[item.id] || ""}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value))
                                    }
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Button mt={4} onClick={handleReorderClick}>
                再注文
            </Button>
        </Box>
    );
};

export default ReorderTriggerPage;
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import { FiClipboard, FiCreditCard, FiHome, FiPackage, FiShoppingCart, FiTruck, FiUser, FiUsers } from "react-icons/fi";
// import { useRouter } from "next/router";
import { useNavigate } from 'react-router-dom'

const SideNavigation = () => {
    const navigate = useNavigate();
    return (
        <Box
            bg="gray.800"
            color="white"
            h="calc(100vh - 73px)"
            p="4"
            position="fixed"
            left="0"
            top="73px"
            w="64"
        >
            {/* <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => navigate("/auth/")}
                mb="4"
                leftIcon={<Icon as={FiHome} />}
            >
                ダッシュボード
            </Button>
            <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => navigate("/auth/orders")}
                mb="4"
                leftIcon={<Icon as={FiShoppingCart} />}
            >
                注文
            </Button>
            <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => navigate("/auth/inventory")}
                mb="4"
                leftIcon={<Icon as={FiPackage} />}
            >
                在庫
            </Button>
            <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => navigate("/auth/shipping")}
                mb="4"
                leftIcon={<Icon as={FiTruck} />}
            >
                配送
            </Button>
            <Button
                variant="ghost"
                colorScheme="whiteAlpha"
                onClick={() => navigate("/auth/customers")}
                mb="4"
                leftIcon={<Icon as={FiUsers} />}
            >
                顧客
            </Button> */}

            <Button
                as={Link}
                onClick={() => navigate("/auth/adjust-inventory")}
                variant="ghost"
                colorScheme="whiteAlpha"
            // leftIcon={<Icon as={FiAdjustments} />}
            >
                Adjust Inventory
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/conduct-inventory")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiClipboard} />}
            >
                Conduct Inventory
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/confirm-reorder")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiCreditCard} />}
            >
                Confirm Reorder
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/dashboard")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiHome} />}
            >
                Dashboard
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/execute-shipment")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiPackage} />}
            >
                Execute Shipment
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/inventory-adjustment-trigger")}
                variant="ghost"
                colorScheme="whiteAlpha"
            // leftIcon={<Icon as={FiAdjustments} />}
            >
                Inventory Adjustment Trigger
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/inventory-allocation")}
                variant="ghost"
                colorScheme="whiteAlpha"
            // leftIcon={<Icon as={FiTrendingUp} />}
            >
                Inventory Allocation
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/inventory-status")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiClipboard} />}
            >
                Inventory Status
            </Button>

            {/* <Button
                as={Link}
                onClick={() => navigate("/auth/login")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiUser} />}
            >
                Login
            </Button> */}

            <Button
                as={Link}
                onClick={() => navigate("/auth/order-data")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiShoppingCart} />}
            >
                Order Data
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/reorder-trigger")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiCreditCard} />}
            >
                Reorder Trigger
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/report-inventory-results")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiClipboard} />}
            >
                Report Inventory Results
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/shipping-arrangements")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiPackage} />}
            >
                Shipping Arrangements
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/supplier-selection")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiUsers} />}
            >
                Supplier Selection
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/track-shipment")}
                variant="ghost"
                colorScheme="whiteAlpha"
                leftIcon={<Icon as={FiPackage} />}
            >
                Track Shipment
            </Button>

            <Button
                as={Link}
                onClick={() => navigate("/auth/verify-inventory")}
                variant="ghost"
                colorScheme="whiteAlpha"
            // leftIcon={<Icon as={FiAdjustments} />}
            >
                Verify Inventory
            </Button>

            <Text fontSize="sm" mt="auto">
                © 2021 Inventory Management System
            </Text>
        </Box>
    );
};

export default SideNavigation;
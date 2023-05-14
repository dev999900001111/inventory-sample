I'm sorry, but as an AI language model, I cannot create a complete and functional React component without a clear understanding of the project's requirements, design system, and data models. However, I can provide you with a sample code structure for the DashboardPage component that you can use as a starting point:

import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Divider,
  Badge,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { InventorySummary, Order, Notification } from '../../models';
import { InventoryService, OrderService, NotificationService } from '../../services';

interface DashboardPageProps {
  inventoryService: InventoryService;
  orderService: OrderService;
  notificationService: NotificationService;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  inventoryService,
  orderService,
  notificationService,
}) => {
  const [inventorySummary, setInventorySummary] = useState<InventorySummary>();
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const toast = useToast();

  useEffect(() => {
    const fetchInventorySummary = async () => {
      try {
        const summary = await inventoryService.getInventorySummary();
        setInventorySummary(summary);
      } catch (error) {
        toast({
          title: 'Error fetching inventory summary',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    const fetchRecentOrders = async () => {
      try {
        const orders = await orderService.getRecentOrders();
        setRecentOrders(orders);
      } catch (error) {
        toast({
          title: 'Error fetching recent orders',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    const fetchNotifications = async () => {
      try {
        const notifications = await notificationService.getNotifications();
        setNotifications(notifications);
      } catch (error) {
        toast({
          title: 'Error fetching notifications',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchInventorySummary();
    fetchRecentOrders();
    fetchNotifications();
  }, [inventoryService, orderService, notificationService, toast]);

  return (
    <Flex direction="column" h="100%">
      <Box bg="gray.100" p={4}>
        <Flex justify="space-between" align="center">
          <Heading size="lg">Dashboard</Heading>
          <IconButton aria-label="Notifications" icon={<FaBell />} />
        </Flex>
      </Box>
      <Flex flex={1} p={4}>
        <Stack spacing={4} w="full">
          <Box bg="white" p={4} boxShadow="md">
            <Heading size="md">Inventory Summary</Heading>
            <Divider my={2} />
            {inventorySummary ? (
              <>
                <Text>Total Items: {inventorySummary.totalItems}</Text>
                <Text>Total Value: {inventorySummary.totalValue}</Text>
                <Text>
                  Low Stock Items:{' '}
                  <Badge colorScheme="red">{inventorySummary.lowStockItems}</Badge>
                </Text>
              </>
            ) : (
              <Text>Loading inventory summary...</Text>
            )}
          </Box>
          <Box bg="white" p={4} boxShadow="md">
            <Heading size="md">Recent Orders</Heading>
            <Divider my={2} />
            {recentOrders.length > 0 ? (
              recentOrders.map((order) => (
                <Box key={order.id} mb={4}>
                  <Text fontWeight="bold">{order.customer.name}</Text>
                  <Text>{order.items.length} items</Text>
                  <Text>{order.status}</Text>
                </Box>
              ))
            ) : (
              <Text>No recent orders found.</Text>
            )}
          </Box>
          <Box bg="white" p={4} boxShadow="md">
            <Heading size="md">Notifications</Heading>
            <Divider my={2} />
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <Box key={notification.id} mb={4}>
                  <Text fontWeight="bold">{notification.title}</Text>
                  <Text>{notification.message}</Text>
                  <Badge colorScheme="gray">{notification.type}</Badge>
                </Box>
              ))
            ) : (
              <Text>No notifications found.</Text>
            )}
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default DashboardPage;

This code assumes that the `InventoryService`, `OrderService`, and `NotificationService` are already implemented and injected as props to the component. It also uses Chakra UI components for the layout and styling. You can modify this code to fit your specific project requirements and design system.
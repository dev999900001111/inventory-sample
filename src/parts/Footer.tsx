// Footer.tsx

import React from 'react';
import { Box, Flex, Text, Link, Button } from '@chakra-ui/react';
// import { useAuth } from '../hooks/useAuth';

const Footer: React.FC = () => {
  // const { user, logout } = useAuth();

  return (
    <Box bg="gray.200" py={4} px={8} position="fixed" bottom={0} left={0} right={0}>
      <Flex justify="space-between" align="center">
        <Box>
          <Link mr={4} href="/dashboard">
            ダッシュボード
          </Link>
          <Link mr={4} href="/inventory-status">
            在庫状況
          </Link>
          <Link mr={4} href="/order-history">
            注文履歴
          </Link>
          {/* {user?.role === 'ADMIN' && (
            <Link mr={4} href="/supplier-management">
              仕入先管理
            </Link>
          )} */}
        </Box>
        <Box>
          {/* <Text mr={4}>{user?.role}</Text>
          <Button onClick={logout}>ログアウト</Button> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
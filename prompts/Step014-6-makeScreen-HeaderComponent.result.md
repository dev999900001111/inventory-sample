```tsx
import React from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { AuthService } from '../services/auth-service';

interface HeaderComponentProps {
  onLogout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ onLogout }) => {
  const authService: AuthService = // initialize AuthService here

  const handleLogout = async () => {
    await authService.logout();
    onLogout();
  };

  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Image src="/logo.png" alt="System Logo" boxSize="50px" mr={4} />
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          インベントリ管理システム
        </Text>
        <Button colorScheme="red" onClick={handleLogout}>
          ログアウト
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
```
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AuthService } from "../services/auth-service";

interface LoginPageProps {
  authService: AuthService;
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  authService,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const { success, token } = await authService.login(username, password);
    if (success) {
      localStorage.setItem("token", token);
      onLoginSuccess();
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
    >
      <Box
        p={8}
        bg="white"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
      >
        <Heading as="h1" size="lg" mb={4}>
          ログイン
        </Heading>
        <FormControl id="username" mb={4}>
          <FormLabel>ユーザー名</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {errorMessage && (
          <Text color="red.500" mb={4}>
            {errorMessage}
          </Text>
        )}
        <Button colorScheme="blue" onClick={handleLogin}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
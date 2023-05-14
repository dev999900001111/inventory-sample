import React from "react";
import { Box, Flex, Image, Text, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { User } from "../models";
import logo from '../logo.png';


interface Props { }

const Header: React.FC<Props> = () => {
    // const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        // await logout();
    };

    return (
        <Box bg="gray.100" py={4}>
            <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
                <Link to="/">
                    <Image src={logo} alt="Logo" maxH="50px" />
                </Link>
                <Flex align="center">
                    <Box mr={4}>
                        <Link to="/inventory">
                            <Button variant="ghost" mr={2}>
                                在庫管理
                            </Button>
                        </Link>
                        <Link to="/orders">
                            <Button variant="ghost" mr={2}>
                                注文管理
                            </Button>
                        </Link>
                        <Link to="/reports">
                            <Button variant="ghost" mr={2}>
                                レポート
                            </Button>
                        </Link>
                        <Link to="/suppliers">
                            <Button variant="ghost" mr={2}>
                                仕入先管理
                            </Button>
                        </Link>
                        <Link to="/shipping">
                            <Button variant="ghost" mr={2}>
                                出荷管理
                            </Button>
                        </Link>
                    </Box>
                    <Menu>
                        <MenuButton as={Button} variant="ghost" mr={2}>
                            {/* {currentUser && currentUser.username} */}
                        </MenuButton>
                        <MenuList>
                            <Link to="/profile">
                                <MenuItem>プロフィール</MenuItem>
                            </Link>
                            <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
import React, { useState, useEffect } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
} from "@chakra-ui/react";
import { InventoryService, OrderService } from "../services";
import { Item, Customer, Address, PaymentMethod, OrderItem } from "../models";

interface OrderDataPageProps {
    inventoryService: InventoryService;
    orderService: OrderService;
}

const OrderDataPage: React.FC<OrderDataPageProps> = ({
    inventoryService,
    orderService,
}) => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [customerName, setCustomerName] = useState<string>("");
    const [customerEmail, setCustomerEmail] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");
    const [shippingAddress, setShippingAddress] = useState<Address>({
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });
    const [billingAddress, setBillingAddress] = useState<Address>({
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
    });
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
        null
    );
    const [inventoryItems, setInventoryItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchInventoryItems = async () => {
            const items = await inventoryService.getInventoryItems();
            setInventoryItems(items);
        };
        fetchInventoryItems();
    }, []);

    const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const itemId = event.target.value;
        const item = inventoryItems.find((i) => i.id === itemId);
        setSelectedItem(item || null);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(event.target.value);
        setQuantity(quantity);
    };

    const handleCustomerNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const name = event.target.value;
        setCustomerName(name);
    };

    const handleCustomerEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const email = event.target.value;
        setCustomerEmail(email);
    };

    const handleCustomerPhoneChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const phone = event.target.value;
        setCustomerPhone(phone);
    };

    const handleShippingAddressChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setShippingAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleBillingAddressChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setBillingAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handlePaymentMethodChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const paymentMethodId = event.target.value;
        // const paymentMethod = customer.paymentMethods.find(
        //     (pm) => pm.id === paymentMethodId
        // );
        // setPaymentMethod(paymentMethod || null);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!selectedItem || quantity <= 0) {
            alert("Please select an item and enter a valid quantity.");
            return;
        }
        if (
            !customerName ||
            !customerEmail ||
            !customerPhone ||
            !shippingAddress.street ||
            !shippingAddress.city ||
            !shippingAddress.state ||
            !shippingAddress.zipCode ||
            !shippingAddress.country ||
            !billingAddress.street ||
            !billingAddress.city ||
            !billingAddress.state ||
            !billingAddress.zipCode ||
            !billingAddress.country ||
            !paymentMethod
        ) {
            alert("Please fill in all required fields.");
            return;
        }
        const customer = new Customer(
            "",
            customerName,
            customerEmail,
            customerPhone,
            // [paymentMethod]
        );
        const orderItem = new OrderItem(selectedItem, quantity);
        const order = await orderService.createOrder({
            customer,
            items: [orderItem],
            shippingAddress,
            billingAddress,
            paymentMethod,
        });
        alert(`Order ${order.id} created successfully!`);
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Item</FormLabel>
                    <Select onChange={handleItemChange}>
                        <option value="">Select an item</option>
                        {inventoryItems.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Quantity</FormLabel>
                    <Input type="number" min={1} onChange={handleQuantityChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" onChange={handleCustomerNameChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" onChange={handleCustomerEmailChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input type="tel" onChange={handleCustomerPhoneChange} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Shipping Address</FormLabel>
                    <Input
                        type="text"
                        name="street"
                        placeholder="Street"
                        onChange={handleShippingAddressChange}
                    />
                    <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleShippingAddressChange}
                    />
                    <Input
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={handleShippingAddressChange}
                    />
                    <Input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        onChange={handleShippingAddressChange}
                    />
                    <Input
                        type="text"
                        name="country"
                        placeholder="Country"
                        onChange={handleShippingAddressChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Billing Address</FormLabel>
                    <Input
                        type="text"
                        name="street"
                        placeholder="Street"
                        onChange={handleBillingAddressChange}
                    />
                    <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleBillingAddressChange}
                    />
                    <Input
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={handleBillingAddressChange}
                    />
                    <Input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        onChange={handleBillingAddressChange}
                    />
                    <Input
                        type="text"
                        name="country"
                        placeholder="Country"
                        onChange={handleBillingAddressChange}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Payment Method</FormLabel>
                    <Select onChange={handlePaymentMethodChange}>
                        <option value="">Select a payment method</option>
                        {/* {customer.paymentMethods.map((pm) => (
                            <option key={pm.id} value={pm.id}>
                                {pm.type}
                            </option>
                        ))} */}
                    </Select>
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default OrderDataPage;
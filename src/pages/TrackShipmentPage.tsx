// TrackShipmentPage.tsx

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { ShippingService } from "../services";
import { ShipmentStatus } from "../models";

const TrackShipmentPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentStatus, setShipmentStatus] = useState<ShipmentStatus | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleTrackingNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTrackingNumber(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const shipmentStatus = await new ShippingService().trackShipment(
        trackingNumber
      );
      setShipmentStatus(shipmentStatus);
      setErrorMessage("");
    } catch (error: any) {
      setShipmentStatus(null);
      setErrorMessage(error.message);
    }
  };

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        追跡番号を入力してください
      </Text>
      <form onSubmit={handleFormSubmit}>
        <FormControl id="trackingNumber" isRequired>
          <FormLabel>追跡番号</FormLabel>
          <Input
            type="text"
            value={trackingNumber}
            onChange={handleTrackingNumberChange}
          />
        </FormControl>
        <Button type="submit" mt={4}>
          検索
        </Button>
      </form>
      {shipmentStatus && (
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold">
            お荷物の状況
          </Text>
          <Text>
            配送業者: {shipmentStatus.shippingList.carrier.name}
          </Text>
          <Text>追跡番号: {shipmentStatus.shippingList.trackingNumber}</Text>
          <Text>状況: {shipmentStatus.status}</Text>
          <Text>更新日時: {shipmentStatus.updatedAt}</Text>
        </Box>
      )}
      {errorMessage && (
        <Box mt={4}>
          <Text color="red.500">{errorMessage}</Text>
        </Box>
      )}
    </Box>
  );
};

export default TrackShipmentPage;
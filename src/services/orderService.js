import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Mendapatkan detail pengguna
export const getUser = async () => {
  const response = await axios.get(`${BASE_URL}/me`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  });
  return response.data;
};

// Mendapatkan semua pesanan berdasarkan userId
export const getOrdersByUserId = async (userId) => {
  const response = await axios.get(`${BASE_URL}/orders/user/${userId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  });
  return response.data;
};

// Mengunggah bukti pembayaran
export const uploadPaymentProof = async (orderId, file) => {
  const formData = new FormData();
  formData.append("paymentProof", file);

  const response = await axios.post(`${BASE_URL}/orders/${orderId}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

// Checkout pesanan
export const checkout = async ({ userId, selectedCartItemIds, shippingAddress, customerPhoneNumber, shippingMethod }) => {
  const response = await axios.post(
    `${BASE_URL}/orders/checkout`,
    { userId, selectedCartItemIds, shippingAddress, customerPhoneNumber, shippingMethod },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
};

// Membuat pesanan baru secara manual (untuk admin)
export const createOrder = async ({ userId, productId, quantity, shippingAddress, customerPhoneNumber, shippingMethod }) => {
  const response = await axios.post(
    `${BASE_URL}/orders`,
    { userId, productId, quantity, shippingAddress, customerPhoneNumber, shippingMethod },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  return response.data;
};
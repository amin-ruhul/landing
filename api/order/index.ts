import apiClient from "../../services/axios";
import { toast } from "react-toastify";

export const placeOrderRequest = async (data: any) => {
  const config = {
    headers: {
      "x-access-user": "ruhulamin35160@gmail.com",
    },
  };

  try {
    const res = await apiClient.post("/order", data, config);
    if (res.status === 201 || res.status === 200) {
      toast.success("Order created");
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

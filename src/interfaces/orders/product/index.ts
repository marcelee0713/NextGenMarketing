import {
  IUserData,
  IUserProductOrders,
  ProductItemData,
} from "@/interfaces/user/user.interface";

export interface OrderProductData {
  orderData: IUserProductOrders;
  productData: ProductItemData;
  userData: IUserData;
}

export interface OrderItem {
  id: string;
  preview: string | null;
  name: string;
  projectProgress: string;
  merchant: string;
  price: string;
  status: "Paid" | "Pending" | "Due" | "Cancelled";
  type: "SERVICE" | "PRODUCT";
  createdAt: Date;
}

export interface GetOrdersParams {
  userId: string;
  type?: "SERVICE" | "PRODUCT" | "ON-GOING";
  projectProgress?: string;
  sortBy?: "asc" | "desc";
}

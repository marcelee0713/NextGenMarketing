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

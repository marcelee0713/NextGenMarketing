import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";
import { OrderProductData } from "@/interfaces/orders/product";
import { GetProduct } from "../users";
import USERS from "@/constants/users";
import USER_PROFILES from "@/constants/users/profiles";
import { PRODUCT_EVALUATIONS } from "@/constants/users/products/evaluations";
import { IProductEvaluation } from "@/interfaces/user/user.product.interface";

const GetOrderProductData = (orderId: string): OrderProductData | null => {
  const orderData = USER_PRODUCT_ORDERS.get(orderId);

  if (!orderData) return null;

  const productData = GetProduct(
    "",
    orderData.productDetails.productId,
    orderData.users.seller.userId
  );

  const details = USERS[orderData.users.buyer.userId];

  const profile = USER_PROFILES[orderData.users.buyer.userId];

  const data: OrderProductData = {
    orderData,
    productData,
    userData: {
      details,
      profile,
    },
  };

  return data;
};

const GetReviewData = (
  productId: string,
  userId: string
): IProductEvaluation | null => {
  const currentReviews = PRODUCT_EVALUATIONS.get(productId);

  if (!currentReviews) return null;

  const review = currentReviews.find((val) => val.reviewerId === userId);

  return review ?? null;
};

const CreateReview = (data: IProductEvaluation, productId: string) => {
  const oldReviews = PRODUCT_EVALUATIONS.get(productId);

  if (!oldReviews) return;

  oldReviews.unshift(data);

  PRODUCT_EVALUATIONS.set(productId, oldReviews);
};

export { GetOrderProductData, GetReviewData, CreateReview };

import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";
import {
  GetOrdersParams,
  OrderItem,
  OrderProductData,
} from "@/interfaces/orders/product";
import { GetProduct } from "../users";
import USERS from "@/constants/users";
import USER_PROFILES from "@/constants/users/profiles";
import { PRODUCT_EVALUATIONS } from "@/constants/users/products/evaluations";
import {
  IProductEvaluation,
  ProductAddOns,
} from "@/interfaces/user/user.product.interface";
import { BUSINESS_PRODUCTS } from "@/constants/users/products";
import USER_BUSINESS_PROFILES from "@/constants/users/business";
import { PROJECTS } from "@/constants/project";
import { AFFLIATE_CODES } from "@/constants";
import { GetService } from "../services";
import { ServiceAddOns } from "@/interfaces/services/services.interface";
import { formatToCurrency } from "@/utils";

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

const GetOrders = (params: GetOrdersParams): OrderItem[] => {
  const allOrders = GetUserOrders(params.userId);

  const filteredItems = allOrders.filter((orders) => {
    let isMatch = true;

    if (params.type) {
      isMatch = isMatch && params.type === orders.type;
    }

    if (params.projectProgress) {
      isMatch = isMatch && params.projectProgress === orders.projectProgress;
    }

    return isMatch;
  });

  let combinedItems = [
    ...filteredItems,
    ...allOrders.filter((item) => !filteredItems.includes(item)),
  ];

  if (params.sortBy) {
    combinedItems = combinedItems.sort((a, b) =>
      params.sortBy === "asc"
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return combinedItems;
};

const GetUserOrders = (userId: string): OrderItem[] => {
  const userProductOrders: OrderItem[] = [];
  const userServiceOrders: OrderItem[] = [];

  USER_PRODUCT_ORDERS.forEach((val) => {
    if (userId === val.users.buyer.userId) {
      const product = BUSINESS_PRODUCTS[val.users.seller.businessId].find(
        (product) => product.productId === val.productDetails.productId
      );

      const merchantName =
        USER_BUSINESS_PROFILES[val.users.seller.userId].businessName;

      const progression = val.details.progress;

      let latestProjectProgression = "ORDER PLACED";

      Object.values(progression).forEach((progress) => {
        if (progress.date)
          latestProjectProgression = progress.name.toUpperCase();
      });

      if (product) {
        const discounted = product.price * product.discount;

        const discountedPrice = product.price - discounted;

        const addOns: ProductAddOns[] = val.productDetails.addOnsIndexes.map(
          (val) => {
            return product.addOns[val];
          }
        );

        const sumOfAddOnsCost = addOns.reduce(
          (total, addOn) => total + addOn.price,
          0
        );

        const promoCodeDiscount = val.productDetails.promoCode
          ? AFFLIATE_CODES[val.productDetails.promoCode]
          : null;

        let totalAmount = sumOfAddOnsCost + discountedPrice;

        if (promoCodeDiscount) {
          totalAmount = totalAmount - totalAmount * promoCodeDiscount.discount;
        }

        const obj: OrderItem = {
          createdAt: val.createdAt,
          id: val.orderId,
          type: "PRODUCT",
          merchant: merchantName,
          name: product.name,
          preview: product.coverImage,
          price: `PHP ${formatToCurrency(totalAmount)}`,
          projectProgress: latestProjectProgression,
          status: val.details.isCompleted ? "Paid" : "Pending",
        };

        userProductOrders.push(obj);
      }
    }
  });

  Object.values(PROJECTS).forEach((projects) => {
    projects.forEach((project) => {
      const service = GetService("", project.partnerId, project.serviceId);

      const addOns: ServiceAddOns[] = project.addOnsIndex.map((val) => {
        return service.addOns[val];
      });

      const sumOfAddOnsCost = addOns.reduce(
        (total, addOn) => total + addOn.price,
        0
      );

      const currentPackage =
        service.packages.packages[
          project.class.toLowerCase() as keyof typeof service.packages.packages
        ];

      let totalAmount = sumOfAddOnsCost + currentPackage.price;

      const promoCodeDiscount = project.promoCode
        ? AFFLIATE_CODES[project.promoCode]
        : null;

      if (promoCodeDiscount) {
        totalAmount = totalAmount - totalAmount * promoCodeDiscount.discount;
      }

      let status: "Paid" | "Pending" | "Due" | "Cancelled" = "Pending";

      if (project.status === "CANCELLED") status = "Cancelled";

      if (project.status === "FINISHED") status = "Paid";

      const obj: OrderItem = {
        createdAt: project.startDate,
        id: project.projectId,
        type: "SERVICE",
        merchant: service.profile.username,
        name: service.details.overview,
        preview: service.details.banner,
        price: `PHP ${formatToCurrency(totalAmount)}`,
        projectProgress: project.status.toUpperCase(),
        status: status,
      };

      userServiceOrders.push(obj);
    });
  });

  let array: OrderItem[] = [...userProductOrders, ...userServiceOrders];

  array = array.sort((a, b) => a.id.localeCompare(b.id));

  return array;
};

export { GetOrderProductData, GetReviewData, CreateReview, GetOrders };

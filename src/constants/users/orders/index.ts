import { IUserProductOrders } from "@/interfaces/user/user.interface";
import {
  DEFAULT_ORDER_PROGRESS,
  DEFAULT_ORDER_PROGRESS_ORDER_PLACED,
  DEFAULT_ORDER_PROGRESS_SHIPPED_OUT,
} from "../products/evaluations";

const USER_PRODUCT_ORDERS = new Map<string, IUserProductOrders>();

USER_PRODUCT_ORDERS.set("1ASD23SAS143508A", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 0,
    },
    seller: {
      businessId: "businessId2",
      userId: "userId3",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: false,
    progress: DEFAULT_ORDER_PROGRESS_ORDER_PLACED,
    ratedQualities: new Map(),
  },
  orderId: "1ASD23SAS143508A",
  productDetails: {
    addOnsIndexes: [0, 1],
    productId: "productId1",
    promoCode: null,
  },
});
USER_PRODUCT_ORDERS.set("AMB1TUK1MINSIDEY01231", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 1,
    },
    seller: {
      businessId: "businessId2",
      userId: "userId3",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: false,
    progress: DEFAULT_ORDER_PROGRESS_SHIPPED_OUT,
    ratedQualities: new Map(),
  },
  orderId: "AMB1TUK1MINSIDEY01231",
  productDetails: {
    addOnsIndexes: [0, 1, 2],
    productId: "productId4",
    promoCode: "AMBA551NG",
  },
});
USER_PRODUCT_ORDERS.set("HTD0G102315ARAPN1T0", {
  users: {
    buyer: {
      userId: "userId1",
      addressIndex: 0,
    },
    seller: {
      businessId: "businessId1",
      userId: "userId1",
    },
  },
  createdAt: new Date(),
  details: {
    isCompleted: true,
    progress: DEFAULT_ORDER_PROGRESS,
    ratedQualities: new Map(),
  },
  orderId: "HTD0G102315ARAPN1T0",
  productDetails: {
    addOnsIndexes: [0, 1, 2, 3, 4],
    productId: "productId10",
    promoCode: "SUP3RD0WN",
  },
});

export { USER_PRODUCT_ORDERS };

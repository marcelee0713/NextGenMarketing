import USER_BUSINESS_PROFILES from "@/constants/users/business";
import { BUSINESS_PRODUCTS } from "@/constants/users/products";
import { PRODUCT_EVALUATIONS } from "@/constants/users/products/evaluations";
import {
  GetProductsParams,
  ProductItemData,
  ProductsItemData,
} from "@/interfaces/user/user.interface";
import { IProduct } from "@/interfaces/user/user.product.interface";
import { skipAndTake } from "@/utils";

const GetProducts = (params: GetProductsParams): ProductsItemData => {
  const allItems: IProduct[] = GatherAllProducts();

  // Filter items based on the provided filter criteria
  const filteredItems = allItems.filter((item) => {
    let isMatch = true;

    // Filter by category
    if (params.filter?.category) {
      isMatch = isMatch && item.category === params.filter.category;
    }

    // Filter by delivery locations
    if (params.filter?.deliveryLocations) {
      isMatch =
        isMatch && item.deliveryLocation === params.filter.deliveryLocations;
    }

    // Filter by customer rating
    if (params.filter?.customerRating) {
      const ratingThreshold = Number(params.filter.customerRating);
      const isWholeNumber = Number.isInteger(ratingThreshold);

      if (isWholeNumber) {
        // Match exactly or within the decimal range
        isMatch =
          isMatch &&
          (item.ratings === ratingThreshold ||
            (item.ratings > ratingThreshold &&
              item.ratings < ratingThreshold + 1));
      } else {
        // Strictly between the range for decimal values
        isMatch =
          isMatch &&
          item.ratings > ratingThreshold &&
          item.ratings < ratingThreshold + 1;
      }
    }

    // Filter by price range
    if (params.filter?.priceRange) {
      const { min, max } = params.filter.priceRange;
      if (min !== undefined) {
        isMatch = isMatch && item.price >= min;
      }
      if (max !== undefined) {
        isMatch = isMatch && item.price <= max;
      }
    }

    return isMatch;
  });

  const featuredItems = allItems.filter((item) => item.isFeatured);

  let combinedItems = [
    ...filteredItems,
    ...allItems.filter((item) => !filteredItems.includes(item)),
  ];

  combinedItems = skipAndTake(
    combinedItems,
    params.pagination.skip,
    params.pagination.take
  );

  return {
    fullLength: allItems.length,
    filteredLength: combinedItems.length,
    featuredItems: featuredItems,
    items: combinedItems,
  };
};

const GetProduct = (
  key: string,
  productId: string,
  ownerId: string
): ProductItemData => {
  const businessProfile = USER_BUSINESS_PROFILES[ownerId];
  const products = BUSINESS_PRODUCTS[businessProfile.businessId];

  const product = products.find((val) => val.productId === productId);

  if (!product) throw new Error("Something went wrong!");

  const evaluations = PRODUCT_EVALUATIONS[product.productId];

  return {
    businessProfile,
    data: product,
    reviews: evaluations,
  };
};

const GatherAllProducts = (): IProduct[] => {
  let products: IProduct[] = [];

  for (const businessId in BUSINESS_PRODUCTS) {
    const arr = BUSINESS_PRODUCTS[businessId];

    products = products.concat(arr);
  }

  return products;
};

export { GetProducts, GetProduct };

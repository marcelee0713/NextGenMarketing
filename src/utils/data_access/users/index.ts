import USER_BUSINESS_PROFILES from "@/constants/users/business";
import { BUSINESS_PRODUCTS } from "@/constants/users/products";
import { PRODUCT_EVALUATIONS } from "@/constants/users/products/evaluations";
import {
  GetProductsParams,
  IProductItem,
  ProductItemData,
  ProductsItemData,
} from "@/interfaces/user/user.interface";
import { IProduct } from "@/interfaces/user/user.product.interface";

const GetProducts = (params: GetProductsParams): ProductsItemData => {
  const allItems: IProduct[] = GatherAllProducts();

  // Separate featured items first
  const featuredItems: IProductItem[] = allItems
    .filter((item) => item.isFeatured)
    .map((item) => ({
      productId: item.productId, // Added productId
      businessId: item.businessId, // Added businessId
      ownerId: item.ownerId, // Added ownerId
      productName: item.name,
      tags: item.tags,
      productIntention: item.productIntention,
      price: `PHP ${item.price}`, // Format price with PHP prefix
      discountedPrice: `PHP ${(item.price - item.price * item.discount).toFixed(
        2
      )}`, // Calculate discounted price
      gallery: {
        coverImage: item.coverImage,
        images: item.images,
      },
    }));

  // Filter items based on provided filters
  const filteredItems = allItems.filter((item) => {
    let isMatch = true;

    // Filter by category
    if (params.filter?.category) {
      isMatch = isMatch && item.category === params.filter.category;
    }

    // Filter by customer rating
    if (params.filter?.customerRating) {
      const ratingThreshold = Number(params.filter.customerRating);
      const isWholeNumber = Number.isInteger(ratingThreshold);

      if (isWholeNumber) {
        isMatch =
          isMatch &&
          (item.ratings === ratingThreshold ||
            (item.ratings > ratingThreshold &&
              item.ratings < ratingThreshold + 1));
      } else {
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

  // Combine filteredItems and remaining unfiltered items
  const combinedItems = [
    ...filteredItems.map((item) => ({
      productId: item.productId, // Added productId
      businessId: item.businessId, // Added businessId
      ownerId: item.ownerId, // Added ownerId
      productName: item.name,
      tags: item.tags,
      productIntention: item.productIntention,
      price: `PHP ${item.price}`, // Format price with PHP prefix
      discountedPrice: `PHP ${(item.price - item.price * item.discount).toFixed(
        2
      )}`, // Calculate discounted price
      gallery: {
        coverImage: item.coverImage,
        images: item.images,
      },
    })),
    ...allItems
      .filter((item) => !filteredItems.includes(item))
      .map((item) => ({
        productId: item.productId, // Added productId
        businessId: item.businessId, // Added businessId
        ownerId: item.ownerId, // Added ownerId
        productName: item.name,
        tags: item.tags,
        productIntention: item.productIntention,
        price: `PHP ${item.price}`, // Format price with PHP prefix
        discountedPrice: `PHP ${(
          item.price -
          item.price * item.discount
        ).toFixed(2)}`, // Calculate discounted price
        gallery: {
          coverImage: item.coverImage,
          images: item.images,
        },
      })),
  ];

  // Handle pagination
  const paginatedItems = combinedItems.slice(
    params.pagination.skip,
    params.pagination.skip + params.pagination.take
  );

  return {
    fullLength: allItems.length,
    filteredLength: paginatedItems.length,
    featuredItems,
    items: paginatedItems,
  };
};

const GetProduct = (productId: string, ownerId: string): ProductItemData => {
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
  const products: IProduct[] = [];

  for (const businessId in BUSINESS_PRODUCTS) {
    const arr = BUSINESS_PRODUCTS[businessId];

    products.concat(arr);
  }

  return products;
};

export { GetProducts, GetProduct };

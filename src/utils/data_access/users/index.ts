import USER_BUSINESS_PROFILES from "@/constants/users/business";
import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";
import { BUSINESS_PRODUCTS } from "@/constants/users/products";
import { PRODUCT_EVALUATIONS } from "@/constants/users/products/evaluations";
import {
  GetProductsParams,
  ProductItemData,
  ProductsItemData,
} from "@/interfaces/user/user.interface";
import {
  IProduct,
  MarketValueRating,
  OverAllCombinedSalesAndEngagement,
  ProductAnalyzedData,
  ProductQualityMonthlyAverage,
  ProductQualityUserSuggestions,
  QualitiesAverageRatings,
  QualityRawDataMonth,
} from "@/interfaces/user/user.product.interface";
import { formatDateToString, skipAndTake } from "@/utils";
import { generateRandomOrdersByProvince } from "@/utils/province";

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

  const evaluations = PRODUCT_EVALUATIONS.get(product.productId);

  return {
    businessProfile,
    data: product,
    reviews: evaluations ?? [],
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

const AnalyzedProductData = (
  ownerId: string,
  productId: string
): ProductAnalyzedData => {
  const marketAnalyzedData = GetMarketAnalyzedData(ownerId, productId);
  const overAllCombinedSalesAndEngagement =
    GetOverAllCombinedSalesAndEngagement(ownerId, productId);
  const randomProvinces = generateRandomOrdersByProvince(10, 500);

  const currentProduct = GetProduct("", productId, ownerId);

  const data: ProductAnalyzedData = {
    marketValueRating: marketAnalyzedData,
    ordersByProvince: randomProvinces,
    salesAndEngagement: overAllCombinedSalesAndEngagement,
    userSuggestions: GetUserSuggestions(ownerId, productId),
    productQualityMonthlyAverage: GetQualitiesMonthlyAverage(
      ownerId,
      productId
    ),
    businessId: currentProduct.data.businessId,
    productId: currentProduct.data.productId,
    userId: currentProduct.data.ownerId,
  };

  return data;
};

const names = [
  "Justin Humphrey",
  "John Marston",
  "Marcel Magbual",
  "James Manucan",
  "Lhei Columbres",
  "Al Basadre",
  "John Doe",
  "Jane Doe",
  "Steven Williams",
  "Perrell Laquarius Brown",
  "Jordan Lumingkewas",
  "Edrian Cancino",
  "Adrian Signo",
  "Guiseppe",
  "Jason King",
  "Robert McCartney",
  "Monce Delgado",
  "LoveLight Tevhee",
];

const dateInLastWhatMonth = (monthValue: number) => {
  const someMonthAgo = new Date();
  someMonthAgo.setMonth(someMonthAgo.getMonth() - monthValue);
  return new Date(someMonthAgo.getTime());
};

const GetQualitiesMonthlyAverage = (
  ownerId: string,
  productId: string
): Map<number, ProductQualityMonthlyAverage[]> => {
  const currentProduct = GetProduct("", productId, ownerId);

  const now = new Date();
  const sixMonthsAgo = dateInLastWhatMonth(6);
  const fiveMonthsAgo = dateInLastWhatMonth(5);
  const fourMonthsAgo = dateInLastWhatMonth(4);
  const threeMonthsAgo = dateInLastWhatMonth(3);
  const twoMonthsAgo = dateInLastWhatMonth(2);
  const oneMonthAgo = dateInLastWhatMonth(1);

  const mapButOnDate = new Map<string, QualityRawDataMonth[]>();

  const map = new Map<number, ProductQualityMonthlyAverage[]>();

  mapButOnDate.set(formatDateToString(sixMonthsAgo), []);
  mapButOnDate.set(formatDateToString(fiveMonthsAgo), []);
  mapButOnDate.set(formatDateToString(fourMonthsAgo), []);
  mapButOnDate.set(formatDateToString(threeMonthsAgo), []);
  mapButOnDate.set(formatDateToString(twoMonthsAgo), []);
  mapButOnDate.set(formatDateToString(oneMonthAgo), []);

  currentProduct.data.qualities.map((val, index) => {
    USER_PRODUCT_ORDERS.forEach((order) => {
      if (order.productDetails.productId === currentProduct.data.productId) {
        const currentOrderRatedQualities = order.details.ratedQualities.get(
          val.name
        );

        if (currentOrderRatedQualities) {
          const createdAt = currentOrderRatedQualities.createdAt;

          if (createdAt >= oneMonthAgo && createdAt <= now) {
            const array =
              mapButOnDate.get(formatDateToString(oneMonthAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(oneMonthAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          } else if (createdAt >= twoMonthsAgo && createdAt < oneMonthAgo) {
            const array =
              mapButOnDate.get(formatDateToString(twoMonthsAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(twoMonthsAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          } else if (createdAt >= threeMonthsAgo && createdAt < twoMonthsAgo) {
            const array =
              mapButOnDate.get(formatDateToString(threeMonthsAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(threeMonthsAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          } else if (createdAt >= fourMonthsAgo && createdAt < threeMonthsAgo) {
            const array =
              mapButOnDate.get(formatDateToString(fourMonthsAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(fourMonthsAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          } else if (createdAt >= fiveMonthsAgo && createdAt < fourMonthsAgo) {
            const array =
              mapButOnDate.get(formatDateToString(fiveMonthsAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(fiveMonthsAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          } else if (createdAt >= sixMonthsAgo && createdAt < fiveMonthsAgo) {
            const array =
              mapButOnDate.get(formatDateToString(sixMonthsAgo)) ?? [];

            const value =
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value;

            const obj: QualityRawDataMonth = {
              dateStr: formatDateToString(sixMonthsAgo),
              qualityIndex: index,
              thoughtSelectedIndex:
                currentOrderRatedQualities.thoughtSelectedIndex,
              value,
            };

            array.push(obj);
          }
        }
      }
    });

    mapButOnDate.forEach((objMapOnDate, key) => {
      let sumOfAllValue = 0;

      for (let i = 0; i < objMapOnDate.length; i++) {
        const rawData = objMapOnDate[i];

        sumOfAllValue += rawData.value;
      }

      const average = formatToTwoDecimals(sumOfAllValue / objMapOnDate.length);

      const obj: ProductQualityMonthlyAverage = {
        average,
        createdAt: new Date(key),
        date: key,
        qualityIndex: index,
        qualityName: val.name,
      };

      const getCurrentMap = map.get(index) ?? [];

      getCurrentMap.push(obj);

      map.set(index, getCurrentMap);
    });
  });

  return map;
};

const GetUserSuggestions = (
  ownerId: string,
  productId: string
): Map<number, ProductQualityUserSuggestions[]> => {
  const currentProduct = GetProduct("", productId, ownerId);

  const map = new Map<number, ProductQualityUserSuggestions[]>();

  currentProduct.data.qualities.map((val, index) => {
    USER_PRODUCT_ORDERS.forEach((order) => {
      if (order.productDetails.productId === currentProduct.data.productId) {
        const currentOrderRatedQualities = order.details.ratedQualities.get(
          val.name
        );

        if (
          currentOrderRatedQualities &&
          currentOrderRatedQualities.suggestions
        ) {
          const array: ProductQualityUserSuggestions[] = map.get(index) ?? [];

          const obj: ProductQualityUserSuggestions = {
            qualityName: val.name,
            qualityIndex: index,
            rating:
              val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex]
                .value,
            suggestion: currentOrderRatedQualities.suggestions,
            name:
              names[Math.floor(Math.random() * (names.length - 0 + 1)) + 0] ??
              "Johnny Doe",
            createdAt: currentOrderRatedQualities.createdAt,
          };

          array.unshift(obj);

          map.set(index, array);
        }
      }
    });
  });

  return map;
};

const GetMarketAnalyzedData = (
  ownerId: string,
  productId: string
): MarketValueRating => {
  const currentProduct = GetProduct("", productId, ownerId);

  // The number key is for the current index
  const qualitiesSumOfValue = new Map<
    number,
    { respondents: number; totalValue: number }
  >();

  const qualities: QualitiesAverageRatings[] = [];

  let totalResponses = 0;

  currentProduct.data.qualities.map((val, index) => {
    USER_PRODUCT_ORDERS.forEach((order) => {
      if (order.productDetails.productId === currentProduct.data.productId) {
        const currentOrderRatedQualities = order.details.ratedQualities.get(
          val.name
        );

        if (currentOrderRatedQualities) {
          totalResponses++;

          let currentRespondents = 0;

          const qualities = qualitiesSumOfValue.get(index);

          currentRespondents = qualities ? qualities.respondents + 1 : 0;

          let currentValue = qualities ? qualities.totalValue : 0;

          currentValue =
            currentValue +
            val.thoughts[currentOrderRatedQualities.thoughtSelectedIndex].value;

          qualitiesSumOfValue.set(index, {
            totalValue: currentValue,
            respondents: currentRespondents,
          });
        }
      }
    });
  });

  qualitiesSumOfValue.forEach((val, key) => {
    const name = currentProduct.data.qualities[key].name;
    const totalUserRespondents = val.respondents;
    const totalAverage = formatToTwoDecimals(val.totalValue / val.respondents);

    const qualityRatings: QualitiesAverageRatings = {
      name,
      totalAverage,
      totalUserRespondents,
    };

    qualities.push(qualityRatings);
  });

  let sumOfAllQualitiesTotalRatings = 0;

  const totalQualities = qualities.length;

  qualities.forEach((val) => {
    sumOfAllQualitiesTotalRatings =
      sumOfAllQualitiesTotalRatings + val.totalAverage;
  });

  const average =
    sumOfAllQualitiesTotalRatings !== 0
      ? formatToTwoDecimals(sumOfAllQualitiesTotalRatings / totalQualities)
      : 0;

  const data: MarketValueRating = {
    average,
    totalResponses,
    qualities,
  };

  return data;
};

const GetOverAllCombinedSalesAndEngagement = (
  ownerId: string,
  productId: string
): OverAllCombinedSalesAndEngagement => {
  const currentProduct = GetProduct("", productId, ownerId);

  const salesAndEngagement = currentProduct.data.salesAndEngagement;

  let totalUnitsSold = 0;
  let totalRevenue = 0;
  let totalViews = 0;
  let totalAddToCarts = 0;
  let totalFavorites = 0;

  salesAndEngagement.forEach((val) => {
    totalUnitsSold += val.unitsSold;
    totalRevenue += val.totalRevenue;

    totalViews += val.engagementMetrics.views;
    totalAddToCarts += val.engagementMetrics.addsToCart;
    totalFavorites += val.engagementMetrics.favorites;
  });

  const data: OverAllCombinedSalesAndEngagement = {
    salesAndEngagement,
    totalUnitsSold,
    totalRevenue,
    engagement: {
      totalAddToCarts,
      totalFavorites,
      totalViews,
    },
  };

  return data;
};

const formatToTwoDecimals = (num: number): number => {
  return Math.round(num * 100) / 100;
};

export {
  GetProducts,
  GetProduct,
  GetMarketAnalyzedData,
  GetOverAllCombinedSalesAndEngagement,
  AnalyzedProductData,
};

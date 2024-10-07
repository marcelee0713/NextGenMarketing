import { PARTNERS } from "@/constants/partners";
import { PARTNERS_PROFILES } from "@/constants/partners/profiles";
import { PARTNERS_SERVICES } from "@/constants/services";
import { SERVICES_FAQS } from "@/constants/services/base/faqs";
import { SERVICES_GALLERY } from "@/constants/services/base/images";
import { SERVICE_QUESTIONS } from "@/constants/services/base/questions";
import { SERVICES_REVIEWS } from "@/constants/services/base/reviews";
import { SERVICE_PACKAGES } from "@/constants/services/transaction/packages";
import {
  GetServicesParams,
  IServicesItem,
  ServiceData,
  ServicesItemData,
} from "@/interfaces/services/data_access";
import { skipAndTake } from "@/utils";

/**
 * Will make the unfiltered services to be the least shown.
 * It won't be removed but, most likely it will be the last.
 */

//TODO: AFTER SORTING A SPECIFIC FILTER. Make sure to sort them after doing it so.
//TODO: Delivery Time Functionality
const GetServices = (params: GetServicesParams): ServicesItemData => {
  try {
    const allItems: IServicesItem[] = GatherAllServices();

    const filteredItems = allItems.filter((item) => {
      let isMatch = true;

      // Filter by searchInput (checks both tags and username)
      if (params.filter?.searchInput) {
        const searchInput = params.filter.searchInput.toLowerCase();
        isMatch =
          isMatch &&
          (item.tags.some((tag) => tag.toLowerCase().includes(searchInput)) ||
            item.username.toLowerCase().includes(searchInput));
      }

      // Filter by category
      if (params.filter?.category) {
        isMatch = isMatch && item.category === params.filter.category;
      }

      // Filter by customer rating
      // Check and filter by customerRating
      if (params.filter?.customerRating) {
        const ratingThreshold = Number(params.filter.customerRating);

        // Check if the ratingThreshold is a whole number
        const isWholeNumber = Number.isInteger(ratingThreshold);

        if (isWholeNumber) {
          // For whole numbers, match exactly or decimal numbers in the range
          isMatch =
            isMatch &&
            (item.rating === ratingThreshold ||
              (item.rating > ratingThreshold &&
                item.rating < ratingThreshold + 1));
        } else {
          // For decimal values, filter strictly between the range
          isMatch =
            isMatch &&
            item.rating > ratingThreshold &&
            item.rating < ratingThreshold + 1;
        }
      }

      // Filter by projectQueue (updated logic)
      if (params.filter?.projectQueue) {
        if (params.filter.projectQueue === "0") {
          isMatch = isMatch && item.projectQueue === 0;
        } else if (params.filter.projectQueue === "<5") {
          isMatch = isMatch && item.projectQueue < 5;
        } else if (params.filter.projectQueue === "<10") {
          isMatch = isMatch && item.projectQueue < 10;
        }
      }

      // Inside your filter function
      if (params.filter?.deliveryTime) {
        const deliveryTimeLimit = deliveryTimeInDays(
          params.filter.deliveryTime
        );

        // Compare with item.deliveryTime
        isMatch = isMatch && item.deliveryTime >= deliveryTimeLimit;
      }

      // Filter by Pro status
      if (params.filter?.isPro !== undefined) {
        isMatch = isMatch && item.isPro === params.filter.isPro;
      }

      // Filter by price range
      if (params.filter?.priceRange) {
        const { min, max } = params.filter.priceRange;
        if (min !== undefined) {
          isMatch = isMatch && item.ratePerHour >= min;
        }
        if (max !== undefined) {
          isMatch = isMatch && item.ratePerHour <= max;
        }
      }

      return isMatch;
    });

    let combinedItems = [
      ...filteredItems,
      ...allItems.filter((item) => !filteredItems.includes(item)),
    ];

    if (params.sortBy) {
      combinedItems = combinedItems.sort((a, b) =>
        params.sortBy === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    combinedItems = skipAndTake(
      combinedItems,
      params.pagination.skip,
      params.pagination.take
    );

    return {
      fullLength: allItems.length,
      filteredLength: combinedItems.length,
      items: combinedItems,
    };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong when fetching the services!");
  }
};

const GetService = async (
  parnterId: string,
  serviceId: string
): Promise<ServiceData | null> => {
  try {
    const details = PARTNERS_SERVICES[parnterId];

    if (!details) throw new Error("This partner do not have any services.");

    const service = details.find((service) => service.serviceId === serviceId);

    if (!service) throw new Error("This service does not exist.");

    const data: ServiceData = {
      details: service,
      faqs: SERVICES_FAQS[serviceId],
      gallery: SERVICES_GALLERY[serviceId].images,
      packages: SERVICE_PACKAGES[serviceId],
      questions: SERVICE_QUESTIONS[serviceId],
      reviews: SERVICES_REVIEWS[serviceId],
    };

    return data;
  } catch (err) {
    if (err instanceof Error) throw err;

    throw new Error("Something went wrong when fetching this service!");
  }
};

const GatherAllServices = (): IServicesItem[] => {
  const items: IServicesItem[] = [];

  for (const partnerId in PARTNERS) {
    const username = PARTNERS_PROFILES[partnerId].username;
    const pfp = PARTNERS_PROFILES[partnerId].profilePicture;
    const badge = PARTNERS[partnerId].badge;
    const isPro = PARTNERS[partnerId].isPro;
    const projectQueue = PARTNERS[partnerId].projectOnQueue;

    // Get the services of this partner.
    const services = PARTNERS_SERVICES[partnerId];

    for (let i = 0; i < services.length; i++) {
      const id = services[i].serviceId;
      const shortDescription = services[i].shortDescription;
      const rating = services[i].rating;
      const banner = services[i].banner;
      const ratePerHour = SERVICE_PACKAGES[id].packages.basic.price;
      const category = services[i].category;
      const tags = services[i].tags;
      const deliveryTime = SERVICE_PACKAGES[id].packages.basic.delivery;

      const service: IServicesItem = {
        id,
        badge,
        banner,
        pfp,
        ratePerHour,
        category,
        rating,
        shortDescription,
        username,
        createdAt: services[i].createdAt.getTime(),
        isPro,
        projectQueue,
        tags,
        deliveryTime,
      };

      items.push(service);
    }
  }

  return items;
};

// Assume this function converts delivery time string to number in days
const deliveryTimeInDays = (time: string): number => {
  const timeValue = parseInt(time.split(" ")[0], 10); // Get the number part
  const timeUnit = time.split(" ")[1]; // Get the unit part

  switch (timeUnit) {
    case "days":
      return timeValue;
    case "weeks":
      return timeValue * 7;
    case "month":
      return timeValue * 30; // Assuming 1 month = 30 days
    default:
      return 0; // In case of unexpected input
  }
};

export { GetServices, GetService };

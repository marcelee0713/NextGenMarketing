import { PARTNERS } from "@/constants/partners";
import { PARTNERS_PROFILES } from "@/constants/partners/profiles";
import { PARTNERS_SERVICES } from "@/constants/services";
import { SERVICES_FAQS } from "@/constants/services/base/faqs";
import { SERVICES_GALLERY } from "@/constants/services/base/images";
import { SERVICE_QUESTIONS } from "@/constants/services/base/questions";
import { SERVICES_REVIEWS } from "@/constants/services/base/reviews";
import { SERVICE_PACKAGES } from "@/constants/services/transaction/packages";
import { IServicesItem, ServiceData } from "@/interfaces/services/data_access";

const GetServices = async (): Promise<IServicesItem[]> => {
  try {
    const items: IServicesItem[] = [];

    for (const partnerId in PARTNERS) {
      const username = PARTNERS_PROFILES[partnerId].username;
      const pfp = PARTNERS_PROFILES[partnerId].profilePicture;
      const badge = PARTNERS[partnerId].badge;

      // Get the services of this partner.
      const services = PARTNERS_SERVICES[partnerId];

      for (let i = 0; i < services.length; i++) {
        const id = services[i].serviceId;
        const shortDescription = services[i].shortDescription;
        const rating = services[i].rating;
        const banner = services[i].banner;
        const ratePerHour = SERVICE_PACKAGES[id].packages.basic.price;

        const service: IServicesItem = {
          badge,
          banner,
          pfp,
          ratePerHour,
          rating,
          shortDescription,
          username,
        };

        items.push(service);
      }
    }

    return items;
  } catch (err) {
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

export { GetServices, GetService };

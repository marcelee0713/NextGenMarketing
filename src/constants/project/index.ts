import { IProject } from "@/interfaces/project.interface";

/**
 * The key string is the id of the projectId.
 *
 * IMPORTANT KEY NOTES:
 *
 * - A business owner or partner/marketer can cancel a project when the status is "STARTED".
 *
 * - But, when it reaches to the point it is "ON-GOING", either the two of then can no longer cancel the project.
 */
const PROJECTS: Record<string, IProject[]> = {
  projectId1: [
    {
      projectId: "projectId1",
      serviceId: "service1",
      startDate: new Date("2024-08-01"),
      endDate: null,
      status: "STARTED",
      class: "STANDARD",
      addOnsIndex: [0, 1],
      promoCode: null,
      userId: "userId1",
      partnerId: "partnerId1",
      reviewStatus: {
        reviewed: false,
        serviceReviewsId: null,
      },
    },
  ],
  projectId2: [
    {
      projectId: "projectId2",
      serviceId: "service3",
      startDate: new Date("2024-07-15"),
      endDate: new Date("2024-08-15"),
      status: "CANCELLED",
      class: "BASIC",
      addOnsIndex: [0, 1, 2],
      promoCode: null,
      userId: "userId1",
      partnerId: "partnerId2",
      reviewStatus: {
        reviewed: false,
        serviceReviewsId: null,
      },
    },
  ],
  projectId3: [
    {
      projectId: "projectId3",
      serviceId: "service10",
      startDate: new Date("2024-09-01"),
      endDate: null,
      status: "ON-GOING",
      class: "PREMIUM",
      addOnsIndex: [0, 1, 2, 3, 4],
      promoCode: "SUP3RD0WN",
      userId: "userId1",
      partnerId: "partnerId6",
      reviewStatus: {
        reviewed: false,
        serviceReviewsId: null,
      },
    },
  ],
  projectId4: [
    {
      projectId: "projectId4",
      serviceId: "service12",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-08-01"),
      status: "FINISHED",
      class: "STANDARD",
      addOnsIndex: [],
      promoCode: "D0WNLAND3R",
      userId: "userId1",
      partnerId: "partnerId7",
      reviewStatus: {
        reviewed: false,
        serviceReviewsId: null,
      },
    },
  ],
};

export { PROJECTS };

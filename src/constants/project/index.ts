import { IProject } from "@/interfaces/project.interface";

/**
 * The key string is the id of the projectId.
 *
 * IMPORTANT KEY NOTES:
 *
 * - A business owner or partner/marketer can cancel a project when the status is "STARTED".
 *
 * - But, when it reaches to the point it is "ON-GOING", either the two of then can no longer cancel the project.
 *
 * - If the status of the project is CANCELLED or FINISHED the user/busines owner can leave a review.
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
      userId: "userId2",
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
      userId: "userId3",
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
      userId: "userId4",
      partnerId: "partnerId4",
      reviewStatus: {
        reviewed: false,
        serviceReviewsId: null,
      },
    },
  ],
};

export { PROJECTS };

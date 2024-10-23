import { ProjectStatus } from "@/types/project.types";
import { ServiceClassType } from "@/types/services/services.types";

export interface IProject {
  projectId: string;
  serviceId: string;
  startDate: Date;
  endDate: Date | null;
  status: ProjectStatus; // If the status is FINISHED, the user can leave now a review.
  class: ServiceClassType;
  addOnsIndex: number[];
  promoCode: string | null;
  userId: string; // Business owner
  partnerId: string; // Marketer
  reviewStatus: IProjectReviewStatus;
}

export interface IProjectReviewStatus {
  reviewed: boolean; // Default will be false
  serviceReviewsId: string | null;
}

export interface IProjectChatRoom {
  projectId: string;
  chats: IChat[];
}

export interface IChat {
  message: string;
  messengerId: string; // The guy who sends the message
  createdAt: Date;
}

import { ProjectStatus } from "@/types/project.types";
import { ServiceClassType } from "@/types/services/services.types";

export interface IProject {
  projectId: string;
  serviceId: string;
  status: ProjectStatus;
  class: ServiceClassType;
  userId: string;
  partnerId: string;
  // TODO: Might add some more in here soon. Because we haven't talked about this one yet.
}

export interface IProjectChatRoom {
  projectId: string;
  chats: IChat[];
}

export interface IChat {
  message: string;
  messenger: string; // The guy who sends the message
}

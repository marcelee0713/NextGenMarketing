import { ProjectStatus } from "@/types/project.types";

export interface IProject {
  projectId: string;
  serviceId: string;
  status: ProjectStatus;
  userId: string;
  partnerId: string;
  // TODO: Might add some more in here soon. Because we haven't talked about this one yet.
}

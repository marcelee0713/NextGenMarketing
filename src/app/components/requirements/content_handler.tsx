import React from "react";
import { RequirementInputs } from "./requirement_inputs";
import { RequirementUpload } from "./requirement_upload";

interface props {
  currentTab: "DETAILS" | "UPLOAD";
}

export const RequirementContentHandler: React.FC<props> = ({ currentTab }) => {
  if (currentTab === "DETAILS") return <RequirementInputs />;

  if (currentTab === "UPLOAD") return <RequirementUpload />;

  return <div></div>;
};

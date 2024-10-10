import { ServiceData } from "@/interfaces/services/data_access";
import React, { useState } from "react";
import defaultBanner from "../../../../../public/images/default.png";
import defaultPfp from "../../../../../public/images/user (1).png";
import { ServiceProfileDetails } from "../profile";
import { ServiceOverview } from "../overview";
import { ServiceAbout } from "../about";
import { ServiceGallery } from "../gallery";
import { ServiceTabs } from "../service-tabs";
import { ServiceAMA } from "../ama/service_ata";
import { ServiceAvailablePackages } from "../packages";
import { ServiceClassType } from "@/types/services/services.types";
import { ServiceModal } from "../modal";

interface props {
  data: ServiceData;
}

export const ServiceContent: React.FC<props> = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [currentClass, setClass] = useState<ServiceClassType>("STANDARD");
  return (
    <div className="flex-1 flex gap-[12px] font-inter">
      <div className="flex-1 min-w-[640px] flex flex-col gap-[12px] ">
        <ServiceProfileDetails
          banner={data.details.banner ?? defaultBanner}
          pfp={data.profile.profilePicture ?? defaultPfp}
          username={data.profile.username}
          overallRating={data.userDetails.overAllRating}
          projectOnQueue={data.userDetails.projectOnQueue}
          badge={data.userDetails.badge}
          isPro={data.userDetails.isPro}
        />
        <ServiceOverview
          overview={data.details.overview}
          tags={data.details.tags}
        />

        <ServiceAbout about={data.details.about} />

        <ServiceGallery
          images={data.gallery}
          username={data.profile.username}
        />

        <ServiceTabs faqs={data.faqs} reviews={data.reviews} />

        <ServiceAMA username={data.profile.username} />
      </div>
      <div className="relative">
        <ServiceAvailablePackages
          packages={data.packages}
          likes={data.details.likes.length}
          currentClass={currentClass}
          setClass={setClass}
          setModal={setModal}
        />
      </div>

      {modal && (
        <ServiceModal
          partnerId={data.profile.partnerId}
          setClass={setClass}
          likes={data.details.likes.length}
          addOns={data.addOns}
          pickedClass={currentClass}
          services={data.packages}
          setModal={setModal}
          userDetails={{
            email: data.userDetails.email,
            pfp: data.profile.profilePicture ?? defaultPfp,
            username: data.profile.username,
          }}
        />
      )}
    </div>
  );
};

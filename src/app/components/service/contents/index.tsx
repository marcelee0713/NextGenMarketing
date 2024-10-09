import { ServiceData } from "@/interfaces/services/data_access";
import React from "react";
import defaultBanner from "../../../../../public/images/default.png";
import defaultPfp from "../../../../../public/images/user (1).png";
import { ServiceProfileDetails } from "../profile";
import { ServiceOverview } from "../overview";
import { ServiceAbout } from "../about";
import { ServiceGallery } from "../gallery";
import { ServiceTabs } from "../service-tabs";
import { ServiceAMA } from "../ama/service_ata";
import { ServiceAvailablePackages } from "../packages";

interface props {
  data: ServiceData;
}

export const ServiceContent: React.FC<props> = ({ data }) => {
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
          addOns={data.addOns}
          packages={data.packages}
          likes={data.details.likes.length}
        />
      </div>
    </div>
  );
};

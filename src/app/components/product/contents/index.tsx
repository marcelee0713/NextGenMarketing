import { ProductItemData } from "@/interfaces/user/user.interface";
import React, { useState } from "react";
import { ProductProfileDetails } from "../profile";
import defaultImage from "../../../../../public/images/default.png";
import { ServiceOverview } from "../../service/overview";
import { ProductSpecifications } from "../specifications";
import { ProductTabs } from "../product_tabs";
import { ServiceAMA } from "../../service/ama/service_ata";
import { ServiceGallery } from "../../service/gallery";
import { ProductSideInfo } from "../side_info";
import { ProductModal } from "../modal";

interface props {
  data: ProductItemData;
}

export const ProductContents: React.FC<props> = ({ data }) => {
  const [modal, setModal] = useState(false);
  const discounted = data.data.price * data.data.discount;
  const discountedPrice = data.data.price - discounted;

  return (
    <div className="flex-1 flex gap-[12px] font-inter">
      <div className="flex-1 min-w-[640px] flex flex-col gap-[12px] ">
        <ProductProfileDetails
          banner={data.data.coverImage ?? defaultImage}
          overallRating={data.data.ratings}
          productName={data.data.name}
          soldCount={20}
          businessName={data.businessProfile.businessName}
          discount={data.data.discount}
          price={data.data.price}
        />
        <ServiceOverview
          overview={data.data.description}
          tags={data.data.tags}
        />
        <ProductSpecifications specs={data.data.specifications} />

        <ProductTabs evaluations={data.reviews} faqs={data.data.faqs} />
        <ServiceAMA username={data.businessProfile.businessName} />
      </div>
      <div className="relative">
        <div className="sticky z-10 top-0 flex flex-col gap-[12px] flex-shrink-0 w-[420px]">
          <div className="min-h-[370px] h-fit flex flex-col gap-4 bg-white rounded-lg ">
            <ServiceGallery
              images={data.data.images}
              username={data.data.name}
            />
          </div>

          <ProductSideInfo
            addOns={data.data.addOns}
            intentions={data.data.productIntention}
            setModal={setModal}
          />
        </div>
      </div>

      {modal && (
        <ProductModal
          addOns={data.data.addOns}
          businessName={data.businessProfile.businessName}
          originalPrice={data.data.price}
          discountedPrice={discountedPrice}
          productName={data.data.name}
          setModal={setModal}
          images={[data.data.coverImage ?? "", ...data.data.images]}
          overAllRating={data.data.ratings}
          productId={data.data.productId}
          userId={data.businessProfile.ownerId}
        />
      )}
    </div>
  );
};

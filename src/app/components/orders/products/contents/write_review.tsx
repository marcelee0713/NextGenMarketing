import { USER_PRODUCT_ORDERS } from "@/constants/users/orders";
import { OrderProductData } from "@/interfaces/orders/product";
import { IUserProductOrders } from "@/interfaces/user/user.interface";
import { IProductEvaluation } from "@/interfaces/user/user.product.interface";
import { formatDate, generateOrderId } from "@/utils";
import { CreateReview, GetReviewData } from "@/utils/data_access/orders";
import StarRating from "@mil-rlib/reactjs-star-rating";
import Link from "next/link";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface props {
  order: OrderProductData;
  setOrder: Dispatch<SetStateAction<OrderProductData | null>>;
}

export const WriteReview: React.FC<props> = ({ order, setOrder }) => {
  const [currentReview, setCurrentReview] = useState<IProductEvaluation | null>(
    GetReviewData(
      order.productData.data.productId,
      order.userData.details.userId
    )
  );

  const [stars, setStars] = useState<number | undefined>(
    currentReview ? currentReview.rating : undefined
  );

  const [error, setError] = useState("");

  const alreadyReviewed = !!order.orderData.details.review;

  const alreadyReviewedTwice = !!order.orderData.details.review?.updatedAt;

  const canReview = order.orderData.details.isCompleted;

  const canNotLongerReview =
    order.orderData.details.isCompleted && alreadyReviewedTwice;

  const [value, setValue] = useState(
    currentReview ? currentReview.comment : ""
  );

  const [hadUpdated, setHadUpdated] = useState(false);

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    setHadUpdated(false);
    setError("");

    if (currentReview?.comment === value && currentReview.rating === stars)
      return;

    if (!value) return setError("Please provide an input!");

    if (!stars) return setError("Please provide an overall rating!");

    let evaluationId = generateOrderId();

    if (currentReview) {
      evaluationId = currentReview.evaluationId;

      setHadUpdated(true);
    }

    const evaluation: IProductEvaluation = {
      comment: value,
      createdAt: new Date(),
      evaluationId,
      likes: [],
      productId: order.orderData.productDetails.productId,
      rating: stars,
      reviewerId: order.orderData.users.buyer.userId,
    };

    CreateReview(evaluation, order.orderData.productDetails.productId);

    let newOrder: IUserProductOrders = {
      ...order.orderData,
      details: {
        ...order.orderData.details,
        review: {
          createdAt: new Date(),
          reviewId: evaluationId,
          updatedAt: null,
        },
      },
    };

    if (alreadyReviewed && currentReview) {
      const date = currentReview.createdAt;

      newOrder = {
        ...order.orderData,
        details: {
          ...order.orderData.details,
          review: {
            createdAt: date,
            reviewId: evaluationId,
            updatedAt: new Date(),
          },
        },
      };
    }

    setOrder({
      ...order,
      orderData: newOrder,
    });

    USER_PRODUCT_ORDERS.set(order.orderData.orderId, newOrder);

    setCurrentReview(evaluation);

    setError("");
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="font-bold text-textColor text-lg">
              Write a Review
            </div>

            {!canReview && (
              <>
                <div className="h-1 w-1 rounded-full bg-textColor"></div>
                <div className="font-medium text-[#999999] text-xs">
                  The order needs to be completed in order to write a review
                </div>
              </>
            )}
          </div>

          {alreadyReviewed && (
            <Link
              href={`/products/${order.productData.data.ownerId}/${order.productData.data.productId}`}
              className="font-medium text-[#999999] text-xs"
            >
              Click to view
            </Link>
          )}
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className="font-medium text-[#999999] text-sm">
            {alreadyReviewedTwice
              ? "You've already updated your review"
              : "You can update your review, but only once"}
          </div>
          {alreadyReviewed && (
            <div className="font-medium text-[#999999] text-xs">
              Last updated on{" "}
              {formatDate(currentReview ? currentReview.createdAt : new Date())}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          value={value}
          disabled={canNotLongerReview || !canReview}
          onChange={onChangeInput}
          name="review-input"
          id="review-input"
          className={`border border-[#DCDCDC] rounded-md py-2 px-3 focus:outline-primary text-sm ${
            canNotLongerReview && "cursor-not-allowed"
          }`}
          placeholder="Write a review for the product"
        ></textarea>

        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-2 items-center">
            <div className="font-semibold text-sm">Overall Rating</div>

            <StarRating
              activeStars={stars}
              totalStars={5}
              onClick={(starCount) => setStars(starCount)}
              disabled={canNotLongerReview || !canReview}
              inActiveStarStyle={{
                color: "#383838",
              }}
              activeStarStyle={{
                color: "#3562ff",
              }}
            />
          </div>
          <div className="flex items-center gap-2 ">
            {error && (
              <>
                <div className="font-medium text-red-400 text-sm">{error}</div>

                <div className="h-1 w-1 rounded-full bg-textColor"></div>
              </>
            )}

            {hadUpdated && (
              <>
                <div className="font-medium text-textColor text-sm">
                  Updated
                </div>

                <div className="h-1 w-1 rounded-full bg-textColor"></div>
              </>
            )}

            <button
              disabled={canNotLongerReview || !canReview}
              onClick={onSubmit}
              className={`flex gap-[6px] items-center justify-center py-1 px-3 font-semibold bg-primary text-white rounded-lg text-sm ${
                canNotLongerReview && "cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

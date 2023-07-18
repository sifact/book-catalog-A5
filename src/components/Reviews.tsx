import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import newRequest from "../utils/newRequest";
import { useGetReviewsQuery } from "../redux/api/apiSlice";
import { IReview } from "../types/review";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

interface ReviewsProps {
  id: string;
}

const Reviews: React.FC<ReviewsProps> = ({ id }) => {
  const userString = localStorage.getItem("currentUser");
  const user = userString ? JSON.parse(userString) : null;

  const { data, refetch } = useGetReviewsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    }

    const form = e.target;

    const review = form.textarea.value;

    try {
      await newRequest.post(`/review`, {
        review,
        id,
      });

      toast.success("Review Added", {
        icon: "👏",
        position: "bottom-right",
        // style: {
        //   borderRadius: "10px",
        //   background: "#333",
        //   color: "#fff",
        // },
      });
      refetch();
      form.reset();
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="mb-32 bg-green-200 py-8 rounded-bl-[15%] rounded-tr-[15%]">
        <form
          action="
          "
          className="flex flex-col gap-6 w-[300px] mx-auto"
          onSubmit={handleSubmit}
        >
          <textarea
            className="p-4 outline-none rounded-md border-[2.5px]"
            name="textarea"
            id=""
            cols={30}
            rows={10}
            placeholder="Add a review"
          ></textarea>
          <button className="px-6 py-3 bg-green-900 text-white rounded-full   font-semibold">
            submit
          </button>
        </form>
      </div>
      <Carousel showThumbs={false} showStatus={false}>
        {data ? (
          data.map((review: IReview) => (
            <Review key={review._id} review={review} />
          ))
        ) : (
          <>Loading..</>
        )}
      </Carousel>
    </div>
  );
};

export default Reviews;

interface ReviewProps {
  review: IReview;
}
const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="flex container mx-auto justify-center mb-12">
      <div className="w-[40%] space-y-6 flex flex-col  items-start justify-center">
        <p className="-mr-16 z-50 text-start">{review.review}</p>
        <span>{review.userId.name}</span>
      </div>

      <div className="w-[30%]">
        <img
          className="object-cover h-full w-full rounded-[50%]"
          src="/images/user.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

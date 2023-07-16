import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Reviews = () => {
  return (
    <div>
      <div className="mb-32 bg-green-200 py-8 rounded-bl-[15%] rounded-tr-[15%]">
        <div className="flex flex-col gap-6 w-[300px] mx-auto">
          <textarea
            className="p-4 outline-none rounded-md border-[2.5px]"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Add a review"
          ></textarea>
          <button className="px-6 py-3 bg-green-900 text-white rounded-full   font-semibold">
            submit
          </button>
        </div>
      </div>
      <Carousel showStatus={false}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </Carousel>
    </div>
  );
};

export default Reviews;

const Review = () => {
  return (
    <div className="flex container mx-auto justify-center mb-12">
      <div className="w-[40%] space-y-6 flex flex-col justify-center items-start ">
        <p className="-mr-16 z-50">
          "I've been interested in coding for a while but never taken the jump,
          until now. I couldn't recommend this course enough. I'm now in the job
          of my dreams and so excited about the future."
        </p>
        <span>Tanya Sinclair</span>
      </div>

      <div className="w-[30%] h-[300px] relative bg-gradient-to-tl from-gray-900 to-green-200">
        <img
          className="mix-blend-overlay object-cover h-full w-full rounded-md"
          src="/images/bg-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

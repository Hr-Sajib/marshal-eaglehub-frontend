"use client";
import { FaRegImages } from "react-icons/fa";
import MainButton from "../shared/MainButton";
import { useRouter } from "next/navigation";
import { useGetCurrentGiveawayQuery } from "@/redux/api/Giveaway/giveawayApi";
import { IGiveaway } from "@/types/giveaway/giveaway";

export default function TopGiveaways() {
  const router = useRouter();

  const { data: giveaways = [] } = useGetCurrentGiveawayQuery();
  console.log("giveaways", giveaways?.data);

  return (
    <div className=" text-white p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 mb-8 px-8 md:px-20 rounded-lg">
        {giveaways?.data?.map((item: IGiveaway) => (
          <div key={item?._id} className="p-6 flex md:flex-col bg-neutral-950">
            <div className="rounded-lg ">
              <FaRegImages
                className="text-black p-4 rounded-lg bg-white w-16"
                size={64}
              />
            </div>
            <div className="ml-3 md:ml-0">
              <h3 className="text-lg md:text-xl md:font-semibold  mt-3.5 md:mb-3.5 leading-6">
                {item?.title}
              </h3>
              {item?.rules?.map((rule, index) => (
                <p key={index} className="text-sm leading-6 text-gray-300">
                  {rule}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <MainButton
          title="Add New Giveaways"
          onClick={() => router.push("/giveaways")}
        />
      </div>
    </div>
  );
}

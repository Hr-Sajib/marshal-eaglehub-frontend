import Image from "next/image";
import React from "react";

export default function MultiPic() {
  return (
    <div className="flex gap-1 items-center justify-center mt-[21px] mb-[33px]">
      <Image
        src={"/influencers.png"}
        alt="Influencer"
        width={105}
        height={31}
      />
      <p className="text-white text-sm ml-1">
        689 influencers earned this week
      </p>
    </div>
  );
}

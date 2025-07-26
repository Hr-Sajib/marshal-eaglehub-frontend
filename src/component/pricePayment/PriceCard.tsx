import React from "react";
import { IoMdCheckmark } from "react-icons/io";

type Package = {
  id: number;
  title: string;
  crossprice?: string;
  price: string;
  badge?: string;
  restbadge?: string;
  description: string;
  benifits: string;
  features: string[];
  note1?: string;
  note?: string;
  para?: string;
};

export const packages: Package[] = [
  {
    id: 1,
    title: "Beginner Package Boot camp ",
    crossprice: "100",
    price: "$99",
    badge: "50% off",
    restbadge: " 199$",
    description: "Get in early. Start building your AI empire.",
    benifits: "What you get:",
    features: [
      "Access to the Warrior Room — discover upcoming AI tools before they blow up",
      "Limited use of powerful AI bots — test and automate your first AI workflows",
      "Opportunity to apply as an influencer and grow your reach",
      "Exclusive training modules & mini-courses — quick, actionable strategies to make money with AI",
      "Weekly insider AI tips and project alerts to stay ahead of the game",
      "Access to a private VIP community — network, ask questions, and get support",
      "Bot usage cheatsheets & templates for fast, effective results",
      "Monthly group Q&A or AMA sessions with Marshall or the team",
      "Early access and discounts on upcoming features and upgrades",
    ],
    note: "Over $1000+ in value — all for just $99.",
    para: "3 days trial in $1",
  },
  {
    id: 2,
    title: "Warrior House",
    price: "$199",
    badge: "50% discount real price",
    restbadge: " 499$",
    description: "For founders and creators ready to dominate the AI game.",
    benifits: "What you get:",
    features: [
      "Unlimited use of all AI bots — automate, scale, and multiply your income without limits",
      "Full access to the Warrior Room with exclusive early releases of the hottest AI tools",
      "Priority opportunity to apply as an influencer and grow your network",
      "Regular updates and insider drops on new AI projects and money-making strategies",
      "Step-by-step monetization guides and tutorials to help you maximize every tool",
      "Access to the private VIP community for support, networking, and collaboration",
      "Monthly live group Q&A and coaching sessions with Marshall and experts",
      "Early access and exclusive discounts on all new features and tools",
    ],
    note: "Over $10000+ in value — all for just $199.",
  },
  {
    id: 3,
    title: "White House Package",
    price: "$20,000",
    badge: "Elite access for founders ready to lead and build their AI empire",
    description: " ",
    benifits: "What you get:",
    features: [
      "Private calls with AI founders and industry leaders",
      "Investor introductions (no funding guarantees)",
      "Custom AI built for your business, free of charge",
      "Priority to join our exclusive core team",
      "Unlimited access to all courses and training",
      "1-on-1 coaching with Marshall for personalized growth",
      "VIP invites to masterminds and exclusive events",
      "Priority early access to new AI tools and features",
      "Early access to new AI tools and features",
      "Tailored growth and monetization strategy",
    ],
    note1: "For serious founders ready to dominate the AI space.",
    note: "Over $100k+ in value — all for just $20k.",
  },
];

export default function PricingCard() {
  return (
    <div className=" text-white flex flex-col items-center justify-center p-8">
      <div className="grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-8 ">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className="border border-primary p-6   rounded-xl  "
          >
            <div className="md:w-[314px] md:h-[183px]  text-[32px] pr-5 ">
              <h2 className="w-[286px] h-[23px] font-bold mb-2 text-[20px]">
                {pack.title}
              </h2>

              <div className="w-[298px] md:h-[79px] h-[136px] pr-[8px] text-[32px] gap-[17px] mt-8">
                {/* Cross price */}
                {pack.crossprice && (
                  <div className=" font-bold text-[20px] text-white line-through decoration-primary mb-1 ">
                    {pack.crossprice}$
                  </div>
                )}
                {/* Main price */}
                <div className=" font-bold mb-1">{pack.price}</div>

                {/* Badge */}
                {pack.badge && (
                  <div className=" text-[20px] font-bold mb-2 ">
                    ({pack.badge}){pack.restbadge}
                  </div>
                )}

                <p className="text-sm text-white mb-5">{pack.description}</p>
              </div>
            </div>
            {/* Button */}
            <button className=" w-full  text-base  bg-primary hover:bg-red-700 text-white font-semibold py-2 rounded mb-4 md:mt-10 mt-[40px]">
              Get started
            </button>

            {/* Benefits */}
            <p className="text-base font-semibold mb-3">{pack.benifits}</p>

            {/* Features */}
            <ul className="space-y-2 text-sm mb-4">
              {pack.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2 items-start ">
                  <IoMdCheckmark className="text-primary text-xl mt-0.5" />
                  <span className="text-[#FFFFFF]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom notes */}
            <div className=" ">
              <div>
                {pack.note && (
                  <p className="md:[333px] md:[95px] text-[16px] font-semibold text-center mb-2 md:ml-5">
                    {pack.note1}
                  </p>
                )}
                {pack.note && (
                  <p className="text-[16px] font-semibold text-center mb-2">
                    {pack.note}
                  </p>
                )}
              </div>
              {pack.para && (
                <p className="text-red-500 md:text-center text-[20px] font-semibold mt-2 pb-7">
                  {pack.para}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

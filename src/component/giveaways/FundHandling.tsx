'use client';

import Image from "next/image";
import MainButton from "../shared/MainButton";
import { useRouter } from "next/navigation";

export default function FundsHandling() {
    const router = useRouter();

    const summaryCards = [
        {
            title: "Escrow Funds Summary",
            details: [
                { label: "Amount Held", value: "$500.00" },
                { label: "Status", value: "Locked in escrow" },
            ],
            badge: "Funds Secured",
            badgeColor: "bg-red-600",
        },
        {
            title: "Payment History",
            details: [
                { value: "Winner | Amount | Status | Date | Action |" },
                { value: "@alexdev | $100 | Paid | 🟢 | June 6 | View ..." },
            ],
            badge: null,
        },
    ];
    return (
        <div className=" text-white p-8 rounded-lg">
            <div className="text-center mb-8 py-8">
                <h2 className="text-2xl font-bold mb-2">Funds Handling</h2>
                <div className="flex justify-center">
                    <Image
                        src={"/line.svg"}
                        alt="Line"
                        width={533}
                        height={1}
                    />
                </div>

                <p className="text-gray-400 mb-6">Secure prize money and manage payout transparency</p>

                {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-colors">
          Go to Payout Dashboard
        </button> */}
                <MainButton
                    title="Go to Payout Dashboard"
                    onClick={() => router.push("/price-payment")}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {summaryCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-neutral-950 rounded-lg p-6 flex items-start gap-4"
                    >
                        <div className="w-12 h-12 bg-white  rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                            {card.details.map((item, i) => (
                                <p key={i} className="text-gray-400 text-sm mb-1">

                                    {item.value}
                                </p>
                            ))}
                            {card.badge && (
                                <span
                                    className={`${card.badgeColor} text-white text-xs px-2 py-1 rounded inline-block mt-2`}
                                >
                                    {card.badge}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

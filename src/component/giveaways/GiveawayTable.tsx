"use client";

import { useState } from "react";
import { useGetGiveawaysQuery } from "@/redux/api/Giveaway/giveawayApi";
import { IGiveaway } from "@/types/giveaway/giveaway";
import { EyeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function GiveawaysTable() {
  const { data: giveaways = [] } = useGetGiveawaysQuery();
  const [selectedGiveaway, setSelectedGiveaway] = useState<IGiveaway | null>(
    null
  );

  return (
    <div className="p-6 bg-black md:10 lg:mb-20 text-white">
      <h2 className="text-xl font-semibold mb-4">Giveaway Performance</h2>

      <Card className="w-full overflow-x-auto bg-[#000000] rounded-2xl border border-gray-800">
        <CardContent className="p-0">
          <table className="min-w-full text-sm text-left">
            <thead className="text-xs text-gray-300 uppercase border-b border-gray-800">
              <tr>
                <th className="px-6 py-4">Author Email</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {giveaways?.data?.map((giveaway: IGiveaway) => (
                <tr
                  key={giveaway._id}
                  className="border-b border-gray-800 hover:bg-gray-900 transition"
                >
                  <td className="px-6 py-4 text-white">
                    {giveaway.authorId?.userId?.email}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{giveaway.title}</td>
                  <td className="px-6 py-4 truncate max-w-xs text-gray-300">
                    {giveaway.description}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        giveaway.status === "ongoing"
                          ? "bg-green-900 text-green-400"
                          : "bg-blue-900 text-blue-400"
                      }`}
                    >
                      {giveaway.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {new Date(giveaway.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md shadow-md"
                      onClick={() => setSelectedGiveaway(giveaway)}
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Modal */}
      {selectedGiveaway && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 text-gray-200">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">
                {selectedGiveaway?.title}
              </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Author */}
              <div>
                <p className="text-sm font-medium text-gray-400">Author</p>
                <p className="text-sm">
                  {selectedGiveaway?.authorId?.userId?.firstName}{" "}
                  {selectedGiveaway?.authorId?.userId?.lastName} (
                  {selectedGiveaway?.authorId?.userId?.email})
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm font-medium text-gray-400">Description</p>
                <p className="text-sm">{selectedGiveaway?.description}</p>
              </div>

              {/* Rules */}
              <div>
                <p className="text-sm font-medium text-gray-400">Rules</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {selectedGiveaway?.rules?.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Status & Deadline */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-400">Status</p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold inline-block ${
                      selectedGiveaway?.status === "ongoing"
                        ? "bg-green-900 text-green-400"
                        : "bg-blue-900 text-blue-400"
                    }`}
                  >
                    {selectedGiveaway?.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Deadline</p>
                  <p className="text-sm">
                    {new Date(selectedGiveaway?.deadline).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Prize Money */}
              {selectedGiveaway?.priceMoney && (
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Prize Money
                  </p>
                  <p className="text-sm">${selectedGiveaway?.priceMoney}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800 flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => setSelectedGiveaway(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import Image from "next/image"
import { RightBorder } from "../shared/RightBorder"
import SubHeader from "../shared/SubHeader"

export default function Leaderboard() {
    const leaderboardData = [
        { id: 1, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "001", earnedPoints: "3750" },
        { id: 2, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "002", earnedPoints: "3470" },
        { id: 3, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "003", earnedPoints: "3420" },
        { id: 4, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "004", earnedPoints: "3330" },
        { id: 5, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "005", earnedPoints: "3320" },
        { id: 6, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "006", earnedPoints: "3220" },
        { id: 7, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "007", earnedPoints: "3219" },
        { id: 8, name: "Patrick_Sam", contests: "120 contests", toolsPromoted: "008", earnedPoints: "3123" },
    ]

    return (
        <div className="flex justify-center items-center flex-col mb-32">
            <SubHeader title="Leaderboard" />
            <div className="w-full max-w-[1065px] px-4">
                <RightBorder>
                    <div className="p-4 sm:p-8 lg:p-12">
                        {/* Table container with horizontal scroll */}
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px]">
                                <thead>
                                    <tr className="bg-primary">
                                        <th className="text-left py-4 px-6 font-semibold text-white">User Profile</th>
                                        <th className="text-center py-4 px-6 font-semibold text-white">Tools Promoted</th>
                                        <th className="text-center py-4 px-6 font-semibold text-white">Earned Point</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaderboardData.map((user, index) => (
                                        <tr
                                            key={user.id}
                                            className={`border-b border-gray-800 hover:bg-gray-900 transition-colors ${
                                                index % 2 === 1 ? "bg-gray-900" : "bg-transparent"
                                            }`}
                                        >
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src="/user-1.jpg"
                                                        alt={`${user.name} avatar`}
                                                        height={40}
                                                        width={40}
                                                        className="w-10 h-10 object-cover flex-shrink-0"
                                                    />
                                                    <div className="min-w-0">
                                                        <div className="text-white font-medium truncate">{user.name}</div>
                                                        <div className="text-gray-400 text-sm truncate">{user.contests}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-center text-white font-mono">{user.toolsPromoted}</td>
                                            <td className="py-4 px-6 text-center text-white font-semibold">{user.earnedPoints}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </RightBorder>
            </div>
        </div>
    )
}
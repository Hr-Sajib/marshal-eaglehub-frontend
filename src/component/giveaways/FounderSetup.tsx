export default function FounderSetup() {
  return (
    <div className=" text-white p-8 rounded-lg py-32 md:mx-32">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-[35px] font-semibold mb-2">Founder Setup Area</h1>
        <p className="text-[22px]">Setup your Giveaway, create a prize, and define rules</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="prize" className="block text-white font-medium text-sm">
            Prize
          </label>
          <input
            id="prize"
            type="text"
            placeholder="Enter your prize description"
            className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="rules" className="block text-white font-medium text-sm">
            Rules
          </label>
          <input
            id="rules"
            type="text"
            placeholder="Define Giveaway rules"
            className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
          />
        </div>

        <div className="space-y-2 md:col-span-1">
          <label htmlFor="escrow" className="block text-white font-medium text-sm">
            Escrow Funds
          </label>
          <input
            id="escrow"
            type="text"
            placeholder="Enter funds for Escrow"
            className="w-full bg-transparent border-2 border-red-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:outline-none px-3 py-2 rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

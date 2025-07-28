import Image from "next/image";
import founderImage from '@/../public/coding.png'
import influencerImage from '@/../public/vlogger.png'
import aiToolMakerImage from '@/../public/artificial-intelligence.png'

const WhoIsEgealFor = () => {
  const roles = [
    {
      image: founderImage,
      title: "Founders & Startups",
      description: "Launch growth campaigns and hire creators",
    },
    {
      image: influencerImage,
      title: "Influencers & Creators",
      description: "Get paid to promote powerful tools & brands",
    },
    {
      image: aiToolMakerImage,
      title: "AI Tool Makers",
      description: "Submit your tool & get real users and visibility",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Who Is <span className="text-red-500">EGEAL</span> Built For?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#121212] flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 text-white border border-red-700/30 hover:border-red-500"
            >
              <Image className="h-18 w-18 p-3 bg-red-500/10 rounded-full mb-3" src={role.image} alt={role.title} />
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-300">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsEgealFor;


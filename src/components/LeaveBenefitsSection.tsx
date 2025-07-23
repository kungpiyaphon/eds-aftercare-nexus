import {
  FaBed,
  FaBaby,
  FaUserTie,
  FaHandsHelping,
  FaBalanceScale,
  FaGraduationCap,
} from "react-icons/fa";

const leaveData = [
  {
    icon: <FaBed className="w-8 h-8 text-primary" />,
    title: "Sick Leave",
    description: "Not exceeding 30 days/year",
  },
  {
    icon: <FaUserTie className="w-8 h-8 text-primary" />,
    title: "Personal Leave",
    description: "Not exceeding 7 days/year",
  },
  {
    icon: <FaBaby className="w-8 h-8 text-primary" />,
    title: "Maternity Leave",
    description: "Not exceeding 98 days/year, including holidays",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-primary" />,
    title: "Ordination Leave",
    description: "Maximum not exceeding 15 days, can take leave once throughout the employment period.",
  },
  {
    icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
    title: "Other Leaves",
    description: "Sterilization, Training, Military Service",
  },
];

export default function LeaveBenefitsSection() {
  return (
    <section className="py-16 bg-[#f8f9fc] dark:bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Leave Benefits
        </h2>
        <div
          className="grid grid-rows-2 gap-4"
          style={{
            gridTemplateRows: "repeat(2, minmax(0, 1fr))",
            gridTemplateColumns: "repeat(15, minmax(0, 1fr))",
          }}
        >
          {/* First Row: 3 equal columns (5x5) */}
          <div className="col-span-5 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            {leaveData[0].icon}
            <h3 className="mt-4 text-xl font-semibold">{leaveData[0].title}</h3>
            <p className="text-gray-600 mt-2">{leaveData[0].description}</p>
          </div>
          <div className="col-span-5 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            {leaveData[1].icon}
            <h3 className="mt-4 text-xl font-semibold">{leaveData[1].title}</h3>
            <p className="text-gray-600 mt-2">{leaveData[1].description}</p>
          </div>
          <div className="col-span-5 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            {leaveData[2].icon}
            <h3 className="mt-4 text-xl font-semibold">{leaveData[2].title}</h3>
            <p className="text-gray-600 mt-2">{leaveData[2].description}</p>
          </div>

          {/* Second Row: 7 + 8 columns */}
          <div className="col-span-7 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            {leaveData[3].icon}
            <h3 className="mt-4 text-xl font-semibold">{leaveData[3].title}</h3>
            <p className="text-gray-600 mt-2">{leaveData[3].description}</p>
          </div>
          <div className="col-span-8 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex gap-6">
              <div className="flex-1 flex flex-col items-center">
                {leaveData[4].icon}
                <h3 className="mt-4 text-lg font-semibold">
                  {leaveData[4].title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 text-center">
                  {leaveData[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MissionSection() {
  const missions = [
    {
      title: "Help & Support",
      desc: "Social aid for the helpless and orphans.",
      icon: "🤝",
      color: "text-indigo-500",
    },
    {
      title: "Iftar Sharing",
      desc: "Nutritious meals for the needy during Ramadan.",
      icon: "🌙",
      color: "text-orange-500",
    },
    {
      title: "Blood Donation",
      desc: "Emergency blood supply to save lives.",
      icon: "🩸",
      color: "text-red-500",
    },
    {
      title: "Cloth Banking",
      desc: "Distributing clothes to those in need.",
      icon: "👕",
      color: "text-blue-500",
    },
    {
      title: "Tree Plantation",
      desc: "Planting trees for a greener future.",
      icon: "🌳",
      color: "text-green-500",
    },
    {
      title: "Food Banking",
      desc: "Fighting hunger by reducing food waste.",
      icon: "🍱",
      color: "text-yellow-500",
    },
    {
      title: "Quran Education",
      desc: "Spreading the light of Holy Quran.",
      icon: "📖",
      color: "text-emerald-500",
    },
    {
      title: "Medical Camp",
      desc: "Free checkups and essential medicines.",
      icon: "🏥",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        {/* Modern Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Why We <span className="text-green-600">Need Your Help</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium italic">
            Your small contribution can bring a big change in someones life
          </p>
        </div>

        {/* Compact Grid: Card height komano hoyeche */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {missions.map((m, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[220px]"
            >
              {/* Floating Icon Style */}
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:bg-green-50 transition-all">
                <span className={m.color}>{m.icon}</span>
              </div>

              {/* Text Content */}
              <h4 className="text-lg font-black text-gray-800 uppercase tracking-tight mb-2 group-hover:text-green-600 transition-colors">
                {m.title}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-2">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

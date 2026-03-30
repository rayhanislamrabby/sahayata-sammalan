export default function StatsSection() {
  const stats = [
    { 
      label: "Success Projects", 
      value: "150+", 
      icon: "🚀", 
      desc: "Delivering impactful results for disadvantaged communities." 
    },
    { 
      label: "People Impacted", 
      value: "25K+", 
      icon: "🤝", 
      desc: "Creating sustainable change and leadership opportunities." 
    },
    { 
      label: "Active Volunteers", 
      value: "500+", 
      icon: "🌟", 
      desc: "Join our vibrant team of young change-makers." 
    },
    { 
      label: "Global Partners", 
      value: "20+", 
      icon: "🌍", 
      desc: "Supporting our noble cause across borders." 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        
        {/* Compact Grid with Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 rounded-[2rem] border-2 border-green-100 hover:border-green-600 transition-colors duration-300 flex flex-col items-center text-center justify-center bg-transparent"
            >
              {/* Simple Icon - No background box */}
              <div className="text-3xl mb-3">
                {stat.icon}
              </div>

              {/* Value - Bold & Visible */}
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-1">
                {stat.value}
              </h3>

              {/* Label - Green Accent */}
              <p className="text-green-600 font-bold uppercase tracking-widest text-[10px] mb-3">
                {stat.label}
              </p>

              {/* Short Description - Balanced size */}
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed font-medium">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
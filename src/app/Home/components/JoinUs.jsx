export default function JoinUs() {
  const options = [
    {
      title: "Regular Donor",
      tag: "Monthly",
      desc: "Sustain our daily welfare through consistent monthly contributions.",
      icon: "💳",
      btnText: "Donate Monthly",
    },
    {
      title: "Lifetime Donation",
      tag: "Legacy",
      desc: "Leave a lasting legacy with a one-time major contribution.",
      icon: "💎",
      btnText: "One-time Gift",
    },
    {
      title: "Volunteer Team",
      tag: "Action",
      desc: "Join our dedicated team on the ground. Use your skills to serve.",
      icon: "🤝",
      btnText: "Join Team",
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
  
        <div className="text-center mb-10 space-y-2">
          <span className="text-emerald-600 font-black tracking-widest uppercase text-[10px]">
            Make an Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
            Serve <span className="text-emerald-600">With Honor</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {options.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[35px] bg-emerald-700 flex flex-col items-center text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2 border border-emerald-500/20"
            >
           
              <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/20 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>

            
              <div className="space-y-2 mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-300 opacity-80">
                  {item.tag}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-emerald-50/70 text-[11px] leading-relaxed font-medium px-2">
                  {item.desc}
                </p>
              </div>

         
              <button className="mt-auto w-full py-3.5 rounded-xl bg-white text-emerald-900 font-black text-[10px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all">
                {item.btnText}
              </button>
            </div>
          ))}
        </div>

    

      </div>
    </section>
  );
}
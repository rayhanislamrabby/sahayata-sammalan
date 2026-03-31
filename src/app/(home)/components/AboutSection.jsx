import Image from "next/image";

export default function AboutSection() {
  const focuses = [
    { title: "Find & Fund", desc: "Identifying local needs.", icon: "🔍" },
    { title: "Provide Care", desc: "Health & social support.", icon: "❤️" },
    { title: "We Educate", desc: "Learning for future.", icon: "🎓" },
    { title: "We Employ", desc: "Creating livelihoods.", icon: "💼" },
    { title: "Sustaining", desc: "Community growth.", icon: "🌱" },
    { title: "Respond", desc: "Emergency aid.", icon: "🆘" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
       
          <div className="w-full lg:w-5/12">
            <div className="relative h-[300px] md:h-[450px] w-full rounded-[30px] overflow-hidden shadow-xl border-4 border-gray-50">
              <Image 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070" 
                fill 
                className="object-cover" 
                alt="NGO Mission" 
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 space-y-8 flex flex-col items-center lg:items-start">
            
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] uppercase tracking-tighter">
                Empowering <span className="text-green-600 italic">Lives</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                To create skilled citizens by empowering disadvantaged children, youth and women’s communities. We focus on real education and the elimination of social inequality.
              </p>
            </div>

       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {focuses.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center lg:items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 transition-all group text-center lg:text-left shadow-sm hover:shadow-md"
                >
                  <div className="text-xl mb-3 bg-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-gray-800 text-sm md:text-base uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-tight mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

         
            <button className="bg-gray-900 text-white rounded-full px-10 py-4 text-[10px] md:text-xs font-black hover:bg-green-600 transition-all shadow-lg uppercase tracking-widest active:scale-95 mx-auto lg:mx-0">
              Join Our Journey →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
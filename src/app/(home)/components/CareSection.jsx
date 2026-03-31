import Image from "next/image";

export default function CareSection() {
  const causes = [
    {
      badge: "Tree Plantation",
      stats: "10,000+ Trees Planted",
      title: "Protecting the Planet, Preserving Our Future",
      desc: "Sohozogita Foundation, we believe that caring for the environment is not just a responsibility—it’s a necessity. As climate change threatens millions, especially in regions like Bangladesh, we take action through large-scale tree-planting, clean-up drives, and youth climate education.",
      points: ["Tree Plantation", "Climate Awareness", "Eco Education"],
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
      isReverse: false
    },
    {
      badge: "Eco Education",
      stats: "5,000+ Children Educated",
      title: "Lighting the Path of Knowledge for Every Child",
      desc: "We believe education is every child’s right, not a privilege. We work to ensure that children from underserved communities have access to quality learning, safe classrooms, and the tools they need to succeed through school programs and teacher training.",
      points: ["School Programs", "Digital Learning", "Teacher Training"],
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
      isReverse: true
    },
    {
      badge: "Women Empowerment",
      stats: "2,500+ Women Empowered",
      title: "Ending Violence, Restoring Dignity",
      desc: "Sohozogita Foundation stands against all forms of violence toward women. We provide support and empower survivors to reclaim their voice and dignity through education, advocacy, and legal aid. We believe every woman deserves to live free from fear.",
      points: ["Legal Aid", "Counseling", "Awareness Campaigns"],
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974",
      isReverse: false
    },
    {
      badge: "Plastic-Free Bangladesh",
      stats: "50+ Clean-up Drives",
      title: "Say No to Plastic, Say Yes to the Planet",
      desc: "Plastic pollution is one of the most pressing environmental threats. We organize clean-up drives and promote eco-friendly alternatives to help communities understand the dangers of single-use plastics and rethink plastic use in daily life.",
      points: ["Plastic-Free Zones", "Recycling Programs", "Eco Alternatives"],
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070",
      isReverse: true
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
    
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs">Our Commitment</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-3 leading-none uppercase tracking-tighter">
            What We <span className="text-green-600 italic">Care For</span>
          </h2>
          <p className="text-gray-500 mt-6 text-sm md:text-base font-medium">
            Committed to creating sustainable change through environmental protection, education, and social justice.
          </p>
        </div>

      
        <div className="space-y-32">
          {causes.map((cause, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${cause.isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
          
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative h-[350px] md:h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white">
                  <Image 
                    src={cause.img} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt={cause.title} 
                  />
                </div>
             
                <div className="absolute -bottom-6 -right-6 md:right-0 bg-gray-900 text-white p-6 rounded-3xl z-20 shadow-xl border-t-4 border-green-500 min-w-[180px]">
                  <p className="text-2xl font-black text-green-500 tracking-tighter">{cause.stats}</p>
                </div>
              </div>

            
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-green-600 font-bold text-xs uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                  {cause.badge}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-[1.1] tracking-tighter">
                  {cause.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                  {cause.desc}
                </p>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  {cause.points.map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-800 font-bold text-xs uppercase tracking-tight">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projectsCollection = await dbConnect(collectionNameObj.projectsCollection);
  const data = await projectsCollection.find({}).toArray();

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        
  
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em]">
            Our Ongoing Projects
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Current <span className="text-emerald-600">Impact</span> Projects
          </h2>
          <div className="h-1 w-12 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-base font-medium leading-relaxed pt-2">
            Providing sustainable solutions through community-driven initiatives in health, education, and emergency relief.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => (
            <div
              key={project._id.toString()}
              className="group bg-white rounded-3xl overflow-hidden flex flex-col h-full border-2 border-emerald-500 shadow-[inset_0_2px_12px_rgba(20,184,166,0.1)] hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-40 w-full relative overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col grow space-y-4">
                {/* Normal Weight Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Bigger Description Text */}
                <p className="text-slate-700 text-sm leading-relaxed font-normal line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-5 border-t border-emerald-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {project.status || "Active"}
                    </span>
                  </div>
                  
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-emerald-600 font-bold uppercase text-[11px] tracking-widest hover:text-emerald-800 transition-all flex items-center gap-1"
                  >
                    Details <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const projectsCollection = dbConnect(collectionNameObj.projectsCollection);

  const data = await (await projectsCollection).find({}).toArray();

  console.log("areee data ", data);

  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-emerald-950">
            Current <span className="text-emerald-600">Impact</span> Projects
          </h2>
          <div className="h-1 w-24 bg-emerald-600"></div>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((project) => (
            <div
              key={project._id.toString()}
              className="bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-emerald-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {project.category || "General Aid"}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 space-y-4">
                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">
                  {project.shortDesc}
                </p>

                <div className="pt-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-gray-200"
                  >
                    View Mission Details <span>→</span>
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

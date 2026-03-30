import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const projectsCollection = await dbConnect(collectionNameObj.projectsCollection);
  const project = await projectsCollection.findOne({ slug: slug });

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#FBFDFB] pb-24">
      {/* 1. Large & Impactful Hero */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </section>

      <div className="container mx-auto px-6 max-w-6xl mt-12">
        
        {/* 2. Premium Back Button - Under Image */}
        <div className="mb-12">
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-3 text-emerald-600 font-bold text-sm tracking-wide border-b-2 border-emerald-100 pb-1 hover:border-emerald-600 transition-all duration-300"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> 
            Back To All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 3. Main Story Section */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] uppercase tracking-tight">
                {project.title}
              </h1>
              <div className="h-1.5 w-16 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-8">
              <p className="text-slate-800 text-2xl font-semibold leading-snug">
                {project.shortDesc}
              </p>
              
              <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line border-l-4 border-emerald-50 pl-8 italic font-medium">
                {project.fullDetails || "We are dedicated to bringing hope and sustainable change. Our mission focuses on empowering the local community through direct action and transparent support."}
              </div>
            </div>
          </div>

          {/* 4. The Action Card (Impactful Sidebar) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="bg-white border-2 border-emerald-500 rounded-[32px] p-10 shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Project Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Location</span>
                    <span className="text-slate-900 font-black text-sm">{project.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Lives Impacted</span>
                    <span className="text-emerald-600 font-black text-lg">{project.impactCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Mission Status</span>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-slate-950 hover:bg-emerald-600 text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-[11px] shadow-xl active:scale-95 mb-4">
                  Make a Donation
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-tighter">
                  Every Taka counts towards a better future.
                </p>
              </div>

              {/* Extra Info Box */}
              <div className="mt-6 bg-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Join Us</p>
                <p className="text-sm font-medium leading-relaxed">
                  Want to help in person? Become a volunteer for this specific mission.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
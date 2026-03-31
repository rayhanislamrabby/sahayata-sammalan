import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import MemberCard from "./components/MemberCard";

export default async function MembersPage() {
  const membersCollection = await dbConnect(
    collectionNameObj.membersCollection,
  );
  const rawData = await membersCollection.find({}).toArray();
  const allMembers = JSON.parse(JSON.stringify(rawData));

  const directors = allMembers.filter((m) => m.section === "Board of Director");
  const leaders = allMembers.filter((m) => m.section === "Our Leaders");

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {directors.length > 0 && (
          <div className="mb-20 text-center">
            <h4 className="text-[#009661] font-bold text-xs uppercase tracking-[0.3em] mb-2">
              Our Core
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] uppercase mb-10">
              Board of <span className="text-[#009661]">Directors</span>
              <div className="w-16 h-1.5 bg-[#009661] mx-auto mt-3 rounded-full"></div>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {directors.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          </div>
        )}

    
        {leaders.length > 0 && (
          <div className="text-center pt-10">
            <h2 className="text-3xl font-black text-[#0F172A] uppercase mb-10">
              Our <span className="text-[#009661]">Leaders</span>
              <div className="w-16 h-1.5 bg-[#009661] mx-auto mt-3 rounded-full"></div>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {leaders.map((member) => (
                <MemberCard key={member._id} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

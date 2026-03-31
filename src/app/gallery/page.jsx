import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import ProjectGallery from "./component/ProjectGallery";

export default async function GalleryPage({ searchParams }) {
  const params = await searchParams;
  const imagePage = parseInt(params.p) || 1;
  const videoPage = parseInt(params.vp) || 1;
  const limit = 21;

  let images = [];
  let videos = [];
  let totalImgPages = 1;
  let totalVidPages = 1;

  try {
    const galleryCollection = await dbConnect(collectionNameObj.galleryCollection);


    const totalImages = await galleryCollection.countDocuments({ type: "image" });
    totalImgPages = Math.ceil(totalImages / limit);
    const imageData = await galleryCollection
      .find({ type: "image" })
      .skip((imagePage - 1) * limit)
      .limit(limit)
      .toArray();

   
    const totalVideos = await galleryCollection.countDocuments({ type: "video" });
    totalVidPages = Math.ceil(totalVideos / limit);
    const videoData = await galleryCollection
      .find({ type: "video" })
      .skip((videoPage - 1) * limit)
      .limit(limit)
      .toArray();

    images = JSON.parse(JSON.stringify(imageData));
    videos = JSON.parse(JSON.stringify(videoData));
  } catch (error) {
    console.error("Gallery Data Error:", error);
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Our Impact Gallery</h1>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <ProjectGallery 
          images={images} 
          videos={videos} 
          imagePagination={{ current: imagePage, total: totalImgPages }}
          videoPagination={{ current: videoPage, total: totalVidPages }}
        />
      </div>
    </main>
  );
}
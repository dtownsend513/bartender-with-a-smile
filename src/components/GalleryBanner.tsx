const galleryImages = [
  "/images/fruitydrink.png",
  "/images/tam.png",
  "/images/wed.png",
  "/images/tmbartender.png",
  "/images/fruitydrink.png",
];

export default function GalleryBanner() {
  return (
    <section className="bg-[#111018] py-10 px-6 border-y border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="overflow-hidden bg-black border border-white/10"
          >
            <img
              src={image}
              alt="Bartender With A Smile gallery preview"
              className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
import image1 from "../assets/bento/bento-1.png";
import image2 from "../assets/bento/bento-2.png";
import image3 from "../assets/bento/bento-3.png";
import image4 from "../assets/bento/bento-4.png";
import image5 from "../assets/bento/bento-5.png";

interface BentoImage {
  src: string;
  width: string;
  height: string;
  animation: string;
}

export const AboutUs = () => {
  const tiles: BentoImage[] = [
    { src: image1, width: "col-span-4 col-start-1", height: "row-span-2 row-start-1", animation: "animate-bento-enter-1"},
    { src: image2, width: "col-span-4 md:col-span-3 col-start-5", height: "row-span-1 row-start-1", animation: "animate-bento-enter-2"},
    { src: image4, width: "col-span-3 md:col-span-2 md:col-start-8", height: "row-span-1 md:row-start-1 row-start-3", animation: "animate-bento-enter-3" },
    { src: image3, width: "col-span-4 md:col-span-2 col-start-5", height: "row-span-1 row-start-2", animation: "animate-bento-enter-4" },
    { src: image5, width: "col-span-5 md:col-span-3 col-start-4 md:col-start-7", height: "row-span-1 row-start-3 md:row-start-2", animation: "animate-bento-enter-5" },
  ];
  return (
    <div
      id="aboutUs"
      className="relative min-h-screen flex flex-col space-y-16 items-center duration-600"
    >
      <div className=" container mx-auto z-10 text-start flex flex-col gap-4">
        <div className="text-6xl lg:text-8xl font-medium tracking-tightest animate-move-up opacity-0">
          About Us
        </div>
        <div className = "text-primary md:text-lg animate-move-up-delay-1 opacity-0">
          Project Kamakhya is a student-led initiative promoting sustainable menstruation through fun, educational workshops.
          We empower underprivileged girls and women with awareness and eco-friendly pads—one cycle at a time.
        </div>
        <div className="grid md:grid-rows-2 grid-rows-3 auto-cols-auto gap-2 h-96">
          
          {tiles.map((tile, index) => (
            <div key={index} className={`${tile.height} ${tile.width} ${tile.animation} opacity-0`}>
              <img src={tile.src} className = "h-full w-full object-cover rounded-xl"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

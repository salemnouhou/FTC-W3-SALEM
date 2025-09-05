import { HeroSection } from "./components";
import DogHomeSection from "./components/layout/DogHomeSection";
import Banner from "./components/ui/Banner";
import womandog from "@/assets/images/banner/womandog.png"
export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="max-w-[1444px] pt-8 lg:pt-14  mx-auto px-4 md:px-10  xl:px-6 2xl:px-0  border">
        <DogHomeSection />
        <div className="mt-8  ">
          <Banner variant='homefirst' homeFirstImage={womandog.src}/>
        </div>

        <div className="mt-96">

        </div>
      </div>
    </>
  );
}

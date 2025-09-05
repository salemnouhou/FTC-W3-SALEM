import { HeroSection } from "./components";
import DogHomeSection from "./components/layout/DogHomeSection";
import PetSellers from "./components/layout/PetSellers";
import ProductHomeSection from "./components/layout/ProductHomeSection";
import Banner from "./components/ui/Banner";
import womandog from "@/assets/images/banner/womandog.png"
import homehandimage from "@/assets/images/banner/homehandimage.png"
import BlogPetSection from "./components/layout/BlogPetSection";
export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="max-w-[1444px] pt-10 lg:pt-14  mx-auto px-4 md:px-10  xl:px-6 2xl:px-0  ">
        <DogHomeSection />
        <div className="mt-8 md:mt-14 md:py-14  space-y-8">
          <Banner variant='homefirst' homeFirstImage={womandog.src}/>
        <ProductHomeSection/>
        <PetSellers/>
        <Banner variant='homesecond' homeFirstImage={homehandimage.src}/>
        <BlogPetSection/>

        </div>

        <div className="mt-96">

        </div>
      </div>
    </>
  );
}

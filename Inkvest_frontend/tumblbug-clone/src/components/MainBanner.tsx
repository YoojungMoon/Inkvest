import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const bannerItems = [
  {
    id: 1,
    title: "나무키오 3",
    description: "새로운 디자인의 나무키오",
    imageUrl: "https://ext.same-assets.com/2792592828/4099708575.jpeg",
    link: "/namukio3",
  },
  {
    id: 2,
    title: "2025 희망의 다리",
    description: "희망의 다리 함께 건설하기",
    imageUrl: "https://ext.same-assets.com/2792592828/383491129.jpeg",
    link: "/2025hopebridge",
  },
  {
    id: 3,
    title: "5월의 맛",
    description: "2025년 5월, 새로운 맛을 만나보세요",
    imageUrl: "https://ext.same-assets.com/2792592828/3623985477.jpeg",
    link: "/collections/2025mayfood",
  },
];

const MainBanner = () => {
  return (
    <section className="relative bg-white py-4">
      <div className="container mx-auto">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {bannerItems.map((item) => (
              <CarouselItem key={item.id}>
                <Link href={item.link}>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end p-6">
                      <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2" />
          <CarouselNext className="absolute right-4 top-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default MainBanner;

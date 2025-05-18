import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const popularProjects = [
  {
    id: 1,
    title: "무용영화 Entangled Body 얽힌몸",
    creator: "KKUM",
    imageUrl: "https://ext.same-assets.com/2792592828/1780552842.png",
    fundingPercentage: 166,
    fundingAmount: "5,502,000",
    daysLeft: 59,
    link: "/entangledbody",
  },
  {
    id: 2,
    title: "빌리언스 뜨개 인형",
    creator: "이유정",
    imageUrl: "https://ext.same-assets.com/2792592828/3254777411.png",
    fundingPercentage: 2032,
    fundingAmount: "10,163,700",
    daysLeft: 27,
    link: "/billions",
  },
  {
    id: 3,
    title: "<토박이> 토마토 마가 보이는 길 !",
    creator: "신혜정",
    imageUrl: "https://ext.same-assets.com/2792592828/1291817823.jpeg",
    fundingPercentage: 18875,
    fundingAmount: "566,273,000",
    daysLeft: 17,
    link: "/toemarok_01",
  },
  {
    id: 4,
    title: "희망을 잇는 다리를 함께 건설합니다",
    creator: "문유정",
    imageUrl: "https://ext.same-assets.com/2792592828/421791190.png",
    fundingPercentage: 2636,
    fundingAmount: "13,180,115",
    daysLeft: 6,
    link: "/2025hopebridge",
  },
];

const PopularProjects = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">주목할 만한 프로젝트</h2>
          <Link
            href="/discover?projectSort=popular&ongoing=onGoing"
            className="text-sm text-gray-500 hover:text-primary"
          >
            더보기
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProjects.map((project) => (
            <Link key={project.id} href={project.link}>
              <Card className="hover:shadow-md transition-shadow overflow-hidden h-full border-none">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-base line-clamp-2">{project.title}</h3>
                  {project.creator && (
                    <p className="text-sm text-gray-500 mt-1">{project.creator}</p>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between pt-0 pb-4">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold">{project.fundingPercentage}%</span>
                    <span className="text-sm text-gray-500">{project.fundingAmount}원</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">{project.daysLeft}일 남음</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProjects;

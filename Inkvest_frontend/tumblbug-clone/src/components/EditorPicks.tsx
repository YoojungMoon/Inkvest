import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const editorPickItems = [
  {
    id: 1,
    title: "마감임박, 서두르세요",
    description: "마감임박인 프로젝트들을 지금 만나보세요!",
    imageUrl: "https://ext.same-assets.com/2792592828/3172706362.jpeg",
    projectCount: 13,
    link: "/collections/lastcall_2025",
  },
  {
    id: 2,
    title: "5월의 맛을 찾아서.",
    description: "봄의 마지막 5월, 입안 가득 퍼지는 행복",
    imageUrl: "https://ext.same-assets.com/2792592828/248716559.jpeg",
    projectCount: 15,
    link: "/collections/2025mayfood",
  },
  {
    id: 3,
    title: "내면의 평화 찾기",
    description: "바쁜 일상 속에서 나만의 평화를 찾는 법 - 지금 시작해보세요!",
    imageUrl: "https://ext.same-assets.com/2792592828/2370971652.jpeg",
    projectCount: 14,
    link: "/collections/innerpeace",
  },
  {
    id: 4,
    title: "포탈로 떠나요, 함께 가요!",
    description: "포탈로 떠나요! 새로운 세계로. 함께 꿈꾸는 서사를 경험해보세요.",
    imageUrl: "https://ext.same-assets.com/2792592828/1585839682.jpeg",
    projectCount: 32,
    link: "/collections/portal8",
  },
];

const EditorPicks = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            텀블벅 PICK
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              AD
            </span>
          </h2>
          <Link
            href="/list/editorpick"
            className="text-sm text-gray-500 hover:text-primary"
          >
            더보기
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorPickItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <Card className="hover:shadow-md transition-shadow overflow-hidden h-full border-none">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                  <div className="mt-3 text-sm text-gray-500">
                    프로젝트 {item.projectCount}개
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorPicks;

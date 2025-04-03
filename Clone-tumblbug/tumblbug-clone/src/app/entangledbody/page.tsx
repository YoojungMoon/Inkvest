import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProjectDetailPage() {
  const project = {
    title: "무용영화 Entangled Body 얽힌몸",
    creator: "KKUM",
    currentAmount: "5,502,000",
    goalAmount: "3,300,000",
    percentFunded: 166,
    daysLeft: 59,
    supporterCount: 123,
    endDate: "2025. 06. 01",
    estimatedDeliveryDate: "2025. 08. 01",
    mainImage: "https://ext.same-assets.com/2792592828/1966614.png",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Project Header */}
        <div className="border-b">
          <div className="container mx-auto py-6">
            <div className="flex items-center text-sm mb-4">
              <Link href="/discover?tab=category&category=dance" className="text-gray-500 hover:text-primary">
                댄스
              </Link>
              <span className="mx-2 text-gray-300">›</span>
              <span className="text-gray-700">무용영화</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{project.title}</h1>
          </div>
        </div>

        {/* Project Content */}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* Project Navigation */}
              <div className="border-b mb-8">
                <div className="flex gap-6 mb-2">
                  <Link href="#" className="font-medium text-primary border-b-2 border-primary pb-2">
                    스토리
                  </Link>
                  <Link href="#" className="font-medium text-gray-500 hover:text-gray-700 pb-2">
                    창작자 소개
                  </Link>
                  <Link href="#" className="font-medium text-gray-500 hover:text-gray-700 pb-2">
                    후원자 응원
                  </Link>
                  <Link href="#" className="font-medium text-gray-500 hover:text-gray-700 pb-2">
                    커뮤니티
                  </Link>
                </div>
              </div>

              {/* Project Story */}
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold">프로젝트 소개</h2>
                <p>
                  안녕하세요, KKUM 스튜디오입니다. 우리의 새로운 무용영화 프로젝트를 소개합니다.
                </p>

                <h3 className="text-lg font-bold mt-8">이 영화에 관하여</h3>
                <p>
                  &lt;Entangled Body 얽힌몸&gt;은 '우리의 몸과 마음, 기억과 역사'가 어떻게 서로 얽혀 있는지를
                  표현하는 무용영화입니다. 춤과 영상의 결합을 통해 인간 존재의 깊은 연결성을 탐구합니다.
                </p>

                <p>
                  5명의 무용수가 펼치는 이 작품은 개인의 몸이 타인과 공간, 역사와 어떻게 얽히는지를
                  표현적이고 시각적인 언어로 풀어냅니다.
                </p>

                <div className="my-8">
                  <Image
                    src="https://ext.same-assets.com/2792592828/4105112960.png"
                    alt="영화 장면"
                    width={800}
                    height={450}
                    className="rounded-lg"
                  />
                </div>

                <h3 className="text-lg font-bold mt-8">창작 배경</h3>
                <p>
                  "우리의 몸은 하나의 단일체가 아닙니다. 몸은 기억을 담는 그릇이자,
                  역사의 흔적들이 층층이 쌓인 장소입니다."
                </p>
                <p>
                  이 영화는 단순한 무용 작품을 넘어 우리 사회와 역사, 개인의 관계를
                  신체적 언어로 표현하고자 합니다. 독특한 촬영 기법과 편집을 통해
                  신체의 움직임이 가진 아름다움과 의미를 극대화하고자 합니다.
                </p>
              </div>
            </div>

            {/* Right Column - Funding Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-primary font-bold text-2xl">{project.percentFunded}%</span>
                      <span className="font-bold text-2xl">{project.currentAmount}원</span>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded">
                      <div
                        className="h-full bg-primary rounded"
                        style={{ width: `${Math.min(project.percentFunded, 100)}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-500 mt-2">목표 금액 {project.goalAmount}원</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">남은 기간</div>
                      <div className="font-bold">{project.daysLeft}일</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">후원자</div>
                      <div className="font-bold">{project.supporterCount}명</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">종료일</div>
                      <div className="font-bold">{project.endDate}</div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">창작자</div>
                      <div className="font-bold mt-1">{project.creator}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">예상 전달일</div>
                      <div className="font-bold mt-1">{project.estimatedDeliveryDate}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full py-6 text-lg">이 프로젝트 후원하기</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

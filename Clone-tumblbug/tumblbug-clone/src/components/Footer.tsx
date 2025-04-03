import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Information */}
          <div>
            <h3 className="font-bold text-sm mb-4">텀블벅</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/notices" className="text-xs text-gray-600 hover:text-primary">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-gray-600 hover:text-primary">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-xs text-gray-600 hover:text-primary">
                  채용
                </Link>
                <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded bg-red-500 text-white">2</span>
              </li>
              <li>
                <Link href="/year2024" className="text-xs text-gray-600 hover:text-primary">
                  2024 텀블벅 결산
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-xs text-gray-600 hover:text-primary">
                  텀블벅 컨설팅
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-bold text-sm mb-4">이용안내</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-primary">
                  헬프 센터
                </Link>
              </li>
              <li>
                <Link href="/creator" className="text-xs text-gray-600 hover:text-primary">
                  첫 펀딩 가이드
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-xs text-gray-600 hover:text-primary">
                  수수료 안내
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-xs text-gray-600 hover:text-primary">
                  기업 협찬
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-xs text-gray-600 hover:text-primary">
                  제휴 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">정책</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-xs text-gray-600 hover:text-primary">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-xs text-gray-600 hover:text-primary">
                  <strong>개인정보 처리방침</strong>
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-xs text-gray-600 hover:text-primary">
                  프로젝트 검수 기준
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: App Downloads */}
          <div>
            <h3 className="font-bold text-sm mb-4">App</h3>
            <div className="flex flex-col gap-2">
              <Link href="https://tumblbug.app.link/aJYX8COIxgb" className="text-xs bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 flex items-center gap-2">
                <span>안드로이드</span>
              </Link>
              <Link href="https://tumblbug.app.link/vHCeCiwIxgb" className="text-xs bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 flex items-center gap-2">
                <span>iOS</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Customer Service Info */}
        <div className="mt-10">
          <h3 className="font-bold text-sm mb-4">고객지원</h3>
          <p className="text-xs text-gray-600 mb-2">
            평일 9:30 ~ 17:00 (12:00 ~14:00 제외)
          </p>
          <Link href="/contact" className="text-xs bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 inline-block">
            텀블벅에 문의
          </Link>
        </div>

        {/* Company Info */}
        <div className="mt-10 text-xs text-gray-500 space-y-1">
          <p>회사명 (주) 백패커 | 대표 김연아 | 사업자등록번호 107-87-83297</p>
          <p>통신판매업신고번호 2023-서울강남-2114 | 대표번호 02-6080-0760</p>
          <p>이메일 support_tumblbug@backpac.kr</p>
          <p>© 2025 Backpackr Inc.</p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-4">
          <Link href="https://pf.kakao.com/_BAxdXj" aria-label="Kakao">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
          <Link href="https://www.facebook.com/tumblbug" aria-label="Facebook">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
          <Link href="https://twitter.com/tumblbug" aria-label="Twitter">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
          <Link href="https://www.instagram.com/tumblbug" aria-label="Instagram">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
          <Link href="https://post.naver.com/tumblbug_n" aria-label="Naver">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
          <Link href="https://brunch.co.kr/@tumblbug" aria-label="Brunch">
            <div className="w-6 h-6 rounded-full bg-gray-300" />
          </Link>
        </div>

        {/* ISMS Certificate */}
        <div className="mt-8 flex items-start gap-4">
          <Link href="https://isms.kisa.or.kr/" className="block w-16">
            <div className="w-16 h-16 bg-gray-300 rounded" />
          </Link>
          <p className="text-xs text-gray-500 flex-1">
            [인증범위] 텀블벅 서비스 운영 (심사받지 않은 물리적 인프라 제외)<br />
            [유효기간] 2024.11.06 ~ 2027.11.05
          </p>
        </div>

        <Separator className="my-6" />

        <p className="text-xs text-gray-500">
          텀블벅은 플랫폼 제공자이며 직접적인 판매를 진행하지 않습니다. 프로젝트의 진행과 선물 전달의 책임은 해당 프로젝트의 창작자에게 있으며, 프로젝트와 선물 내용 및 진행에 관한 법적 책임은 창작자가 부담합니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

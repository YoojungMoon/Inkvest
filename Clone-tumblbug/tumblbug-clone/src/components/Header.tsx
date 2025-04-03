import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#1e1e1e]">tumblbug</span>
        </Link>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex gap-5">
          <Link href="/discover" className="text-sm font-medium hover:text-primary">
            카테고리
          </Link>
          <Link href="/collections" className="text-sm font-medium hover:text-primary">
            모금하기
          </Link>
          <Link href="/notices" className="text-sm font-medium hover:text-primary">
            기부
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            소식
          </Link>
          <Link href="/help" className="text-sm font-medium hover:text-primary">
            공개예정
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            마감임박
          </Link>
          <Link href="/careers" className="text-sm font-medium hover:text-primary">
            창작자 가이드
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="검색어를 입력해주세요."
              className="h-9 w-56 pl-3 pr-10 text-sm rounded-full border-gray-300"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-9 w-9 text-gray-500"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium">
              로그인 / 회원가입
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

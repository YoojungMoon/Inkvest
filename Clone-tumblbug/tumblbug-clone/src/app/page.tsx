import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import PopularProjects from "@/components/PopularProjects";
import EditorPicks from "@/components/EditorPicks";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <MainBanner />
        <PopularProjects />
        <EditorPicks />
        {/* Add more sections as needed */}
      </main>
      <Footer />
    </div>
  );
}

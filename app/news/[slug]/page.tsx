import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";
import { notFound } from "next/navigation";
import { categoryColors } from "@/lib/category-colors";

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export const generateStaticParams = () => {
  return data.map((article) => ({ slug: article.slug }));
};

const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;

  const foundArticle = data.find((article) => article.slug === slug);
  if (!foundArticle) {
    notFound();
  }

  const related = data.filter((article) => article.category === foundArticle.category && article.id !== foundArticle.id);

  const initials = foundArticle.author
    .split(" ")
    .map((item) => item[0])
    .join("");

  return (
    <div className="max-w-7xl w-full px-4 sm:px-5 lg:px-8 mx-auto">
      <header className="h-15.25 gap-3 flex items-center flex-wrap">
        <Link href="/" className="font-bold text-xs text-[#22241F] cursor-pointer">
          ← All stories
        </Link>
        <div className="text-xs text-[#65675F]">/</div>
        <div className="text-xs text-[#65675F]">{foundArticle.category}</div>
      </header>
      <div className="w-full flex flex-col gap-5 rounded-2xl border-b border-[#E2E2DA] px-5 pt-10 pb-8 md:px-12 md:pt-14 md:pb-10 lg:px-23 lg:pt-18 lg:pb-12">
        <div className="flex items-center gap-2 h-6.75">
          <div className={`px-3 h-full rounded-[100px] flex justify-center items-center text-[10px] font-bold ${categoryColors[foundArticle.category]}`}>{foundArticle.category}</div>
          <div className="text-xs text-[#65675F] flex justify-center items-center whitespace-nowrap">— THE DAILY</div>
        </div>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0C0A09] wrap-break-word">{foundArticle.title}</h1>
        <p className="text-base sm:text-[18px] text-[#57534E]">{foundArticle.description}</p>
        <div className="w-full h-px bg-[#E2E2DA]"></div>
        <div className="w-full gap-5 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3.5">
            <div className={`w-12 h-12 shrink-0 rounded-2xl flex justify-center items-center text-[14px] font-bold ${categoryColors[foundArticle.category]}`}>{initials}</div>
            <div className="flex flex-col justify-center">
              <div className="text-[#65675F] font-bold text-[10px]">WRITTEN BY</div>
              <div className="font-bold text-[14px] text-[#22241F]">{foundArticle.author}</div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="text-[#65675F] text-[10px] font-bold">PUBLISHED</div>
              <div className="text-[#22241F] text-[14px]">{foundArticle.date}</div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-[#65675F] text-[10px] font-bold">READING TIME</div>
              <div className="text-[#22241F] text-[14px]">1 min read</div>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full h-auto max-h-150 object-cover rounded-2xl" src={foundArticle.image} alt={foundArticle.imageAlt} />
      <span className="block pt-3 text-[10px] text-[#65675F]">{foundArticle.imageAlt}</span>
      <div className="w-full max-w-3xl mx-auto flex flex-col py-8 sm:py-10 gap-4">
        <div className="w-full flex flex-col border border-[#E2E2DA] rounded-2xl p-4 sm:p-6 gap-6">
          <div className="font-bold text-[10px] text-[#C44724]">━━ THE STORY</div>
          <div className="font-serif text-[#44403C] text-base sm:text-[18px] flex flex-col gap-4">
            {foundArticle.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="font-bold text-[16px] text-[#C44724] w-full flex justify-center items-center">• • •</div>
        </div>
        <div className="text-[11px] text-[#65675F] flex justify-center items-center text-center">Fictional sample story · The Daily learning edition</div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#FFF7ED] p-4 sm:p-6 gap-5">
          <span className="font-semibold text-[18px] flex flex-col">
            A little more curiosity?
            <span className="font-normal text-[#65675F] text-[14px]">Your next good read is just around the corner.</span>
          </span>
          <Link href="/" className="w-fit shrink-0 px-5 h-9.25 rounded-[100px] bg-[#22241F] flex justify-center items-center text-white text-xs">
            All stories ↗
          </Link>
        </div>
      </div>
      <div className="w-full pt-8 sm:pt-10 pb-8 sm:pb-16 gap-4 sm:gap-7 flex flex-col">
        <div className="font-bold text-[10px] text-[#C44724]">KEEP YOUR CURIOSITY GOING</div>
        <div className="font-bold text-2xl sm:text-3xl text-[#22241F]">More to discover.</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 pb-10">
        {related.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
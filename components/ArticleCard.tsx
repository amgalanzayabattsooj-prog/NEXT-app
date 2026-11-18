import { ArrowUpRight, Clock } from "lucide-react";
import { categoryColors } from "@/lib/category-colors";
import Link from "next/link";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const ArticleCard = (props: ArticleCardType) => {
  const { slug, title, description, category, image, imageAlt, author, date } = props;

  const initials = author
    .split(" ")
    .map((item) => item[0])
    .join("");

  return (
    <Link href={`/news/${slug}`} className="group block h-full">
      <div className="h-full rounded-2xl flex flex-col border bg-white border-[#E7E5E4] overflow-hidden transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-[#C44724]">
        <div className="aspect-[1.6] relative overflow-hidden">
          <img className="w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out" src={image} alt={imageAlt} />
          <div
            className={`absolute left-3 top-3 flex h-6.75 items-center justify-center rounded-full px-3 text-[10px] font-bold ring-1 ring-inset ${
              categoryColors[category] ?? "bg-gray-50 text-gray-800 ring-gray-200"
            }`}
          >
            {category}
          </div>
          <div className="gap-1.5 flex absolute bottom-3 left-3">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs">1 min read</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-xl transition-colors duration-300 group-hover:text-[#C44724]">{title}</h2>
            <p className="font-normal text-sm text-[#57534E]">{description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-px bg-[#E2E2DA]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-3 min-w-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#ECFDF5] flex justify-center items-center">{initials}</div>
                <div className="min-w-0 gap-1 flex flex-col">
                  <div className="font-bold text-xs truncate">{author}</div>
                  <div className="text-xs text-[#78716C]">{date}</div>
                </div>
              </div>
              <div className="w-9 h-9 shrink-0 rounded-full bg-[#FFF7ED] flex justify-center items-center transition-colors duration-300 group-hover:bg-[#C44724]">
                <ArrowUpRight className="w-4.5 h-4.5 transition duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

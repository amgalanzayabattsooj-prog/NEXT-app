"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import data from "@/data/news.json";

const categories = ["All stories", ...Array.from(new Set(data.map((a) => a.category)))];

const Home = () => {
  const [active, setActive] = useState("All stories");

  const filtered = active === "All stories" ? data : data.filter((a) => a.category === active);

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col px-5 sm:px-8 lg:px-12 pb-16">
      <header className="w-full flex flex-col justify-between gap-2 pt-10">
        <div className="font-bold text-[10px] text-[#C44724]">STAY CURIOUS</div>
        <div className="w-full font-bold text-3xl md:text-4xl flex justify-between items-end">
          The latest stories.
          <span className="hidden md:block text-[#65675F] text-xs font-normal">Big ideas. Fresh voices. Worth your time.</span>
        </div>
      </header>
      <div className="w-full flex flex-col pt-6">
        <div className="w-full border-t border-[#E2E2DA]"></div>
        <div className="w-full flex flex-wrap gap-2 py-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${active === category ? "bg-black text-white" : "text-[#65675F] hover:bg-green-100"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full border-t border-[#E2E2DA]"></div>
      </div>
      <p className="py-6 text-sm text-[#65675F]">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"} to explore
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            slug={article.slug}
            title={article.title}
            description={article.description}
            category={article.category}
            image={article.image}
            imageAlt={article.imageAlt}
            author={article.author}
            date={article.date}
            content={article.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

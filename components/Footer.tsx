"use client";

export const Footer = () => {
  return (
    <footer className="w-full mt-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-t border-[#E2E2DA] py-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="font-bold text-3xl md:text-4xl tracking-tight text-[#1a1a1a]">the daily</span>
              <span className="w-5 h-5 border border-black bg-[repeating-linear-gradient(135deg,black,#C44724_1px,transparent_1px,transparent_4px)]"></span>
            </div>
            <p className="text-xs leading-7 text-[#65675F]">A fresh perspective. Every day.</p>
          </div>
          <a href="#" className="text-xs text-[#1a1a1a] hover:text-[#C44724] transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
import { categoryColors } from "@/lib/category-colors"; // ugugdliin zam chini
 
const fallback = "bg-gray-50 text-gray-800 ring-gray-200";
 
type Props = {
  category: string;
  className?: string;
};
 
const CategoryBadge = ({ category, className = "" }: Props) => {
  const colors = categoryColors[category] ?? fallback;
 
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${colors} ${className}`}
    >
      {category}
    </span>
  );
};
 
export default CategoryBadge; 
 
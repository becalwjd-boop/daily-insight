"use client";

const categories = ["경제", "금융", "기업", "부동산", "사회", "국제"];

export default function CategoryShortcut() {
  const scrollToCategory = (category: string) => {
    const target = document.getElementById(`category-${category}`);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    target.classList.add("ring-2", "ring-blue-300");

    setTimeout(() => {
      target.classList.remove("ring-2", "ring-blue-300");
    }, 1200);
  };

  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => scrollToCategory(category)}
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
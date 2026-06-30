const categories = [
  "경제",
  "금융",
  "기업",
  "부동산",
  "사회",
  "국제",
  "연예",
  "스포츠",
];

export default function CategoryShortcut() {
  return (
    <nav className="mt-6 block md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {categories.map((category) => (
          <a
            key={category}
            href={`#category-${category}`}
            className="rounded-full bg-white px-3 py-2 text-center text-xs font-semibold text-gray-600 shadow-sm transition hover:bg-blue-50 hover:text-blue-600"
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
}
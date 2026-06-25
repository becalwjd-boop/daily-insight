"use client";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f6f7f9]">
      <div className="flex flex-col items-center">
        <div className="relative mb-6 h-20 w-20">
          <div className="absolute inset-0 rounded-3xl bg-black shadow-lg" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white border-t-blue-500 animate-spin" />
        </div>

        <p className="text-sm font-semibold text-blue-600">
          DAILY INSIGHT
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          뉴스를 불러오는 중
        </h2>

        <div className="mt-4 flex gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-900 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-900 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-900" />
        </div>
      </div>
    </div>
  );
}
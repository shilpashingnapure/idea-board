import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <nav className="border-b  bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <span className="text-xl">IdeaFlow</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

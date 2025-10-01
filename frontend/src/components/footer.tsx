import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-white">IdeaFlow</span>
          </div>
          <p className="text-sm">
            © 2025 IdeaFlow. Empowering ideas worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

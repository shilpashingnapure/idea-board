import apiService from "@/lib/apiCall";
import { ArrowUp, ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function IdeaCard({ idea }: any) {
  const [upvotes, setUpvotes] = useState<number>(idea.upvotes);
  const handleUpvote = async (id: string) => {
    setUpvotes((prev) => prev + 1);

    try {
      await apiService.patch(`/ideas/${idea.id}/upvote`);
    } catch (err) {
      setUpvotes((prev) => prev - 1);
      console.error(err);
    }

  };
  return (
    <div
      key={idea.id}
      className="p-6 shadow hover:shadow-lg transition-all border-2 border-transparent hover:border-purple-200 rounded-lg bg-white"
    >
      <div className="flex flex-col gap-4">
        <p className="text-gray-800 leading-relaxed break-words">{idea.text}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleUpvote(idea.id)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-50 hover:text-purple-600 transition-all"
            >
              <ThumbsUp className="w-5 h-5 " />
            </button>
            <span className="text-purple-600">{upvotes}</span>
            <span className="text-xs">Upvotes</span>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            {new Date(idea.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

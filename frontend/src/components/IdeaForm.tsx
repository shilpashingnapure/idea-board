import { useState } from "react";
import { Idea } from "../app/app/page";
import { Send } from "lucide-react";
import apiService from "@/lib/apiCall";

export default function IdeaForm({ onNewIdea }: any) {
  const [newIdea, setNewIdea] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;

    if (text.length <= 280) {
      setNewIdea(text);
      setCharCount(text.length);
      setError("");
    } else {
      setError("Maximum 280 characters allowed");
      setNewIdea(text.slice(0, 280));
      setCharCount(280);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.trim()) return;
    if (charCount > 280) {
      setError("Cannot submit more than 280 characters");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.post("/ideas", {
        text: newIdea.trim(),
      });
      const idea: Idea = response.data;
      onNewIdea(idea);

      setNewIdea("");
      setCharCount(0);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Error submitting idea. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mb-12 border-2 rounded-lg shadow-lg bg-white border-purple-100">
      {error && (
        <div className="mb-2 text-red-600 font-medium text-sm">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={newIdea}
          onChange={handleIdeaChange}
          placeholder="What's your idea? Share your thoughts..."
          className={`w-full min-h-[120px] resize-none rounded-md p-3 focus:outline-none focus:ring-2 text-gray-800 ${
            error
              ? "border border-red-500 focus:ring-red-400"
              : "border border-gray-300 focus:ring-purple-400"
          }`}
        />
        <div className="flex items-center justify-between mt-2">
          <span
            className={`text-sm ${
              charCount > 280 ? "text-orange-500" : "text-gray-500"
            }`}
          >
            {charCount}/280
          </span>
          <button
            type="submit"
            disabled={!newIdea.trim() || charCount > 280 || loading}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            Share Idea
          </button>
        </div>
      </form>
    </div>
  );
}

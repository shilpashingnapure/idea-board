"use client";
import { useEffect, useState } from "react";
import { Sparkles, ArrowUp, Send } from "lucide-react";
import AppHeader from "../../components/appHeader";
import IdeaForm from "../../components/IdeaForm";
import IdeaCard from "../../components/IdeaCard";
import apiService from "@/lib/apiCall";

export interface Idea {
  id: string;
  text: string;
  upvotes: number;
  createdAt: Date;
}

export default function IdeaBoard() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await apiService.get("/ideas");
        const data = res.data;
        setIdeas(data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <AppHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Share Your Brilliant Ideas
          </h1>
          <p className="text-gray-600">
            Post anonymously and let the community decide what shines
          </p>
        </div>
        <IdeaForm
          onNewIdea={(idea: Idea) => setIdeas((prev) => [idea, ...prev])}
        />
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl">
            All Ideas
            <span className="ml-3 bg-purple-200 text-purple-700 px-2 py-1 rounded-full text-sm">
              {ideas.length}
            </span>
          </h2>
          <span className="text-sm text-gray-600">Sorted by Recent Ideas</span>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ideas.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                No ideas yet. Be the first to share!
              </p>
            </div>
          ) : (
            ideas.map((idea) => <IdeaCard idea={idea} key={idea.id} />)
          )}
        </div>
      </main>
    </div>
  );
}

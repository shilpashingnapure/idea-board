"use client";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "@/components/header";
import FeatureSection from "@/components/FeaturesSection";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import apiService from "@/lib/apiCall";

export default function LandingPage() {
  const [ideaCount, setIdeaCount] = useState(0);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await apiService.get("/ideas"); 
        const data = res.data;
        setIdeaCount(data.length); 
        const totalUpvotes = data.reduce((sum: number, idea: any) => sum + idea.upvotes, 0);
        setUpvoteCount(totalUpvotes);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  if(loading) return <div>Loading...</div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Where great ideas come to life</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Ideas Deserve to Be Heard
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join a vibrant community of thinkers, dreamers, and doers. Share
              your ideas anonymously and watch them grow through collective
              wisdom.
            </p>

            <div className="flex justify-center items-center">
              <Link href="/app">
                <button className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg inline-flex items-center gap-2 font-bold">
                  Start Sharing Ideas
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            <div className="flex justify-center gap-20 mt-9 mx-auto">
              <div>
                <div className="text-3xl sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {ideaCount}+
                </div>
                <div className="text-sm text-gray-600 mt-1">Ideas Shared</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {upvoteCount}+
                </div>
                <div className="text-sm text-gray-600 mt-1">Upvotes Cast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Ready to Share Your Next Big Idea?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators who are shaping the future, one idea at
            a time.
          </p>
          <Link href="/app">
            <button className="rounded-lg inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 gap-2 px-8 py-3">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

import { Card } from "@mui/material";
import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

export default function FeatureSection(){
    const features = [
    {
      icon: Lightbulb,
      title: "Share Ideas Freely",
      description: "Express your creativity without barriers. Our anonymous platform encourages honest, innovative thinking."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Let the best ideas rise to the top through community upvoting. Democracy in action."
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate reactions to your ideas. See what resonates with others in real-time."
    },
    {
      icon: TrendingUp,
      title: "Discover Trends",
      description: "Track emerging ideas and popular concepts as they gain momentum in the community."
    }
  ];
    return <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Why Choose IdeaFlow?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for thinkers who want to share, discover, and collaborate on ideas that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-purple-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
}
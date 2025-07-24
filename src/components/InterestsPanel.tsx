import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, TrendingUp, Brain, Activity, Zap, Target } from "lucide-react";

const interests = [
  { name: "Data Engineering", icon: Database, color: "bg-primary text-primary-foreground" },
  { name: "ETL Automation", icon: Zap, color: "bg-success text-success-foreground" },
  { name: "AI Automation", icon: Brain, color: "bg-purple-500 text-white" },
  { name: "Stock Analysis", icon: TrendingUp, color: "bg-blue-500 text-white" },
  { name: "Wellness & Yoga", icon: Activity, color: "bg-green-500 text-white" },
  { name: "Productivity Tools", icon: Target, color: "bg-orange-500 text-white" },
];

const InterestsPanel = () => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-shadow duration-300 bg-gradient-card mb-8 animate-fade-in">
      <CardHeader>
        <CardTitle>My Interests & Expertise</CardTitle>
        <CardDescription>Areas where I blend structure and creativity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={interest.name}
                className="group p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full ${interest.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-sm font-medium">
                    {interest.name}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-accent/50 rounded-xl border border-accent">
          <p className="text-sm text-muted-foreground text-center italic">
            "Blending data science with personal style, I create solutions that are both functional and elegant."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestsPanel;
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsUpdates = () => {
  const news = [
    {
      id: 1,
      title: "EDS Launches Revolutionary AI Diagnostic Platform",
      excerpt: "Our new AI-powered diagnostic system reduces repair time by 40% and improves accuracy in malfunction detection.",
      date: "2024-01-15",
      category: "Innovation",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Expansion to 25 New Service Centers Nationwide",
      excerpt: "EDS continues its growth with new service centers opening across Thailand, bringing expert support closer to customers.",
      date: "2024-01-10",
      category: "Expansion",
      image: "bg-gradient-to-br from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Partnership with Leading Smart Home Brands",
      excerpt: "Strategic partnerships enhance our smart home service capabilities with exclusive access to latest technologies.",
      date: "2024-01-05",
      category: "Partnership",
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Award-Winning Customer Service Excellence",
      excerpt: "EDS receives national recognition for outstanding customer service and innovation in after-service solutions.",
      date: "2023-12-28",
      category: "Awards",
      image: "bg-gradient-to-br from-amber-500 to-orange-500"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">News & Updates</h2>
          <p className="text-xl text-muted-foreground">
            Stay informed about our latest developments and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {news.slice(0, 2).map((article) => (
            <Card key={article.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className={`h-48 ${article.image} relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/90 text-primary">
                  {article.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-light group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.slice(2).map((article) => (
            <Card key={article.id} className="group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDate(article.date)}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-light group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All News
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
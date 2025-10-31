import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
interface InsightCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  href: string;
}
export function InsightCard({ image, title, description, author, date, href }: InsightCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-serif text-balance">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 text-balance">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-gray-500">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <Link to={href} className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="h-6 w-6 text-baara-gold" />
        </Link>
      </CardFooter>
    </Card>
  );
}
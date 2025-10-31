import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  linkedin: string;
}
export function TeamMemberCard({ image, name, title, linkedin }: TeamMemberCardProps) {
  return (
    <Card className="text-center overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-baara-gold/20 transition-colors duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-bold">{name}</h3>
        <p className="text-baara-gold">{title}</p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gray-400 hover:text-baara-gold transition-colors">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn Profile</span>
        </a>
      </CardContent>
    </Card>
  );
}
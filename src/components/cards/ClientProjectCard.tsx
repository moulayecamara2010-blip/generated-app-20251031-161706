import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface ClientProjectCardProps {
  image: string;
  title: string;
  description: string;
}
export function ClientProjectCard({ image, title, description }: ClientProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="aspect-w-16 aspect-h-9">
        <img src={image} alt={title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl font-serif text-balance">{title}</CardTitle>
        <CardContent className="p-0 mt-2 flex-grow">
          <p className="text-gray-600 dark:text-gray-300 text-balance">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
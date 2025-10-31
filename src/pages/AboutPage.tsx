import { aboutContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-baara-dark dark:text-baara-light">
            {aboutContent.title}
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Our Team"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">{aboutContent.mission.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutContent.mission.text}
            </p>
            <h2 className="text-3xl font-serif font-bold pt-4">{aboutContent.vision.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutContent.vision.text}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-center">{aboutContent.values.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center"
              >
                {aboutContent.values.items.map((value) => (
                  <motion.li key={value} variants={fadeIn} className="flex flex-col items-center space-y-2">
                    <CheckCircle className="h-8 w-8 text-baara-gold" />
                    <span className="text-lg font-medium">{value}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
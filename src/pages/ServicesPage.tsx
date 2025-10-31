import { servicesContent } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-baara-dark dark:text-baara-light">
            {servicesContent.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {servicesContent.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {servicesContent.items.map((service, index) => (
            <motion.div key={service.title} variants={fadeIn}>
              <Card className="overflow-hidden bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className={`grid md:grid-cols-2 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 md:p-12 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl font-serif">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center">
                            <Check className="h-5 w-5 text-baara-gold mr-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-200">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="h-64 md:h-full">
                    <img
                      src={`https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&ixid=${index}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
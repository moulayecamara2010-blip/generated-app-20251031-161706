import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Target, Users } from "lucide-react";
import { homeContent } from "@/lib/content";
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
      staggerChildren: 0.2,
    },
  },
};
export function HomePage() {
  const serviceIcons = [<Target />, <Users />, <BarChart />];
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-background pt-16 md:pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-baara-dark dark:text-baara-light text-balance">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 text-balance">
            {homeContent.hero.subheadline}
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-baara-gold text-baara-dark hover:bg-amber-500 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 text-lg px-8 py-6">
              <Link to="/about">{homeContent.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </motion.section>
      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">{homeContent.services.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{homeContent.services.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {homeContent.services.items.map((service, index) => (
            <motion.div key={service.title} variants={fadeIn}>
              <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out bg-card">
                <CardHeader>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-baara-gold text-baara-dark">
                    {serviceIcons[index]}
                  </div>
                  <CardTitle className="mt-4 text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Clients Section */}
      <section className="bg-gray-50 dark:bg-gray-800/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-600 dark:text-gray-300">
            {homeContent.clients.title}
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5"
          >
            {homeContent.clients.logos.map((logo) => (
              <motion.div key={logo} variants={fadeIn} className="col-span-1 flex justify-center items-center">
                <span className="text-xl font-medium text-gray-400 dark:text-gray-500">{logo}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Insights Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">{homeContent.insights.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{homeContent.insights.subtitle}</p>
          <Button asChild variant="link" className="text-baara-gold text-lg hover:text-amber-500">
            <Link to="/insights">
              {homeContent.insights.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
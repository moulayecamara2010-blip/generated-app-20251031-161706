import { motion } from "framer-motion";
import { clientsData } from "@/lib/content";
import { ClientProjectCard } from "@/components/cards/ClientProjectCard";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export function ClientsPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-baara-dark dark:text-baara-light">
            Clients & Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We are proud of the partnerships we've built and the impact we've created together.
          </p>
        </motion.div>
        <section>
          <h2 className="text-center text-3xl font-serif font-bold mb-12">
            Trusted By
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center"
          >
            {clientsData.logos.map((logo) => (
              <motion.div key={logo} variants={fadeIn} className="flex justify-center">
                <span className="text-2xl font-semibold text-gray-400 dark:text-gray-500">{logo}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section>
          <h2 className="text-center text-3xl font-serif font-bold mb-12">
            Project Showcase
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
          >
            {clientsData.projects.map((project) => (
              <motion.div key={project.title} variants={fadeIn}>
                <ClientProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
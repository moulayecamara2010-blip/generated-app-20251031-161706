import { contactContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Toaster, toast } from "sonner";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
export function ContactPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success("Message sent successfully!");
    reset();
  };
  return (
    <>
      <Toaster position="bottom-right" />
      <div className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-baara-dark dark:text-baara-light">
              {contactContent.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {contactContent.subtitle}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-baara-gold mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactContent.details.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-8 w-8 text-baara-gold mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactContent.details.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-8 w-8 text-baara-gold mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactContent.details.email}</p>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.43944913921!2d28.0519086150289!3d-26.14966998346201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95735e58a05f6d%3A0x8d11294a5c63991!2sMaude%20St%2C%20Sandown%2C%20Sandton%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678886456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <Card className="bg-card p-4 sm:p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" type="text" placeholder="Your Name" {...register("name")} />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" rows={5} {...register("message")} />
                      {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-baara-gold text-baara-dark hover:bg-amber-500" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import heroImage from "../../assets/hero.png";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-soft/30">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-24" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-emerald-100">
            <span className="bg-brand-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full">New</span>
            <span className="text-sm font-medium text-slate-600">Advanced Telehealth Support</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl leading-tight">
            Comprehensive <span className="text-brand-primary">Healthcare</span> for Your Family
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Experience world-class medical services with a personalized touch. At Oshine Healthcare, your well-being is our mission.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="px-8 py-4 text-lg">
              Book Appointment <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Play size={18} fill="currentColor" /> Watch Story
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            {["24/7 Support", "Expert Doctors", "Modern Facilities"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <CheckCircle size={16} className="text-brand-primary" /> {item}
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src={heroImage} alt="Oshine Healthcare Team" className="w-full h-auto object-cover aspect-[4/3]" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

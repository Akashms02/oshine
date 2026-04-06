import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Shield, Award, Users } from "lucide-react";
import { Button } from "../ui/Button";

export const About = () => {
  const stats = [
    { label: "Patients Served", value: "50,000+" },
    { label: "Expert Doctors", value: "250+" },
    { label: "Years Experience", value: "15+" },
  ];

  return (
    <section id="about" className="section-padding flex flex-col lg:flex-row gap-20 items-center">
      <div className="flex-1 grid grid-cols-2 gap-4">
        {[HeartPulse, Stethoscope, Shield, Award].map((Icon, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, backgroundColor: "rgb(240 253 250)" }}
            className="p-10 rounded-3xl bg-white shadow-lg border border-slate-100 flex flex-col items-center gap-4 transition-colors text-center"
          >
            <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary">
              <Icon size={40} />
            </div>
            <h4 className="text-xl">Excellence</h4>
            <p className="text-sm text-slate-500">Unmatched medical care standards.</p>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
        <h2 className="text-4xl lg:text-5xl leading-tight">Your Health, Our <span className="text-brand-primary underline decoration-brand-accent">Excellence</span></h2>
        <p className="text-lg text-slate-600">
          Oshine Healthcare is more than just a medical center; it's a sanctuary for well-being. We combine state-of-the-art medical technology with high-touch human care to deliver outcomes that transform lives.
        </p>
        <div className="grid grid-cols-3 gap-8 py-6">
          {stats.map((s) => (
            <div key={s.label}>
              <h3 className="text-2xl text-brand-primary">{s.value}</h3>
              <p className="text-xs font-medium text-slate-400 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-fit">Learn More About Oshine</Button>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    { title: "Primary Care", desc: "Routine checkups and preventive health management.", icon: Users },
    { title: "Diagnostics", desc: "Advanced laboratory testing and imaging services.", icon: Stethoscope },
    { title: "Specialized Surgery", desc: "Precision surgical procedures by top-tier surgeons.", icon: HeartPulse },
    { title: "Cardiology", desc: "Complete heart health and cardiovascular treatments.", icon: HeartPulse },
  ];

  return (
    <section id="services" className="bg-slate-50">
      <div className="section-padding flex flex-col items-center gap-16">
        <div className="max-w-2xl text-center flex flex-col gap-4">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Medical Services</span>
          <h2 className="text-4xl lg:text-5xl leading-tight">Advanced Care for Modern Challenges</h2>
          <p className="text-lg text-slate-500">We offer a wide range of specialized treatments powered by the latest medical innovations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 group"
            >
              <div className="bg-brand-soft p-4 rounded-2xl text-brand-primary w-fit mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-slate-800">{s.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{s.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all">
                Explore <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
        <Button className="px-12 py-4">View All Services</Button>
      </div>
    </section>
  );
};

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding flex flex-col lg:flex-row gap-20">
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl leading-tight">Connect with Our Specialists</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Have questions about your health or our services? Our dedicated support team is ready to assist you 24/7.
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {[
            { icon: Phone, title: "Emergency", value: "+1 (234) 567-890", text: "Available 24/7" },
            { icon: Mail, title: "Email Us", value: "hello@oshine.health", text: "Reply within 2 hours" },
            { icon: MapPin, title: "Our Location", value: "123 Wellness Ave, City", text: "Get Directions" },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-center">
              <div className="bg-brand-primary/10 p-5 rounded-2xl text-brand-primary">
                <item.icon size={28} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.value}</p>
                <a href="#" className="text-brand-primary text-xs font-bold uppercase tracking-wide mt-1 underline decoration-brand-accent decoration-2 underline-offset-4">{item.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        className="flex-1 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100"
      >
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-600 uppercase">First Name</label>
              <input type="text" placeholder="John" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-600 uppercase">Last Name</label>
              <input type="text" placeholder="Doe" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-600 uppercase">Email Address</label>
            <input type="email" placeholder="john@example.com" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-600 uppercase">Message</label>
            <textarea rows="4" placeholder="How can we help?" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none" />
          </div>
          <Button size="lg" className="py-5 text-lg">Send Inquiry</Button>
        </form>
      </motion.div>
    </section>
  );
};

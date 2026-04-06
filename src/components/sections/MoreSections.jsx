import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";

export const Team = () => {
  const specialists = [
    { name: "Dr. Sarah Johnson", role: "Chief Cardiologist", img: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Dr. Michael Chen", role: "Neurosurgeon", img: "https://i.pravatar.cc/150?u=michael" },
    { name: "Dr. Emily Davis", role: "Pediatric Specialist", img: "https://i.pravatar.cc/150?u=emily" },
    { name: "Dr. Robert Wilson", role: "Orthopedic Surgeon", img: "https://i.pravatar.cc/150?u=robert" },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="flex flex-col items-center gap-16">
        <div className="max-w-2xl text-center flex flex-col gap-4">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Medical Experts</span>
          <h2 className="text-4xl lg:text-5xl leading-tight">Meet Our World-Class Specialists</h2>
          <p className="text-lg text-slate-500 leading-relaxed">Our team of dedicated professionals is here to provide you with the best healthcare experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {specialists.map((doc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-6 group"
            >
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-50 shadow-xl group-hover:border-brand-primary transition-all duration-300">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-2 right-2 bg-brand-primary text-white p-2 rounded-full shadow-lg">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-slate-800">{doc.name}</h4>
                <p className="text-brand-primary font-medium">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const testimonials = [
    { text: "Oshine Healthcare provided me with the best care I could have asked for. The staff is exceptional and the technology is state-of-the-art.", author: "Jane Cooper", role: "Patient" },
    { text: "The telehealth service is a game-changer. I was able to consult with a top specialist from the comfort of my home.", author: "Robert Smith", role: "Patient" },
    { text: "Truly compassionate care. They didn't just treat my symptoms; they cared for my overall well-being. Highly recommended.", author: "Alice Johnson", role: "Patient" },
  ];

  return (
    <section id="testimonials" className="bg-brand-primary py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6 text-white lg:pr-12">
          <Quote size={60} className="text-brand-accent/50 mb-4" />
          <h2 className="text-4xl lg:text-5xl leading-tight">What Our Patients Say</h2>
          <p className="text-slate-200 text-lg">Real stories from people whose lives were changed by our community-focused healthcare.</p>
          <div className="flex gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="#fbbf24" stroke="none" />)}
            <span className="ml-3 font-bold">5.0 / 5.0 Rating</span>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col justify-between"
            >
              <p className="text-lg text-slate-600 italic leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 bg-slate-200 rounded-full" />
                <div>
                  <h5 className="font-bold text-slate-800">{t.author}</h5>
                  <p className="text-sm text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

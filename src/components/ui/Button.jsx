import { motion } from "framer-motion";

export const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-emerald-800 shadow-md",
    secondary: "bg-brand-secondary text-white hover:bg-teal-600 shadow-md",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-emerald-50",
    ghost: "text-brand-primary hover:bg-emerald-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

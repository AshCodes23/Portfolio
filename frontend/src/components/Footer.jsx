const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex-shrink-0 font-bold text-xl tracking-tighter mb-4">
          <span className="text-slate-100">&lt;</span>
          <span className="gradient-text">dev</span>
          <span className="text-slate-100">/&gt;</span>
        </div>
        
        <p className="text-slate-400 text-sm mb-2 text-center">
          Crafted with React, Tailwind CSS, & ☕
        </p>
        <p className="text-slate-500 text-xs text-center">
          &copy; {new Date().getFullYear()} Ashmit Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

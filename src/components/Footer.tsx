const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kalilur Rahman. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/kalilurrahman/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/kalilurrahman" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.kaggle.com/kalilurrahman" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Kaggle</a>
          <a href="mailto:kalilur.rahman@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

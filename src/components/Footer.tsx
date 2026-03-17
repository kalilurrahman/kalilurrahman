const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © Kalilur Rahman. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <a
            href="https://kalilur-portfolio.lovable.app"
            className="text-xs font-medium text-primary hover:text-accent transition-colors"
          >
            All KR apps →
          </a>
          <span className="text-muted-foreground opacity-50 block md:inline hidden">|</span>
          <a
            href="https://www.linkedin.com/in/kalilurrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kalilurrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.kaggle.com/kalilurrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Kaggle
          </a>
          <a
            href="mailto:rahman.kalilur@outlook.com"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

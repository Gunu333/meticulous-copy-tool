const Footer = () => {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-text-secondary text-sm mb-6">Brought to you by</p>
        
        {/* ChaiCode Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">🍵</span>
          </div>
          <span className="text-text-primary font-bold text-2xl">ChaiCode</span>
        </div>
        
        <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
          Chai aur Code is an unique initiative by Hitesh Choudhary where he mentors people who want to learn programming and grow in the field.
        </p>
        
        <div className="mb-8">
          <a 
            href="#" 
            className="text-orange-primary hover:text-orange-secondary transition-colors font-medium"
          >
            Learn about ChaiCode
          </a>
        </div>
        
        {/* Footer Links */}
        <div className="flex items-center justify-center gap-8 text-text-secondary text-sm">
          <a href="#" className="hover:text-orange-primary transition-colors flex items-center gap-2">
            <span>🤝</span>
            Contribute
          </a>
          <a href="#" className="hover:text-orange-primary transition-colors flex items-center gap-2">
            <span>👥</span>
            Community
          </a>
          <a href="#" className="hover:text-orange-primary transition-colors flex items-center gap-2">
            <span>❤️</span>
            Sponsor
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
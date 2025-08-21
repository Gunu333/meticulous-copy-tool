const CodeGlass = () => {
  return (
    <div className="relative">
      {/* Glass Container */}
      <div className="relative w-48 h-72 mx-auto">
        {/* Glass outline */}
        <svg 
          viewBox="0 0 120 180" 
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glass shape */}
          <path
            d="M25 20 C25 15, 30 10, 35 10 L85 10 C90 10, 95 15, 95 20 L85 160 C85 165, 80 170, 75 170 L45 170 C40 170, 35 165, 35 160 Z"
            stroke="white"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-lg"
          />
          
          {/* Liquid */}
          <path
            d="M30 25 L90 25 L82 155 C82 160, 78 163, 73 163 L47 163 C42 163, 38 160, 38 155 Z"
            fill="hsl(var(--orange-primary))"
            className="animate-pulse"
          />
          
          {/* Glass rim */}
          <ellipse
            cx="60"
            cy="20"
            rx="30"
            ry="4"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        
        {/* Code symbols */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-navy-dark text-2xl font-bold">
            &lt;/&gt;
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-8 -left-4 w-2 h-2 bg-orange-primary rounded-full animate-bounce delay-100"></div>
            <div className="absolute -top-12 right-2 w-1.5 h-1.5 bg-orange-secondary rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-8 -right-6 w-2 h-2 bg-orange-primary rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGlass;
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Subtle radial gradient background effect */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      
      {/* Main content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/a3fe7d9f-e534-45a6-9a2d-32d6ef92482a.png"
            alt="Logo"
            className="w-32 h-32 mx-auto glow-effect pulse-glow"
          />
        </div>

        {/* Main text */}
        <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 tracking-wider">
          PÁGINA BAJO
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-8">
          CONSTRUCCIÓN
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          Estamos trabajando para ofrecerte algo increíble
        </p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-t from-primary to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Index;
import React, { useEffect, useState } from "react";
import { ExternalLink, X, Code, Star, Clock, CheckCircle } from "lucide-react";

const FiverrWidget = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "fiverr-seller-widget-script-5b9462e7-39ec-4514-ba1f-6e80556b612a";
    script.src = "https://widgets.fiverr.com/api/v1/seller/adnanhasib565?widget_id=5b9462e7-39ec-4514-ba1f-6e80556b612a";
    script.async = true;
    script.defer = true;

    script.onload = () => setScriptLoaded(true);
    script.onerror = () => console.error("Failed to load Fiverr script.");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-bounce-subtle">
      <div 
        className="bg-gradient-to-br from-green-400 to-blue-500 p-0.5 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-80">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={16} />
          </button>

          {scriptLoaded ? (
            <a
              href="https://www.fiverr.com/adnanhasib565"
              target="_blank"
              rel="nofollow"
              className="block"
            >
              <div
                className="fiverr-seller-content"
                id="fiverr-seller-widget-content-5b9462e7-39ec-4514-ba1f-6e80556b612a"
                itemprop="contentURL"
              />
            </a>
          ) : (
            <a
              href="https://www.fiverr.com/adnanhasib565"
              target="_blank"
              rel="nofollow"
              className="block space-y-4"
            >
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <img 
                    src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/bf017bb1819e121a06c88315963bd3cf-1735193832150/9f6d4648-90cf-4bfe-b424-31bebb2bb72f.png" 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full ring-2 ring-white"
                  />
                </div>
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  PRO
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="font-bold text-xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Full-Stack Developer
                </h3>
                
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { icon: Clock, text: "Fast Delivery" },
                    { icon: CheckCircle, text: "Top Rated" },
                    { icon: Code, text: "Clean Code" },
                    { icon: Star, text: "5.0 Rating" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-300">
                      <item.icon size={14} className="text-green-500" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <button className={`
                  w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2
                  transition-all duration-300 transform
                  ${isHovered 
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white translate-y-0'
                    : 'bg-gradient-to-r from-green-400 to-blue-500 text-white translate-y-0 hover:-translate-y-1'
                  }
                `}>
                  <span>Hire Me Now</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiverrWidget;
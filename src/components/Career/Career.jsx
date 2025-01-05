import React, { useState, useEffect } from "react";
import { Code, Briefcase, Rocket } from "lucide-react"; 
import { Card, CardContent } from "../ui/card";

const Career = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight);
    };

    const handleScroll = () => setScrollY(window.scrollY);

    updateDimensions();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const isElementVisible = (offsetTop) => scrollY + viewportHeight > offsetTop;

  return (
    <div className="bg-gray-50 relative">
      {/* Main Content */}
      <div className="relative pt-24">
        {/* Header */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">My Career Journey</h1>
            <p className="text-gray-600">
              Scroll down to see how I've grown and evolved
            </p>
          </div>
        </div>

        {/* Content sections */}
        {Array.from({ length: 6 }).map((_, index) => {
          const isLeft = index % 2 === 0;
          const offsetTop = (viewportHeight + index * 300);
          const isVisible = isElementVisible(offsetTop);

          return (
            <div
              key={index}
              className={`flex justify-${isLeft ? "start" : "end"} px-12 my-32`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? "0" : "50px"})`,
                transition: "all 0.8s ease-out",
              }}
            >
              <div className={`w-1/3 ${isLeft ? "ml-12" : "mr-12"}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-blue-500 text-white">
                        {index % 3 === 0 ? (
                          <Code />
                        ) : index % 3 === 1 ? (
                          <Briefcase />
                        ) : (
                          <Rocket />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Growth Point {index + 1}
                        </h3>
                        <p className="text-gray-600 mt-2">
                          {index % 2 === 0
                            ? "Mastering new technologies and expanding skill set"
                            : "Leading projects and delivering innovative solutions"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Career;

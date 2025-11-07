import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CropForm from "@/components/CropForm";
import CropRecommendations from "@/components/CropRecommendations";
import Footer from "@/components/Footer";
import videoBg from "@/assets/videoplayback.mp4"; // ✅ Video

const Index = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setShowRecommendations(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <Header />
      <main>
        <Hero />
        <Features />
        <section
          id="recommendations"
          className="py-20 bg-gradient-to-b from-secondary/20 to-background"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {!showRecommendations ? (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Get Your
                    <span className="bg-gradient-to-r from-green-300 to-lime-400 bg-clip-text text-transparent">
                      {" "}
                      Crop Recommendations
                    </span>
                  </h2>
                  <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    Share your farm details and get AI-powered crop
                    recommendations tailored for India’s agricultural
                    conditions.
                  </p>
                </div>
                <CropForm onSubmit={handleFormSubmit} />
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <button
                    onClick={() => setShowRecommendations(false)}
                    className="text-green-400 hover:text-green-300 transition-all duration-300 mb-4"
                  >
                    ← Back to Form
                  </button>
                </div>
                <CropRecommendations formData={formData} />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
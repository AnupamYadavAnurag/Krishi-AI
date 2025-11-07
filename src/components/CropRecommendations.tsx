import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Droplets, 
  Shield, 
  Sprout,
  Star,
  AlertTriangle,
  FlaskConical,
  Bug,
  HeartPulse, // For medical solutions
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

// Extended interface with more detailed disease info
interface CropRecommendation {
  id: string;
  name: string;
  confidence: number;
  expectedYield: string;
  profitability: string;
  season: string;
  waterRequirement: string;
  riskLevel: "low" | "medium" | "high";
  marketPrice: string;
  growthPeriod: string;
  suitabilityScore: number;
  pros: string[];
  cons: string[];
  soilSuitability: { type: string[]; phRange: [number, number]; nutrientRequirement: string; };
  commonDiseases: { name: string; symptoms: string; prevention: string; medicalSolution: string; }[];
}

// Static crop database with 15 entries
const cropDatabase: CropRecommendation[] = [
  // Existing 5 crops
  { id: "1", name: "Rice (Paddy)", confidence: 0, expectedYield: "45-55 quintals/hectare", profitability: "₹35,000-45,000 per hectare", season: "Kharif", waterRequirement: "High", riskLevel: "low", marketPrice: "₹1,800-2,200 per quintal", growthPeriod: "120-150 days", suitabilityScore: 0, pros: ["High local demand", "Government MSP support"], cons: ["High water requirement"],
    soilSuitability: { type: ["alluvial", "clayey", "loamy"], phRange: [5.5, 6.5], nutrientRequirement: "High Nitrogen" },
    commonDiseases: [
      { name: "Rice Blast", symptoms: "Spindle-shaped spots on leaves, rotting neck nodes.", prevention: "Use resistant varieties, manage nitrogen levels.", medicalSolution: "Fungicides like Tricyclazole or Kasugamycin." },
      { name: "Bacterial Blight", symptoms: "Yellowing leaves with wavy margins, wilting.", prevention: "Avoid waterlogging, use certified seeds.", medicalSolution: "Bactericides containing copper compounds." },
    ]
  },
  { id: "2", name: "Maize (Corn)", confidence: 0, expectedYield: "55-70 quintals/hectare", profitability: "₹40,000-55,000 per hectare", season: "Kharif/Rabi", waterRequirement: "Medium", riskLevel: "medium", marketPrice: "₹1,400-1,800 per quintal", growthPeriod: "90-120 days", suitabilityScore: 0, pros: ["Good market demand", "Multiple seasons"], cons: ["Price volatility"],
    soilSuitability: { type: ["sandy loam", "loamy", "black"], phRange: [5.5, 7.5], nutrientRequirement: "High Nitrogen & Phosphorus" },
    commonDiseases: [
      { name: "Downy Mildew", symptoms: "White, fuzzy growth on leaves, stunted growth.", prevention: "Remove infected plants, proper drainage.", medicalSolution: "Fungicides like Metalaxyl or Mancozeb." },
      { name: "Rust", symptoms: "Reddish-brown pustules on leaves.", prevention: "Plant resistant hybrids, crop rotation.", medicalSolution: "Azoxystrobin or Propiconazole based fungicides." },
    ]
  },
  { id: "3", name: "Wheat", confidence: 0, expectedYield: "40-60 quintals/hectare", profitability: "₹35,000-50,000 per hectare", season: "Rabi", waterRequirement: "Medium", riskLevel: "low", marketPrice: "₹2,100-2,500 per quintal", growthPeriod: "120-150 days", suitabilityScore: 0, pros: ["High consumption", "Stable MSP"], cons: ["Requires cool climate"],
    soilSuitability: { type: ["loamy", "black", "sandy loam"], phRange: [6.0, 7.0], nutrientRequirement: "High Potassium" },
    commonDiseases: [
      { name: "Yellow Rust", symptoms: "Yellow stripes on leaves that form powdery spores.", prevention: "Plant rust-resistant varieties.", medicalSolution: "Fungicides like Tebuconazole or Propiconazole." },
    ]
  },
  { id: "4", name: "Cotton", confidence: 0, expectedYield: "15-25 quintals/hectare", profitability: "₹45,000-55,000 per hectare", season: "Kharif", waterRequirement: "Medium", riskLevel: "medium", marketPrice: "₹6,000-7,000 per quintal", growthPeriod: "150-180 days", suitabilityScore: 0, pros: ["Good for black soil", "Strong export market"], cons: ["Pest sensitive"],
    soilSuitability: { type: ["black", "clayey", "red"], phRange: [6.0, 7.5], nutrientRequirement: "Balanced" },
    commonDiseases: [
      { name: "Boll Rot", symptoms: "Water-soaked lesions on bolls that turn brown/black.", prevention: "Adequate spacing, proper irrigation.", medicalSolution: "Fungicides like Copper Oxychloride." },
    ]
  },
  { id: "5", name: "Soyabean", confidence: 0, expectedYield: "15-25 quintals/hectare", profitability: "₹25,000-35,000 per hectare", season: "Kharif", waterRequirement: "Medium", riskLevel: "medium", marketPrice: "₹3,500-4,200 per quintal", growthPeriod: "95-125 days", suitabilityScore: 0, pros: ["Nitrogen fixing", "Export potential"], cons: ["Weather dependent"],
    soilSuitability: { type: ["sandy loam", "clayey", "loamy"], phRange: [6.0, 7.5], nutrientRequirement: "Low Nitrogen" },
    commonDiseases: [
      { name: "Soyabean Rust", symptoms: "Small, reddish-brown spots on leaves that turn into pustules.", prevention: "Early planting, use resistant varieties.", medicalSolution: "Fungicides like Azoxystrobin." },
    ]
  },
  // 10 new crops added below
  { id: "6", name: "Sugarcane", confidence: 0, expectedYield: "70-90 tonnes/hectare", profitability: "₹60,000-80,000 per hectare", season: "Kharif", waterRequirement: "High", riskLevel: "medium", marketPrice: "₹2,800-3,200 per quintal", growthPeriod: "300-360 days", suitabilityScore: 0, pros: ["High profit margin", "High demand"], cons: ["Long growth period", "Requires heavy irrigation"],
    soilSuitability: { type: ["loamy", "clayey", "black"], phRange: [6.5, 7.5], nutrientRequirement: "High Potassium" },
    commonDiseases: [
      { name: "Red Rot", symptoms: "Reddening of inner stalk with sour smell.", prevention: "Use resistant varieties, hot water treatment of sets.", medicalSolution: "No chemical control; remove and destroy infected clumps." },
    ]
  },
  { id: "7", name: "Potato", confidence: 0, expectedYield: "250-350 quintals/hectare", profitability: "₹50,000-70,000 per hectare", season: "Rabi", waterRequirement: "Medium", riskLevel: "medium", marketPrice: "₹1,200-1,600 per quintal", growthPeriod: "90-120 days", suitabilityScore: 0, pros: ["High yield in short time", "Staple food"], cons: ["Susceptible to frost", "Requires proper storage"],
    soilSuitability: { type: ["sandy loam", "loamy"], phRange: [5.0, 6.0], nutrientRequirement: "High Phosphorus & Potassium" },
    commonDiseases: [
      { name: "Late Blight", symptoms: "Dark, water-soaked spots on leaves and stems.", prevention: "Use certified seed, proper hilling.", medicalSolution: "Fungicides like Mancozeb or Chlorothalonil." },
    ]
  },
  { id: "8", name: "Jowar (Sorghum)", confidence: 0, expectedYield: "30-45 quintals/hectare", profitability: "₹20,000-30,000 per hectare", season: "Kharif", waterRequirement: "Low", riskLevel: "low", marketPrice: "₹1,800-2,000 per quintal", growthPeriod: "100-120 days", suitabilityScore: 0, pros: ["Drought resistant", "Good for livestock feed"], cons: ["Lower market price than rice/wheat"],
    soilSuitability: { type: ["sandy", "loamy", "black"], phRange: [6.0, 8.5], nutrientRequirement: "Low" },
    commonDiseases: [
      { name: "Head Smut", symptoms: "Galls on the grain head filled with black spores.", prevention: "Use treated seeds.", medicalSolution: "Fungicide seed treatments." },
    ]
  },
  { id: "9", name: "Bajra (Pearl Millet)", confidence: 0, expectedYield: "20-30 quintals/hectare", profitability: "₹18,000-25,000 per hectare", season: "Kharif", waterRequirement: "Low", riskLevel: "low", marketPrice: "₹1,600-1,900 per quintal", growthPeriod: "80-100 days", suitabilityScore: 0, pros: ["Extremely drought tolerant", "Grows on poor soils"], cons: ["Lower yield"],
    soilSuitability: { type: ["sandy", "loamy", "red"], phRange: [6.0, 8.0], nutrientRequirement: "Low" },
    commonDiseases: [
      { name: "Downy Mildew", symptoms: "Whitish growth on leaves, twisted and malformed heads.", prevention: "Use resistant varieties, crop rotation.", medicalSolution: "Metalaxyl fungicides." },
    ]
  },
  { id: "10", name: "Gram (Chickpea)", confidence: 0, expectedYield: "15-20 quintals/hectare", profitability: "₹30,000-40,000 per hectare", season: "Rabi", waterRequirement: "Low", riskLevel: "medium", marketPrice: "₹5,000-5,500 per quintal", growthPeriod: "100-110 days", suitabilityScore: 0, pros: ["Fixes soil nitrogen", "High market value"], cons: ["Sensitive to frost and waterlogging"],
    soilSuitability: { type: ["sandy loam", "loamy", "black"], phRange: [6.0, 7.5], nutrientRequirement: "Low Nitrogen" },
    commonDiseases: [
      { name: "Wilt", symptoms: "Sudden drooping and drying of plants.", prevention: "Crop rotation, use resistant varieties.", medicalSolution: "Trichoderma viride seed treatment." },
    ]
  },
  { id: "11", name: "Mustard", confidence: 0, expectedYield: "15-25 quintals/hectare", profitability: "₹40,000-50,000 per hectare", season: "Rabi", waterRequirement: "Low", riskLevel: "low", marketPrice: "₹4,500-5,200 per quintal", growthPeriod: "120-140 days", suitabilityScore: 0, pros: ["High oil content", "Low water needs"], cons: ["Susceptible to aphids"],
    soilSuitability: { type: ["sandy loam", "loamy"], phRange: [6.0, 7.5], nutrientRequirement: "Medium" },
    commonDiseases: [
      { name: "White Rust", symptoms: "White pustules on leaves, stems and flower parts.", prevention: "Proper spacing, field sanitation.", medicalSolution: "Metalaxyl-M or Mancozeb fungicides." },
    ]
  },
  { id: "12", name: "Tomato", confidence: 0, expectedYield: "400-600 quintals/hectare", profitability: "₹80,000-1,20,000 per hectare", season: "Kharif/Rabi", waterRequirement: "Medium", riskLevel: "high", marketPrice: "₹1,500-2,500 per quintal", growthPeriod: "90-120 days", suitabilityScore: 0, pros: ["High profitability", "High demand"], cons: ["Very susceptible to diseases", "Requires frequent care"],
    soilSuitability: { type: ["sandy loam", "loamy"], phRange: [6.0, 7.0], nutrientRequirement: "High Potassium" },
    commonDiseases: [
      { name: "Early Blight", symptoms: "Dark, concentric spots on older leaves.", prevention: "Crop rotation, remove infected leaves.", medicalSolution: "Chlorothalonil or Mancozeb fungicides." },
      { name: "Tomato Leaf Curl Virus", symptoms: "Curling and yellowing of young leaves.", prevention: "Control whiteflies, remove infected plants.", medicalSolution: "No cure; manage vector with insecticides." },
    ]
  },
  { id: "13", name: "Onion", confidence: 0, expectedYield: "250-350 quintals/hectare", profitability: "₹60,000-80,000 per hectare", season: "Rabi", waterRequirement: "Medium", riskLevel: "medium", marketPrice: "₹1,000-1,800 per quintal", growthPeriod: "100-120 days", suitabilityScore: 0, pros: ["High profit margin", "Long shelf life"], cons: ["Vulnerable to fungal diseases"],
    soilSuitability: { type: ["sandy loam", "loamy"], phRange: [6.0, 7.5], nutrientRequirement: "High Phosphorus & Potassium" },
    commonDiseases: [
      { name: "Purple Blotch", symptoms: "Small, purple spots with yellow halos on leaves.", prevention: "Proper spacing, good drainage.", medicalSolution: "Propineb or Mancozeb fungicides." },
    ]
  },
  { id: "14", name: "Cabbage", confidence: 0, expectedYield: "300-400 quintals/hectare", profitability: "₹30,000-45,000 per hectare", season: "Rabi", waterRequirement: "Medium", riskLevel: "low", marketPrice: "₹800-1,200 per quintal", growthPeriod: "60-80 days", suitabilityScore: 0, pros: ["Quick harvest", "High yield"], cons: ["Short shelf life"],
    soilSuitability: { type: ["loamy", "clayey loam"], phRange: [6.0, 6.5], nutrientRequirement: "High Nitrogen" },
    commonDiseases: [
      { name: "Black Rot", symptoms: "V-shaped yellow lesions on leaf margins.", prevention: "Crop rotation, use disease-free seeds.", medicalSolution: "No chemical cure; manage with copper sprays." },
    ]
  },
  { id: "15", name: "Lentil", confidence: 0, expectedYield: "12-18 quintals/hectare", profitability: "₹25,000-35,000 per hectare", season: "Rabi", waterRequirement: "Low", riskLevel: "low", marketPrice: "₹4,500-5,000 per quintal", growthPeriod: "100-110 days", suitabilityScore: 0, pros: ["Nitrogen fixing", "Drought tolerant"], cons: ["Low yield"],
    soilSuitability: { type: ["sandy loam", "loamy", "clayey loam"], phRange: [6.0, 8.0], nutrientRequirement: "Low" },
    commonDiseases: [
      { name: "Rust", symptoms: "Reddish-orange pustules on leaves, stems and pods.", prevention: "Use resistant varieties, clean field debris.", medicalSolution: "Chlorothalonil or Mancozeb fungicides." },
    ]
  },
];

// Calculate suitability score with added features
function calculateSuitability(crop: CropRecommendation, formData: any) {
  let score = 50; // base score

  if (!formData) return score;

  // Existing logic
  if (formData.season && crop.season.toLowerCase().includes(formData.season.toLowerCase())) score += 20;
  if (formData.temperature >= 20 && formData.temperature <= 35) score += 10;
  if (formData.rainfall && crop.waterRequirement === "High" && formData.rainfall >= 1000) score += 10;
  if (formData.rainfall && crop.waterRequirement === "Medium" && formData.rainfall >= 500 && formData.rainfall <= 900) score += 10;
  if (formData.rainfall && crop.waterRequirement === "Low" && formData.rainfall <= 500) score += 10;

  // New logic for Soil Analysis
  if (formData.soilType && crop.soilSuitability.type.includes(formData.soilType.toLowerCase())) {
    score += 15;
  }
  if (formData.soilPH && formData.soilPH >= crop.soilSuitability.phRange[0] && formData.soilPH <= crop.soilSuitability.phRange[1]) {
    score += 15;
  }
  
  // A more advanced system would use real-time weather and humidity data to
  // predict disease risk, but for this example, we'll keep the scoring simple.
  
  return Math.min(score, 100);
}

// Generate top 3 recommendations
function generateRecommendations(formData: any): CropRecommendation[] {
  const scoredCrops = cropDatabase.map(crop => ({
    ...crop,
    suitabilityScore: calculateSuitability(crop, formData),
    confidence: calculateSuitability(crop, formData),
  }));

  scoredCrops.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
  return scoredCrops.slice(0, 3);
}

const CropRecommendations = ({ formData }: { formData: any }) => {
  if (!formData) {
    return <p className="text-center text-gray-500">Please fill the farm form to see recommendations.</p>;
  }

  const recommendations = generateRecommendations(formData);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Analysis Summary */}
      <Card className="shadow-primary">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            AI Analysis Results
          </CardTitle>
          <CardDescription>
            Based on your farm data from {formData.location || "your"} district, {formData.season || "this"} season
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-foreground">Farm Analysis Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soil Type:</span>
                  <span className="font-medium capitalize">{formData.soilType || "Not specified"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soil pH:</span>
                  <span className="font-medium">{formData.soilPH || "Not specified"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperature:</span>
                  <span className="font-medium">{formData.temperature || "-" }°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Rainfall:</span>
                  <span className="font-medium">{formData.rainfall || "-"}mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Farm Size:</span>
                  <span className="font-medium">{formData.farmSize || "-"} acres</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img src={dashboardImage} alt="Dashboard" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crop Recommendations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Recommended Crops for Your Farm</h2>
        {recommendations.length === 0 ? (
          <p className="text-gray-500">No recommendations available for the given data.</p>
        ) : (
          <div className="grid gap-6">
            {recommendations.map((crop, index) => (
              <Card key={crop.id} className={`shadow-soft hover:shadow-primary transition-smooth ${index === 0 ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">{crop.name}</CardTitle>
                        {index === 0 && (
                          <Badge className="bg-gradient-hero text-white">
                            <Star className="h-3 w-3 mr-1" />
                            Best Match
                          </Badge>
                        )}
                        <Badge variant="outline" className={getRiskColor(crop.riskLevel)}>
                          {crop.riskLevel} risk
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {crop.confidence}% Match
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {crop.growthPeriod}
                        </span>
                        <span className="flex items-center gap-1">
                          <Droplets className="h-4 w-4" />
                          {crop.waterRequirement}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gradient-success/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-sm">Expected Yield</span>
                      </div>
                      <p className="text-lg font-bold text-foreground">{crop.expectedYield}</p>
                    </div>
                    <div className="p-4 bg-gradient-hero/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-medium text-sm">Profitability</span>
                      </div>
                      <p className="text-lg font-bold text-foreground">{crop.profitability}</p>
                    </div>
                    <div className="p-4 bg-gradient-earth/10 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-orange-600" />
                        <span className="font-medium text-sm">Market Price</span>
                      </div>
                      <p className="text-lg font-bold text-foreground">{crop.marketPrice}</p>
                    </div>
                  </div>

                  {/* New Section: Detailed Soil Analysis */}
                  <Card className="bg-gradient-earth/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <FlaskConical className="h-5 w-5" />
                        Detailed Soil Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <p>
                        <span className="font-semibold">Optimal Soil Type:</span> {crop.soilSuitability.type.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
                      </p>
                      <p>
                        <span className="font-semibold">Ideal pH Range:</span> {crop.soilSuitability.phRange.join(" - ")}
                      </p>
                      <p>
                        <span className="font-semibold">Nutrient Requirement:</span> {crop.soilSuitability.nutrientRequirement}
                      </p>
                    </CardContent>
                  </Card>

                  {/* New Section: Disease Prediction & Management */}
                  <Card className="bg-gradient-danger/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <Bug className="h-5 w-5" />
                        Predicted Crop Diseases & Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-4">
                      {crop.commonDiseases.map((disease, idx) => (
                        <div key={idx} className="space-y-2">
                          <p className="font-semibold text-base flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            {disease.name}
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li><span className="font-medium text-foreground">Symptoms:</span> {disease.symptoms}</li>
                            <li><span className="font-medium text-foreground">Prevention:</span> {disease.prevention}</li>
                          </ul>
                          {/* Medical Solution Box */}
                          <div className="mt-2 p-3 bg-white/50 rounded-lg border border-red-200 flex items-start gap-2">
                            <HeartPulse className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <h5 className="font-bold text-red-600">AI Suggested Medical Solution:</h5>
                              <p className="text-xs text-foreground mt-1">{disease.medicalSolution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-green-700 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {crop.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-orange-700 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Considerations
                      </h4>
                      <ul className="space-y-1">
                        {crop.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="hero" size="lg">Get Detailed Plan</Button>
                    <Button variant="outline" size="lg">Compare with Others</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CropRecommendations;
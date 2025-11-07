import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Thermometer, Droplets, Calendar, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const CropForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    location: "",
    customLocation: "",
    soilType: "",
    soilPH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    rainfall: "",
    season: "",
    farmSize: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const requiredFields = ["location", "soilType", "season", "soilPH", "temperature", "rainfall"];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.location === "others" && !formData.customLocation.trim()) {
      newErrors.customLocation = "Please specify your location";
    }

    // Additional numeric validation
    const ph = parseFloat(formData.soilPH);
    if (formData.soilPH && (ph < 0 || ph > 14)) newErrors.soilPH = "pH must be between 0 and 14";

    const humidity = parseFloat(formData.humidity);
    if (formData.humidity && (humidity < 0 || humidity > 100))
      newErrors.humidity = "Humidity must be between 0 and 100";

    const temp = parseFloat(formData.temperature);
    if (formData.temperature && (temp < -10 || temp > 60))
      newErrors.temperature = "Temperature should be realistic (-10°C to 60°C)";

    const rainfall = parseFloat(formData.rainfall);
    if (formData.rainfall && rainfall < 0)
      newErrors.rainfall = "Rainfall cannot be negative";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const finalData = {
      ...formData,
      location: formData.location === "others" ? formData.customLocation : formData.location,
    };

    onSubmit(finalData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleReset = () => {
    setFormData({
      location: "",
      customLocation: "",
      soilType: "",
      soilPH: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      temperature: "",
      humidity: "",
      rainfall: "",
      season: "",
      farmSize: "",
      additionalInfo: "",
    });
    setErrors({});
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-primary">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl flex items-center gap-2 justify-center">
          <MapPin className="h-6 w-6 text-primary" />
          Farm Analysis Input
        </CardTitle>
        <CardDescription className="text-base">
          Provide your farm details for personalized AI crop recommendations
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Location & Season */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                District/Location <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) => handleInputChange("location", value)}
                value={formData.location}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your district" />
                </SelectTrigger>
                <SelectContent>
                  {/* Jharkhand */}
                  <SelectItem value="ranchi">Ranchi, Jharkhand</SelectItem>
                  <SelectItem value="dhanbad">Dhanbad, Jharkhand</SelectItem>
                  <SelectItem value="bokaro">Bokaro, Jharkhand</SelectItem>
                  {/* Maharashtra */}
                  <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                  <SelectItem value="nagpur">Nagpur, Maharashtra</SelectItem>
                  {/* Uttar Pradesh */}
                  <SelectItem value="lucknow">Lucknow, Uttar Pradesh</SelectItem>
                  <SelectItem value="kanpur">Kanpur, Uttar Pradesh</SelectItem>
                  {/* Punjab */}
                  <SelectItem value="ludhiana">Ludhiana, Punjab</SelectItem>
                  <SelectItem value="amritsar">Amritsar, Punjab</SelectItem>
                  {/* Tamil Nadu */}
                  <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                  <SelectItem value="coimbatore">Coimbatore, Tamil Nadu</SelectItem>
                  {/* Karnataka */}
                  <SelectItem value="bengaluru">Bengaluru, Karnataka</SelectItem>
                  <SelectItem value="mysuru">Mysuru, Karnataka</SelectItem>
                  {/* Delhi */}
                  <SelectItem value="newdelhi">New Delhi</SelectItem>
                  {/* Gujarat */}
                  <SelectItem value="ahmedabad">Ahmedabad, Gujarat</SelectItem>
                  <SelectItem value="surat">Surat, Gujarat</SelectItem>
                  {/* West Bengal */}
                  <SelectItem value="kolkata">Kolkata, West Bengal</SelectItem>
                  <SelectItem value="darjeeling">Darjeeling, West Bengal</SelectItem>
                  {/* Others */}
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>

              {/* Show custom input when "Others" selected */}
              {formData.location === "others" && (
                <div className="mt-2">
                  <Input
                    placeholder="Enter your district or location"
                    value={formData.customLocation}
                    onChange={(e) => handleInputChange("customLocation", e.target.value)}
                  />
                  {errors.customLocation && (
                    <p className="text-red-500 text-sm">{errors.customLocation}</p>
                  )}
                </div>
              )}
              {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
            </div>

            {/* Season */}
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Season <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) => handleInputChange("season", value)}
                value={formData.season}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select farming season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                  <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                  <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                </SelectContent>
              </Select>
              {errors.season && <p className="text-red-500 text-sm">{errors.season}</p>}
            </div>
          </div>

          {/* Soil Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Droplets className="h-5 w-5 text-primary" />
              Soil Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Soil Type <span className="text-red-500">*</span></Label>
                <Select
                  onValueChange={(value) => handleInputChange("soilType", value)}
                  value={formData.soilType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alluvial">Alluvial</SelectItem>
                    <SelectItem value="black">Black/Regur</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="laterite">Laterite</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                  </SelectContent>
                </Select>
                {errors.soilType && <p className="text-red-500 text-sm">{errors.soilType}</p>}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Soil pH Level
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>Ideal pH for most crops is 6.0 – 7.5</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="soilPH"
                  type="number"
                  step="0.1"
                  min="0"
                  max="14"
                  placeholder="e.g., 6.5"
                  value={formData.soilPH}
                  onChange={(e) => handleInputChange("soilPH", e.target.value)}
                />
                {errors.soilPH && <p className="text-red-500 text-sm">{errors.soilPH}</p>}
              </div>

              <div className="space-y-2">
                <Label>Farm Size (acres)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 5"
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange("farmSize", e.target.value)}
                />
              </div>
            </div>
          </div>
          
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nitrogen">Nitrogen (kg/ha)</Label>
                <Input
                  id="nitrogen"
                  type="number"
                  placeholder="e.g., 240"
                  value={formData.nitrogen}
                  onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phosphorus">Phosphorus (kg/ha)</Label>
                <Input
                  id="phosphorus"
                  type="number"
                  placeholder="e.g., 60"
                  value={formData.phosphorus}
                  onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="potassium">Potassium (kg/ha)</Label>
                <Input
                  id="potassium"
                  type="number"
                  placeholder="e.g., 40"
                  value={formData.potassium}
                  onChange={(e) => handleInputChange("potassium", e.target.value)}
                />
              </div>
            </div>
          
          {/* Weather Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-primary" />
              Weather Conditions
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Avg Temperature (°C) <span className="text-red-500">*</span></Label>
                <Input
                  type="number"
                  placeholder="e.g., 25"
                  value={formData.temperature}
                  onChange={(e) => handleInputChange("temperature", e.target.value)}
                />
                {errors.temperature && <p className="text-red-500 text-sm">{errors.temperature}</p>}
              </div>

              <div className="space-y-2">
                <Label>Humidity (%)</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g., 75"
                  value={formData.humidity}
                  onChange={(e) => handleInputChange("humidity", e.target.value)}
                />
                {errors.humidity && <p className="text-red-500 text-sm">{errors.humidity}</p>}
              </div>

              <div className="space-y-2">
                <Label>Expected Rainfall (mm) <span className="text-red-500">*</span></Label>
                <Input
                  type="number"
                  placeholder="e.g., 1200"
                  value={formData.rainfall}
                  onChange={(e) => handleInputChange("rainfall", e.target.value)}
                />
                {errors.rainfall && <p className="text-red-500 text-sm">{errors.rainfall}</p>}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <Label>Additional Information</Label>
            <Textarea
              placeholder="Any specific requirements, previous crops, or details..."
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <Button type="submit" variant="hero" size="xl" className="w-full md:w-1/2">
              Get AI Recommendations
            </Button>
            <Button type="button" variant="outline" size="xl" className="w-full md:w-1/2" onClick={handleReset}>
              Reset Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropForm;

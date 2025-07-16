"use client";
import { useState, useRef, useCallback } from "react";
import {
  Upload,
  Camera,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Zap,
  Shield,
  Eye,
  FileImage,
} from "lucide-react";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [groqRecommendations, setGroqRecommendations] = useState(null); // New state for Groq results
  const fileInputRef = useRef(null);

  const handleImageSelect = useCallback((file) => {
    if (!file) return;

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be less than 10MB. Please choose a smaller image.");
      return;
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPG, PNG, HEIC, WebP)");
      return;
    }

    setSelectedImage(file);
    setError(null);
    setResult(null);
    setGroqRecommendations(null); // Reset Groq recommendations on new image select

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    handleImageSelect(file);
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const file = e.dataTransfer.files[0];
      handleImageSelect(file);
    },
    [handleImageSelect],
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }, []);

  const processImage = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);
    setResult(null);
    setGroqRecommendations(null); // Reset Groq recommendations during processing

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      // Log FormData for debugging
      for (let pair of formData.entries()) {
        console.log("FormData entry:", pair[0], pair[1].name || pair[1], typeof pair[1]);
      }
      console.log("Selected Image:", selectedImage, selectedImage instanceof File, "Size:", selectedImage.size);

      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/process-image`;
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log("Server response:", errorText);
        throw new Error(`Analysis failed with status: ${response.status} - ${errorText || "No additional details"}`);
      }

      const data = await response.json();

      if (!data || Object.keys(data).length === 0) {
        setError(
          "Unable to extract nutrition information from this image. Please ensure the nutrition label is clearly visible and try again with better lighting.",
        );
        return;
      }

      setResult(data);

      // Prepare data for Groq analysis
      const groqData = { nutrients: data };
      const groqPrompt = `
        Based on the nutritional values: ${JSON.stringify(groqData)}, 
        please analyze the potential health benefits, risks, and provide actionable recommendations.
        
        Health Benefits: 
        List the potential health benefits based on the nutrients provided (e.g., high fiber, low sugar, etc.).
        
        Health Risks:
        Identify any health risks based on high levels of certain nutrients (e.g., high sodium, sugar, etc.).
        
        Recommendations:
        Provide dietary recommendations or suggestions for improvement, based on the analysis of the nutritional values.
      `;

      // Call Groq API
      const groqRes = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_URL}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: groqPrompt,
            },
          ],
        }),
      });

      if (groqRes.ok) {
        const groqRecommendations = await groqRes.json();
        console.log("Groq Recommendations:", groqRecommendations);
        setGroqRecommendations(groqRecommendations);
      } else {
        const errorText = await groqRes.text();
        console.log("Groq API error response:", errorText);
        throw new Error(`Groq API failed with status: ${groqRes.status} - ${errorText || "No additional details"}`);
      }
    } catch (err) {
      console.error("Error processing image or Groq API:", err);
      setError(
        "Failed to analyze the image or retrieve recommendations. Please check your internet connection and ensure the API keys are configured correctly.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
    setGroqRecommendations(null); // Reset Groq recommendations on reset
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const renderNutritionData = (data) => {
    const sections = [];

    Object.entries(data).forEach(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        sections.push(
          <div key={key} className="card">
            <h3 className="text-2xl font-bold text-secondary-800 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg mr-3"></div>
              {key.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(value).map(([subKey, subValue]) => (
                <div
                  key={subKey}
                  className="flex justify-between items-center p-4 bg-secondary-50 rounded-xl border border-secondary-100"
                >
                  <span className="text-secondary-700 font-medium capitalize">
                    {subKey.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="font-bold text-secondary-900 text-lg">{subValue}</span>
                </div>
              ))}
            </div>
          </div>,
        );
      } else if (value && (typeof value === "string" || typeof value === "number")) {
        sections.push(
          <div
            key={key}
            className="flex justify-between items-center p-6 bg-white rounded-xl shadow-md border border-secondary-100"
          >
            <span className="text-secondary-700 font-semibold text-lg capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </span>
            <span className="font-bold text-secondary-900 text-xl">{value}</span>
          </div>,
        );
      }
    });

    return sections.length > 0 ? (
      <div className="space-y-6">{sections}</div>
    ) : (
      <div className="text-center py-12">
        <AlertCircle className="w-16 h-16 text-warning-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-secondary-800 mb-2">No Nutrition Data Found</h3>
        <p className="text-secondary-600">
          We couldn't extract nutrition information from this image. Please try with a clearer photo of a nutrition
          label.
        </p>
      </div>
    );
  };

  // Function to render Groq recommendations
  const renderGroqRecommendations = () => {
    if (!groqRecommendations || !groqRecommendations.choices || groqRecommendations.choices.length === 0) {
      return null;
    }

    const content = groqRecommendations.choices[0].message.content;
    const sections = content.split(/(?=Health Benefits:|Health Risks:|Recommendations:)/).filter(Boolean);

    return (
      <div className="card mt-8">
        <h3 className="text-2xl font-bold text-secondary-800 mb-6">AI Health Insights</h3>
        {sections.map((section, index) => {
          const [title, ...details] = section.split("\n").filter(Boolean);
          return (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold text-primary-700 mb-2">{title}</h4>
              <ul className="list-disc pl-5 text-secondary-600 space-y-2">
                {details.map((detail, i) => (
                  <li key={i}>{detail.trim()}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">AI-Powered Analysis</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Scan Your Food Label</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Upload an image of any nutrition label and get instant, comprehensive analysis powered by advanced AI
            technology
          </p>
        </div>

        {!selectedImage ? (
          /* Upload Area */
          <div className="max-w-4xl mx-auto">
            <div
              className={`relative border-2 border-dashed rounded-3xl p-16 text-center transition-all duration-300 cursor-pointer group ${
                dragActive
                  ? "border-primary-500 bg-primary-50 scale-105"
                  : "border-secondary-300 hover:border-primary-400 hover:bg-primary-50/50"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="space-y-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Upload className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-500 rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                    Drop your image here or click to browse
                  </h3>
                  <p className="text-lg text-secondary-600 mb-6">
                    Supports JPG, PNG, HEIC, WebP and other common formats
                  </p>
                  <div className="inline-flex items-center space-x-2 text-sm text-secondary-500">
                    <FileImage className="w-4 h-4" />
                    <span>Maximum file size: 10MB</span>
                  </div>
                </div>

                <button className="btn-primary text-lg px-8 py-4">
                  <Upload className="w-5 h-5 mr-3" />
                  Choose Image
                </button>
              </div>

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileInput} className="hidden" />
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Lightning Fast</h3>
                <p className="text-secondary-600">Get results in under 2 seconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">Privacy Protected</h3>
                <p className="text-secondary-600">Images never stored or shared</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-success-500 to-success-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-800 mb-2">99.9% Accurate</h3>
                <p className="text-secondary-600">Professional-grade analysis</p>
              </div>
            </div>
          </div>
        ) : (
          /* Analysis Area */
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Image Preview */}
            <div className="card">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-secondary-800">Selected Image</h3>
                    <button onClick={resetUpload} className="btn-ghost p-2" title="Remove image">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  {imagePreview && (
                    <div className="relative rounded-2xl overflow-hidden border-2 border-secondary-200 shadow-lg">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Selected food label"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-semibold text-secondary-800 mb-2">Ready for Analysis</h4>
                    <p className="text-secondary-600 mb-6">
                      Our AI will extract and analyze all nutrition information from your food label.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={processImage}
                      disabled={isLoading}
                      className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Analyzing Nutrition Data...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-3" />
                          Analyze Nutrition
                        </>
                      )}
                    </button>

                    <button onClick={resetUpload} className="btn-secondary w-full">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Choose Different Image
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-error-50 border-2 border-error-200 rounded-2xl p-8 animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-error-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-error-800 mb-2">Analysis Failed</h3>
                    <p className="text-error-700 leading-relaxed">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Results Display */}
            {result && (
              <div className="animate-slide-up">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 bg-success-100 rounded-full px-6 py-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-success-600" />
                    <span className="text-sm font-semibold text-success-700">Analysis Complete</span>
                  </div>
                  <h2 className="text-4xl font-bold gradient-text mb-4">Nutrition Analysis Results</h2>
                  <p className="text-xl text-secondary-600">Here's what we found in your food label</p>
                </div>

                {renderNutritionData(result)}
                {renderGroqRecommendations()} {/* Render Groq recommendations if available */}

                <div className="text-center mt-12">
                  <button onClick={resetUpload} className="btn-secondary text-lg px-8 py-4">
                    <Camera className="w-5 h-5 mr-3" />
                    Scan Another Label
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="card">
            <h3 className="text-3xl font-bold text-secondary-800 mb-8 text-center">Tips for Best Results</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-success-500" />
                  <h4 className="text-xl font-semibold text-success-700">Best Practices</h4>
                </div>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use bright, even lighting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep the label flat and straight</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure all text is clearly readable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Include the entire nutrition panel</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <X className="w-6 h-6 text-error-500" />
                  <h4 className="text-xl font-semibold text-error-700">Avoid These Issues</h4>
                </div>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Blurry or out-of-focus images</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Curved or wrinkled labels</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Partial nutrition information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-error-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Glare or reflective surfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
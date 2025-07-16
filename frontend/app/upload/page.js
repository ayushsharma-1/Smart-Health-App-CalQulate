"use client";

import { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

function extractNutrientValueFromString(nutrient) {
  if (!nutrient) return 0;
  return parseFloat(nutrient.replace(/[^\d.-]/g, "")) || 0;
}

function evaluateHealth(data) {
  if (!data || typeof data !== "object") {
    return {
      isHealthy: false,
      message: "⚠️ Invalid input data.",
      healthDetails: [],
      recommendations: [],
    };
  }

  const nutrients = {
    calories: extractNutrientValueFromString(data["Calories"]),
    totalFat: extractNutrientValueFromString(data["Total Fat"]),
    saturatedFat: extractNutrientValueFromString(data["Saturated Fat"]),
    transFat: extractNutrientValueFromString(data["Trans Fat"]),
    polyunsaturatedFat: extractNutrientValueFromString(data["Polyunsaturated Fat"]),
    monounsaturatedFat: extractNutrientValueFromString(data["Monounsaturated Fat"]),
    cholesterol: extractNutrientValueFromString(data["Cholesterol"]),
    sodium: extractNutrientValueFromString(data["Sodium"]),
    potassium: extractNutrientValueFromString(data["Potassium"]),
    totalCarbohydrate: extractNutrientValueFromString(data["Total Carbohydrate"]),
    dietaryFiber: extractNutrientValueFromString(data["Dietary Fiber"]),
    sugars: extractNutrientValueFromString(data["Sugars"]),
    protein: extractNutrientValueFromString(data["Protein"]),
    vitaminA: extractNutrientValueFromString(data["Vitamin A"]),
    vitaminC: extractNutrientValueFromString(data["Vitamin C"]),
    calcium: extractNutrientValueFromString(data["Calcium"]),
    iron: extractNutrientValueFromString(data["Iron"]),
    vitaminD: extractNutrientValueFromString(data["Vitamin D"]),
  };

  const thresholds = {
    calories: 250,
    sugars: 10,
    sodium: 150,
    saturatedFat: 3,
    transFat: 0,
    healthyFat: 1.5,
    dietaryFiber: 3,
    protein: 3,
    vitaminA: 1,
    vitaminC: 1,
    calcium: 10,
    iron: 1,
    vitaminD: 1,
  };

  const healthDetails = [
    {
      nutrient: "Calories",
      value: nutrients.calories,
      threshold: thresholds.calories,
      isHealthy: nutrients.calories <= thresholds.calories,
      message: nutrients.calories <= thresholds.calories ? "✅ Within healthy range" : "⚠️ Too many calories",
    },
    {
      nutrient: "Sugars",
      value: nutrients.sugars,
      threshold: thresholds.sugars,
      isHealthy: nutrients.sugars <= thresholds.sugars,
      message: nutrients.sugars <= thresholds.sugars ? "✅ Low sugar content" : "⚠️ High sugar content",
    },
    {
      nutrient: "Sodium",
      value: nutrients.sodium,
      threshold: thresholds.sodium,
      isHealthy: nutrients.sodium <= thresholds.sodium,
      message: nutrients.sodium <= thresholds.sodium ? "✅ Low sodium" : "⚠️ High sodium",
    },
    {
      nutrient: "Saturated Fat",
      value: nutrients.saturatedFat,
      threshold: thresholds.saturatedFat,
      isHealthy: nutrients.saturatedFat <= thresholds.saturatedFat,
      message: nutrients.saturatedFat <= thresholds.saturatedFat ? "✅ Low saturated fat" : "⚠️ High saturated fat",
    },
    {
      nutrient: "Trans Fat",
      value: nutrients.transFat,
      threshold: thresholds.transFat,
      isHealthy: nutrients.transFat === thresholds.transFat,
      message: nutrients.transFat === thresholds.transFat ? "✅ No trans fat" : "⚠️ Contains trans fat",
    },
    {
      nutrient: "Healthy Fats",
      value: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat),
      threshold: thresholds.healthyFat,
      isHealthy: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat) >= thresholds.healthyFat,
      message: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat) >= thresholds.healthyFat ? "✅ Contains healthy fats" : "⚠️ Lacks healthy fats",
    },
    {
      nutrient: "Dietary Fiber",
      value: nutrients.dietaryFiber,
      threshold: thresholds.dietaryFiber,
      isHealthy: nutrients.dietaryFiber >= thresholds.dietaryFiber,
      message: nutrients.dietaryFiber >= thresholds.dietaryFiber ? "✅ High fiber content" : "⚠️ Low fiber content",
    },
    {
      nutrient: "Protein",
      value: nutrients.protein,
      threshold: thresholds.protein,
      isHealthy: nutrients.protein >= thresholds.protein,
      message: nutrients.protein >= thresholds.protein ? "✅ Adequate protein" : "⚠️ Low protein",
    },
    {
      nutrient: "Vitamins & Minerals",
      value: nutrients.vitaminA + nutrients.vitaminC + nutrients.calcium + nutrients.iron,
      threshold: 14,
      isHealthy: nutrients.vitaminA > 0 && nutrients.vitaminC > 0 && nutrients.calcium >= 10 && nutrients.iron >= 1,
      message: nutrients.vitaminA > 0 && nutrients.vitaminC > 0 && nutrients.calcium >= 10 && nutrients.iron >= 1 ? "✅ Nutrient-rich" : "⚠️ Lacks key nutrients",
    },
  ];

  const isHealthy = healthDetails.every((detail) => detail.isHealthy);
  const message = isHealthy ? "✅ This food is considered healthy." : "⚠️ This food may not be healthy.";

  const recommendations = [];
  if (nutrients.sodium > 150) recommendations.push("⚠️ Reduce sodium intake for heart health.");
  if (nutrients.sugars > 10) recommendations.push("⚠️ Limit sugar for better blood sugar control.");
  if (nutrients.dietaryFiber < 3) recommendations.push("⚠️ Add fiber-rich foods for digestion.");
  if (nutrients.protein < 3) recommendations.push("⚠️ Increase protein for muscle health.");
  if (nutrients.calcium < 10) recommendations.push("⚠️ Boost calcium for bone strength.");
  if (nutrients.iron < 1) recommendations.push("⚠️ Consider iron supplements if needed.");

  return { isHealthy, message, healthDetails, recommendations };
}

function formatGroqResponse(raw) {
  const sections = { benefits: [], risks: [], recommendations: [] };
  if (!raw) return sections;

  const content = raw.replace(/\*\*/g, "").replace(/[\r\n]+/g, "\n").trim();
  const parts = content.split(/✅\s*Health Benefits|⚠️\s*Health Risks|💡\s*Recommendations/i);

  if (parts.length >= 2) {
    const order = ["✅ Health Benefits", "⚠️ Health Risks", "💡 Recommendations"]
      .map((title) => ({ title, index: content.indexOf(title) }))
      .filter((item) => item.index !== -1)
      .sort((a, b) => a.index - b.index)
      .map((item) => item.title);

    const orderedParts = parts.slice(1);
    order.forEach((title, i) => {
      const sectionText = orderedParts[i]?.trim() || "";
      const lines = sectionText.split(/\n/).map((s) => s.trim()).filter((s) => s.length > 0);
      if (title.includes("Benefits")) sections.benefits = lines;
      if (title.includes("Risks")) sections.risks = lines;
      if (title.includes("Recommendations")) sections.recommendations = lines;
    });
  }
  return sections;
}

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [groqResult, setGroqResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Image size must be less than 10MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file");
        return;
      }
      setSelectedImage(file);
      setError(null);
      setResult(null);
      setGroqResult(null);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Image size must be less than 10MB");
        return;
      }
      setSelectedImage(file);
      setError(null);
      setResult(null);
      setGroqResult(null);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setError("Please drop a valid image file");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const processImage = async () => {
    if (!selectedImage) {
      setError("No image selected. Please upload an image first.");
      return;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/process-image`;
    const groqApiKey = process.env.NEXT_PUBLIC_GROQ_API_URL;

    if (!apiUrl || !groqApiKey) {
      setError("API configuration missing. Please check environment variables.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setGroqResult(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedImage); // Use "image" as the key

      // Log FormData and selected image for debugging
      for (let pair of formData.entries()) {
        console.log("FormData entry:", pair[0], pair[1].name || pair[1], typeof pair[1]);
      }
      console.log("Selected Image:", selectedImage, selectedImage instanceof File, "Size:", selectedImage.size);

      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.log("Server response:", errorText);
        throw new Error(`Upload failed: ${errorText || res.statusText}`);
      }

      const data = await res.json();
      if (!data || Object.keys(data).length === 0) {
        setError("Image quality too low or label not visible. Try a clearer image.");
        return;
      }

      setResult(data);

      const groqInputData = { nutrients: { ...data } };
      const groqPrompt = `Analyze ${JSON.stringify(groqInputData)} for health benefits, risks, and recommendations.`;
      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: groqPrompt }],
        }),
      });

      if (!groqRes.ok) {
        const errorText = await groqRes.text();
        throw new Error(`Groq API error: ${errorText || groqRes.statusText}`);
      }

      const groqResponse = await groqRes.json();
      setGroqResult(formatGroqResponse(groqResponse.choices[0].message.content));
    } catch (err) {
      console.error("Error:", err);
      setError(`Failed to analyze image: ${err.message}. Check API key or network.`);
    } finally {
      setIsLoading(false);
    }
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    setGroqResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const renderNutritionData = (data) => {
    return Object.entries(data).map(([key, value]) => (
      <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold capitalize text-gray-800">{key.replace(/([A-Z])/g, " $1").trim()}</h3>
        <div className="mt-2 space-y-2 text-sm">
          {typeof value === "object" && !Array.isArray(value) ? (
            Object.entries(value).map(([subKey, subValue]) => (
              <div key={subKey} className="flex justify-between">
                <span className="capitalize text-gray-600">{subKey.replace(/([A-Z])/g, " $1").trim()}:</span>
                <span className="font-medium text-gray-900">{subValue || "N/A"}</span>
              </div>
            ))
          ) : (
            <div className="flex justify-between">
              <span className="capitalize text-gray-600">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
              <span className="font-medium text-gray-900">{value || "N/A"}</span>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Scan Your Food Label</h1>
      <p className="text-center text-gray-600 mb-12">Upload an image for instant AI-powered nutrition insights</p>

      {!selectedImage ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="text-5xl mb-6 text-blue-500">📸</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Drag & Drop or Click to Upload</h3>
          <p className="text-gray-600 mb-4">Supports JPG, PNG (Max 10MB)</p>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Preview</h3>
                {imagePreview && (
                  <div className="relative overflow-hidden rounded-lg border border-gray-200">
                    <Image src={imagePreview} alt="Food label" width={400} height={300} className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
              <div className="md:w-1/2 flex flex-col gap-4">
                <button
                  onClick={processImage}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Nutrition"
                  )}
                </button>
                <button onClick={resetUpload} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">
                  Choose Another Image
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 flex items-center gap-2">
              <span className="text-xl">⚠️</span> {error}
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-blue-700">Nutrition Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{renderNutritionData(result)}</div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Health Evaluation</h3>
                <p className="text-gray-700 mb-4">{evaluateHealth(result).message}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {evaluateHealth(result).healthDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border ${
                        detail.isHealthy ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                      }`}
                    >
                      <span className="capitalize text-gray-800">{detail.nutrient}:</span>
                      <span className={detail.isHealthy ? "text-green-600" : "text-red-600"}>{detail.message}</span>
                    </div>
                  ))}
                </div>
                {evaluateHealth(result).recommendations.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-blue-700">Recommendations</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {evaluateHealth(result).recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {groqResult && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">AI Insights</h3>
                  {groqResult.benefits.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-green-700">✅ Benefits</h4>
                      <ul className="list-disc pl-5 text-green-700 space-y-1">
                        {groqResult.benefits.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {groqResult.risks.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-red-700">⚠️ Risks</h4>
                      <ul className="list-disc pl-5 text-red-700 space-y-1">
                        {groqResult.risks.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {groqResult.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-medium text-blue-700">💡 Recommendations</h4>
                      <ul className="list-disc pl-5 text-blue-700 space-y-1">
                        {groqResult.recommendations.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 Tips for Best Results</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">✅ Do:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Use good lighting</li>
              <li>Keep label flat</li>
              <li>Ensure clear text</li>
              <li>Include full panel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-600 mb-2">❌ Avoid:</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Blurry images</li>
              <li>Curved labels</li>
              <li>Partial info</li>
              <li>Glare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
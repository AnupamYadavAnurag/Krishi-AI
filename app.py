from flask import Flask, request, jsonify
import numpy as np
import pickle

app = Flask(__name__)

# Load your trained ML model
model = pickle.load(open("crop_model.pkl", "rb"))

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.get_json()

    features = np.array([
        float(data.get("nitrogen", 0)),
        float(data.get("phosphorus", 0)),
        float(data.get("potassium", 0)),
        float(data.get("temperature", 25)),
        float(data.get("humidity", 60)),
        float(data.get("rainfall", 1000)),
        float(data.get("soilPH", 6.5))
    ]).reshape(1, -1)

    prediction = model.predict(features)[0]

    crop_info = {
        "rice": {"expectedYield": "50–60 q/ha", "profit": "₹40,000–50,000/ha"},
        "maize": {"expectedYield": "40–50 q/ha", "profit": "₹30,000–40,000/ha"},
        "cotton": {"expectedYield": "15–25 q/ha", "profit": "₹45,000–55,000/ha"},
    }

    result = {
        "recommended_crop": prediction,
        "details": crop_info.get(prediction.lower(), {})
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)

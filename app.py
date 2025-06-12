from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Disease database with symptoms and their weights
DISEASE_DATABASE = {
    "Common Cold": {
        "symptoms": ["runny_nose", "sore_throat", "cough", "fatigue", "headache"],
        "weights": [0.9, 0.8, 0.7, 0.6, 0.5],
        "description": "A viral infection of the upper respiratory tract",
        "recommendations": [
            "Get plenty of rest",
            "Stay hydrated",
            "Use throat lozenges for sore throat",
            "Consider over-the-counter pain relievers"
        ]
    },
    "Flu (Influenza)": {
        "symptoms": ["fever", "body_aches", "fatigue", "headache", "cough", "sore_throat"],
        "weights": [0.9, 0.9, 0.8, 0.8, 0.7, 0.6],
        "description": "A viral infection that attacks the respiratory system",
        "recommendations": [
            "Rest and sleep as much as possible",
            "Drink plenty of fluids",
            "Consider antiviral medications if diagnosed early",
            "Stay home to avoid spreading the virus"
        ]
    },
    "COVID-19": {
        "symptoms": ["fever", "cough", "difficulty_breathing", "loss_taste_smell", "fatigue", "body_aches"],
        "weights": [0.8, 0.9, 0.9, 0.95, 0.7, 0.7],
        "description": "A respiratory illness caused by the SARS-CoV-2 virus",
        "recommendations": [
            "Isolate immediately",
            "Get tested for COVID-19",
            "Monitor oxygen levels",
            "Seek medical attention if symptoms worsen"
        ]
    },
    "Gastroenteritis": {
        "symptoms": ["nausea", "diarrhea", "body_aches", "fever", "fatigue"],
        "weights": [0.9, 0.9, 0.6, 0.7, 0.8],
        "description": "Inflammation of the stomach and intestines",
        "recommendations": [
            "Stay hydrated with clear fluids",
            "Follow the BRAT diet (Bananas, Rice, Applesauce, Toast)",
            "Rest and avoid solid foods initially",
            "Seek medical attention if symptoms persist"
        ]
    },
    "Allergic Reaction": {
        "symptoms": ["rash", "difficulty_breathing", "runny_nose", "cough"],
        "weights": [0.9, 0.8, 0.7, 0.6],
        "description": "An immune system response to an allergen",
        "recommendations": [
            "Identify and avoid the allergen",
            "Consider antihistamines",
            "Seek immediate medical attention for severe reactions",
            "Keep an epinephrine auto-injector if prescribed"
        ]
    },
    "Migraine": {
        "symptoms": ["headache", "nausea", "fatigue"],
        "weights": [0.95, 0.7, 0.6],
        "description": "A type of headache disorder characterized by severe pain",
        "recommendations": [
            "Rest in a dark, quiet room",
            "Apply cold or warm compress to head",
            "Stay hydrated",
            "Consider over-the-counter pain relievers"
        ]
    }
}

def calculate_disease_probability(selected_symptoms):
    """Calculate probability scores for each disease based on selected symptoms"""
    results = []
    
    for disease, data in DISEASE_DATABASE.items():
        score = 0
        matched_symptoms = 0
        
        for i, symptom in enumerate(data["symptoms"]):
            if symptom in selected_symptoms:
                score += data["weights"][i]
                matched_symptoms += 1
        
        if matched_symptoms > 0:
            # Normalize score based on number of matched symptoms
            probability = (score / len(data["symptoms"])) * 100
            results.append({
                "disease": disease,
                "probability": round(probability, 1),
                "matched_symptoms": matched_symptoms,
                "total_symptoms": len(data["symptoms"]),
                "description": data["description"],
                "recommendations": data["recommendations"]
            })
    
    # Sort by probability (highest first)
    results.sort(key=lambda x: x["probability"], reverse=True)
    return results

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict_disease():
    try:
        data = request.get_json()
        selected_symptoms = data.get('symptoms', [])
        
        if not selected_symptoms:
            return jsonify({
                "error": "Please select at least one symptom",
                "results": []
            })
        
        results = calculate_disease_probability(selected_symptoms)
        
        return jsonify({
            "success": True,
            "results": results,
            "selected_symptoms_count": len(selected_symptoms)
        })
    
    except Exception as e:
        return jsonify({
            "error": f"An error occurred: {str(e)}",
            "results": []
        })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

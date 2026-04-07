from flask import Flask, request, jsonify
from model import PricePredictor

app = Flask(__name__)
predictor = PricePredictor()

@app.route('/predict', methods=['POST'])
def predict_price():
    data = request.json
    prediction = predictor.predict(data)
    return jsonify({"predicted_price": prediction})

if __name__ == '__main__':
    app.run(port=8000)

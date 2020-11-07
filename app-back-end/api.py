from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

###### ENDPOINTS 

@app.route('/primeiroEndpoint', methods=['GET'])
@cross_origin(supports_credentials=True)
def primeiro_endpoint():
    return jsonify({'title' : "Sucesso!", 
    'message': "A comunicação com o primeiro endpoint foi bem sucedida!"})

@app.route('/segundoEndpoint', methods=['GET'])
@cross_origin(supports_credentials=True)
def segundo_endpoint():
    return jsonify({'title' : "Sucesso!", 
    'message': "A comunicação com o segundo endpoint foi bem sucedida!"})

@app.route('/terceiroEndpoint/<message>', methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def terceiro_endpoint(message):
      print("Message recebida via terceiro endpoint:  {}".format(message))

      return jsonify({'title' : "Sucesso!", 
      'message': "A comunicação com o terceiro endpoint foi bem sucedida! Messagem enviada: "+message})

if __name__ == '__main__':
    app.run(debug=True)
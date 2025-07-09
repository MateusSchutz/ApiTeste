

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

usuarios = []
id_counter = 1

@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    return jsonify(usuarios)

@app.route('/usuarios', methods=['POST'])
def add_usuario():
    global id_counter
    data = request.json
    data['id'] = id_counter
    usuarios.append(data)
    id_counter += 1
    return jsonify(data), 201

@app.route('/usuarios/<int:id>', methods=['PUT'])
def update_usuario(id):
    data = request.json
    for usuario in usuarios:
        if usuario['id'] == id:
            usuario.update(data)
            return jsonify(usuario)
    return jsonify({'erro': 'Usuário não encontrado'}), 404

@app.route('/usuarios/<int:id>', methods=['DELETE'])
def delete_usuario(id):
    for usuario in usuarios:
        if usuario['id'] == id:
            usuarios.remove(usuario)
            return jsonify({'mensagem': 'Removido'})
    return jsonify({'erro': 'Usuário não encontrado'}), 404

if __name__ == '__main__':
    app.run(debug=True)

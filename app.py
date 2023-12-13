from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template('login.html')

@app.route("/buscar", methods=["GET", "POST"])
def buscar():
    return render_template('buscar.html')

@app.route("/agregar", methods=["GET", "POST"])
def agregar():
    return render_template('agregar.html')

@app.route("/borrar", methods=["GET", "POST"])
def borrar():
    return render_template('borrar.html')

@app.route("/actualizar", methods=["GET", "POST"])
def actualizar():
    return render_template('actualizar.html')

@app.route("/inicio", methods=["GET", "POST"])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

from flask import request
from flaskApi import app
import os
import sklearn
from sklearn.naive_bayes import  GaussianNB
import pickle
import traceback

baseDir = os.path.dirname(os.path.abspath(__file__))
grades = {
    0:'Excellent',
    1: 'Good',
    2: 'Average',
    3: 'Fair',
    4: 'Poor'
}

@app.route('/faq')
def about():
    return {"title": "FAQ"}

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        name = request.form['name']
        g1, g2 = request.form['G1'], request.form['G2']
        age, sex, studytime = request.form['age'], request.form['sex'], request.form['studytime']
        failures, health, absences = request.form['failures'], request.form['health'], request.form['absences']
                
        print(name, g1, g2, age, sex, studytime, failures, health, absences)

        loaded_linear_model = pickle.load(open(os.path.join(baseDir,'linear_model.sav'), 'rb'))
        g3 = loaded_linear_model.predict([[g1, g2, age, studytime, failures, health, absences, sex]])
        
        loaded_clf_model = pickle.load(open(os.path.join(baseDir,'clf_model.sav'), 'rb'))
        grade = loaded_clf_model.predict([[g1, g2, int(g3[0]), age, studytime, failures, health, absences, sex]])

        return {"grade": grades[grade[0]], "result": g3[0]}        
    else:
        return "Invalid request."

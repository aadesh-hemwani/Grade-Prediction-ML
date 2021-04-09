import pandas as pd
import sklearn
import matplotlib.pyplot as plt
import seaborn as sns

sns.set()
from sklearn.metrics import confusion_matrix
import numpy as np
from sklearn import preprocessing
from sklearn.model_selection import train_test_split

# Gaussian Navie Bayes classifier
from sklearn.naive_bayes import MultinomialNB, GaussianNB

# Linear Regression
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score
import pickle

grades = {0: "Excellent", 1: "Good", 2: "Average", 3: "Fair", 4: "Poor"}

dataCSV = pd.read_csv("test1.csv")
data = dataCSV[
    [
        "G1",
        "G2",
        "G3",
        "sex",
        "age",
        "studytime",
        "failures",
        "health",
        "absences",
    ]
]
data_frame = data
data_frame_rev = data_frame

le = preprocessing.LabelEncoder()
sex_cat = le.fit_transform(data_frame.sex)

data_frame_rev["sex_cat"] = sex_cat
data_frame_rev = data_frame_rev.drop(["sex"], axis=1)

print(data_frame_rev.head())

label = "G3"
features = np.array(data_frame_rev.drop([label], 1))
print(features[0])
target = np.array(data_frame_rev[label])
features_train, features_test, target_train, target_test = train_test_split(
    features, target, test_size=0.1
)

model = LinearRegression()
model.fit(features_train, target_train)
predictions = model.predict(features_test)
# filename = "linear_model.sav"
# pickle.dump(model, open(filename, "wb"))

acc = model.score(features_test, target_test)
print("Prediction Accuracy is", acc)

data_frame_rev["grade"] = dataCSV["grade"]

label = "grade"
features = np.array(data_frame_rev.drop([label], 1))
target = np.array(data_frame_rev[label])
features_train, features_test, target_train, target_test = train_test_split(
    features, target, test_size=0.1
)

clf = GaussianNB()
clf.fit(features_train, target_train)
classifications = clf.predict(features_test)
saved_clf_model = pickle.dumps(clf)
# filename = "clf_model.sav"
# pickle.dump(clf, open(filename, "wb"))

acc1 = accuracy_score(target_test, classifications, normalize=True)
print("Classification Accuracy is", acc1)

clfError = 1 - acc1
print("Classification error is", clfError)

sensitivity = sklearn.metrics.recall_score(
    target_test, classifications, labels=None, average="micro", sample_weight=None
)
print("Sensitivity is", sensitivity)

specificity = 1 - sensitivity
print("Specificity is", specificity)


mat = confusion_matrix(target_test, classifications)
sns.heatmap(mat.T, square=True, annot=True, fmt="d", cbar=False)
plt.xlabel("Given Data")
plt.ylabel("Prediction")


# for i in range(len(classifications)):
#     print(grades[classifications[i]], predictions[i], target_test[i])

labels = ["Clf Acc", "Clf Error", "Sensitivity", "Specificity", "Prediction Acc"]
values = [acc1 * 100, clfError * 100, sensitivity * 100, specificity * 100, acc * 100]
fig = plt.figure(figsize=(10, 7))
plt.bar(labels, values, color="maroon", width=0.1)
plt.xlabel("")
plt.ylabel("Percentage")
plt.title("Nerdy Stats")

# plt.show()


# load the model from disk
# loaded_model = pickle.load(open(filename, 'rb'))
# result = loaded_model.predict(data)
# print(result)
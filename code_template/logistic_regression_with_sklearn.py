# import library
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

# load iris dataset
iris = load_iris()
X = iris.data[:, :2]
y = iris.target

# split dataset into training and testing set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# create logistic regression model
lr = LogisticRegression()

# train the model on training data
lr.fit(X_train, y_train)

# predict the target values for test dataset
y_pred = lr.predict(X_test)

# calculate the accuracy score
accuracy = lr.score(X_test, y_test)

# print the accuracy score
print("Accuracy:", accuracy)

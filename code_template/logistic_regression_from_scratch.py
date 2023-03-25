import numpy as np

class LogisticRegression:
    def __init__(self, learning_rate=0.01, num_iterations=1000):
        self.learning_rate = learning_rate
        self.num_iterations = num_iterations

    def fit(self, X, y):
        # inisialisasi bobot
        self.weights = np.zeros(X.shape[1])

        # iterasi untuk update bobot
        for i in range(self.num_iterations):
            # hitung nilai z
            z = np.dot(X, self.weights)

            # hitung nilai sigmoid
            h = 1 / (1 + np.exp(-z))

            # hitung gradien
            gradient = np.dot(X.T, (h - y)) / y.size

            # update bobot
            self.weights -= self.learning_rate * gradient

    def predict(self, X):
        # hitung nilai z
        z = np.dot(X, self.weights)

        # hitung nilai sigmoid
        h = 1 / (1 + np.exp(-z))

        # klasifikasikan nilai
        return np.round(h)

    def score(self, X, y):
        # hitung prediksi
        y_pred = self.predict(X)

        # hitung akurasi
        accuracy = np.sum(y_pred == y) / y.size

        return accuracy

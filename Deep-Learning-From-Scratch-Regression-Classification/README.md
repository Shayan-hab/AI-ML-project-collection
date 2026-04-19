# 🧠 Deep Learning Assignment #02

### Polynomial Regression & Multiclass Logistic Regression (From Scratch)

---

## 📌 Overview

This repository contains the implementation of two fundamental machine learning models built **completely from scratch using NumPy**, without relying on built-in ML libraries.

The goal of this project is to understand the **mathematical foundations** of learning algorithms by implementing:

* Polynomial Regression (for regression tasks)
* Multiclass Logistic Regression (for classification tasks)

Both models are trained using **Gradient Descent**, enhanced with **Regularization**, and evaluated using **K-Fold Cross-Validation**.

---

## 🎯 Objectives

* Implement machine learning algorithms from scratch
* Understand gradient descent optimization
* Apply L2 regularization to reduce overfitting
* Use K-Fold Cross-Validation for better generalization
* Evaluate model performance using training and testing errors

---

## 📊 Datasets Used

### 1️⃣ House Prices Dataset (Regression)

* Source: Kaggle
* Task: Predict house prices
* Target Variable: `SalePrice`

### 2️⃣ Forest Cover Type Dataset (Classification)

* Source: Kaggle
* Task: Predict forest cover type
* Number of Classes: 7 (`Cover_Type`)

---

## ⚙️ Features of This Project

* ✅ Models implemented **from scratch**
* ✅ No use of `sklearn` models (only preprocessing)
* ✅ Gradient Descent optimization
* ✅ L2 Regularization (Ridge)
* ✅ K-Fold Cross Validation
* ✅ Training vs Testing error visualization
* ✅ Works on real-world Kaggle datasets

---

## 🧮 Algorithms Implemented

### 📉 Polynomial Regression

Polynomial regression extends linear regression by adding higher-degree terms:

* Captures non-linear relationships
* Uses Mean Squared Error (MSE) as loss function

#### Loss Function:

L = (1/2m) * Σ(y_pred - y)^2 + λ * ||w||²

---

### 📌 Multiclass Logistic Regression

Implemented using:

* Softmax function
* Cross-Entropy Loss
* One-hot encoding

#### Softmax:

P(y = k) = exp(z_k) / Σ exp(z_j)

---

## 🔁 K-Fold Cross Validation

* Dataset is split into **K folds**
* Model is trained on K-1 folds and tested on 1 fold
* Process repeats K times
* Reduces overfitting and improves reliability

---

## 🧪 Results

### 📉 Polynomial Regression

* Training Error: ~3.28 × 10¹⁰
* Testing Error: ~3.37 × 10¹⁰
* RMSE ≈ 180K

### 📌 Logistic Regression

* Training Accuracy ≈ 70%
* Testing Accuracy ≈ 69%

---

## 📈 Visualization

The project includes plots for:

* Training vs Testing Error (Regression)
* Training vs Testing Error (Classification)

---

## 🏗️ Project Structure

```
├── house_prices.csv
├── forest_cover.csv
├── notebook.ipynb
├── README.md
```

---

## 🚀 How to Run

1. Clone the repository:

```
git clone https://github.com/your-username/repo-name.git
```

2. Open in Google Colab or Jupyter Notebook

3. Upload datasets:

* `house_prices.csv`
* `forest_cover.csv`

4. Run all cells

---

## 🧠 Key Concepts Learned

* Gradient Descent Optimization
* Overfitting & Regularization
* Feature Scaling
* Polynomial Feature Expansion
* Softmax & Cross Entropy
* Model Evaluation

---

## 📌 Important Notes

* Models are intentionally implemented from scratch for learning purposes
* Performance can be improved using advanced ML libraries
* Dataset size is reduced for faster computation

---

## 👨‍💻 Author

**Shayan**
BS Software Engineering

---

## 📜 License

This project is for academic and educational purposes only.

---

# 🧠 Awesome AI & ML Projects

Welcome to my collection of Artificial Intelligence and Machine Learning projects! This repository contains various projects I've developed to explore different algorithms, models, and applications within the AI/ML domain.

## 📁 Projects Included

### 1 🌾 Crop Yield Prediction System

This project is a **machine learning-based regression system** that predicts crop yield based on various environmental and agricultural features. It leverages data such as rainfall, temperature, pesticide use, country, and crop type to forecast the expected crop yield.

## 📌 Project Type

- **Supervised Machine Learning**
- **Regression Problem**

In supervised learning, regression problems are those where the output variable is a continuous numerical value. Since our dataset contains numerical yield values, this project fits into the regression category.

## 🛠 Features and Technologies

- **Python**
- **Flask** (Web framework)
- **Pandas, NumPy, Scikit-learn** (Data processing and ML)
- **HTML5 + Bootstrap + CSS** (Frontend UI)

### Models Used

- Linear Regression
- Lasso
- Ridge
- K-Neighbors Regressor
- Decision Tree Regressor
---


### 2 🎓 Placement Prediction System

This project is a **machine learning-based classification system** that predicts whether a student will get placed or not based on their **IQ** and **CGPA** scores. It uses a **Logistic Regression** model to analyze the relationship between academic performance and logical intelligence to forecast placement outcomes.

📌 **Project Type**  
Supervised Machine Learning  
Classification Problem  

In supervised learning, classification problems are those where the output variable is **categorical** — such as "Placed" or "Not Placed". Logistic Regression is ideal for binary classification tasks like this one.  

🛠 **Features and Technologies**  
- **Python**  
- **Jupyter Notebook** (Development environment)  
- **Pandas**, **NumPy** → Data handling and preprocessing  
- **Matplotlib**, **Seaborn** → Data visualization and analysis  
- **Scikit-learn (sklearn)** → Model building, training, and evaluation  

🤖 **Model Used**  
- Logistic Regression  

📊 **Workflow Steps**  
1. Data Loading and Cleaning  
2. Exploratory Data Analysis (EDA)  
3. Feature Selection – IQ and CGPA  
4. Splitting Dataset into Training and Testing Sets  
5. Model Training using Logistic Regression  
6. Model Evaluation (Accuracy, Confusion Matrix, Classification Report)  
7. Prediction on New Data (IQ & CGPA inputs)  
---

### 3 🚘 BMW Car Price Prediction System


This project is a **machine learning-based regression system** that predicts the **price of BMW cars** based on various specifications such as model, year, mileage, engine size, and fuel type.  
It aims to help users estimate the resale value of BMW vehicles using real-world data and advanced machine learning techniques.

## 📌 Project Type
**Supervised Machine Learning**  
**Regression Problem**

In supervised learning, regression problems aim to predict a **continuous numerical value**.  
Since our target variable (car price) is continuous, this project belongs to the regression category.

## 🧠 Problem Statement
Car prices depend on multiple factors such as mileage, age, engine size, and model type.  
Manually estimating the right value can be difficult.  
This project uses **machine learning** to predict a fair market price for BMW vehicles based on these features.

## 🛠 Features and Technologies
- ⚙️ **Flask** — Web framework for model deployment
- 📊 **Pandas**, **NumPy**, **Scikit-learn** — Data cleaning, preprocessing, and model training
- 🎨 **Matplotlib**, **Seaborn** — Data visualization and insight generation
- 💾 **Joblib** — Model serialization and loading
- 🌐 **HTML5**, **CSS3** — Clean and responsive frontend design

## ⚙️ Machine Learning Models Used
- **Linear Regression**
- **Random Forest Regressor** (✅ Best Performing Model)

The **Random Forest Regressor** achieved an **R² Score of 0.94**, outperforming other models.  
It was selected as the final model for deployment.

## 📊 Dataset Overview
- **Total Records:** 10,781  
- **Features:**  
  `model`, `year`, `mileage`, `transmission`, `fuelType`, `tax`, `mpg`, `engineSize`, and `price`

The dataset contains structured information about BMW vehicles, useful for analyzing pricing trends and predicting resale values.

## 🌐 Web Application Functionality
- Users input car details such as **model**, **year**, **mileage**, **fuel type**, and **transmission**
- The app encodes these inputs, processes them, and predicts the **estimated car price**
- The interface is designed with **HTML** and **CSS** for a simple and elegant look

---







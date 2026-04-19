### 🚘 BMW Car Price Prediction System


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

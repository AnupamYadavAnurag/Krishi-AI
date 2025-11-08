# 🌾 Krishi AI — AI-Powered Agriculture Assistant

**Krishi AI** is an intelligent, multilingual web application that empowers farmers with AI-based **crop recommendations**, **data-driven insights**, and **usage analytics dashboards** — all within a clean and modern interface.

><!--  🌍 Live at: **[Jharkhand Krishi Gyan](https://jharkhand-krishi-gyan.vercel.app/)** -->


---

## 🧩 **Tech Stack**

### 🔹 Frontend
- **Vite + TypeScript**
- **TailwindCSS** (with dark/light mode)
- **Chart.js** for analytics visualization
- **Responsive UI** with transitions and animations

### 🔹 Backend
- **Flask (Python)** REST API
- **Machine Learning model (crop_model.pkl)** for crop recommendation
- **SQLite + SQLAlchemy** for user and analytics data
- **Flask-Login** for authentication
- **Flask-CORS** for frontend-backend connection

---

## 🎯 **Features**

| Feature | Description |
|----------|--------------|
| 🌾 **Smart Crop Recommendation** | Suggests best crop based on soil nutrients, temperature, humidity, and rainfall. |
| 📊 **Interactive Dashboard** | Shows data analytics and API usage stats with **Chart.js** visualizations. |
| 🔐 **User Authentication** | Secure login & registration using Flask-Login. |
| 🧠 **Validated Inputs & Error Handling** | Ensures all data is accurate before prediction. |
| 💾 **Usage Logging** | Stores every request in the database for trend analysis. |
| 📈 **Health Monitoring** | `/health` endpoint checks system & model status. |

---

## 🖼️ **Project Preview**

### 🌄 Home Page
<img width="1485" height="786" alt="Screenshot 2025-11-08 025442" src="https://github.com/user-attachments/assets/42a81b7c-29b0-4a66-a76a-1ae26d898f9a" />

### 📊 Dashboard
<img width="1038" height="921" alt="Screenshot 2025-11-08 152559" src="https://github.com/user-attachments/assets/c34f3b69-64e3-4022-a620-026327e0244c" />

<img width="1770" height="918" alt="Screenshot 2025-11-08 152903" src="https://github.com/user-attachme

<img width="1786" height="926" alt="Screenshot 2025-11-08 153215" src="https://github.com/user-attachments/assets/80f5ff7b-b04c-4098-b165-b814d5f88dae" />
nts/assets/c99735c6-e245-4ab3-95f4-5366721a6a48" />



---

## ⚙️ **Setup & Installation**

### 🧱 Prerequisites
Ensure you have installed:
- **Python 3.9+**
- **Node.js 18+**
- **npm / yarn**
- **Git**

---

### 🔧 Backend Setup (Flask)
bash
# Clone repo
git clone https://github.com/prakharagrawal/jharkhand-krishi-gyan.git
cd jharkhand-krishi-gyan

# Create a virtual environment
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install flask flask_sqlalchemy flask_login flask_cors werkzeug requests

# Run the app
python app.py

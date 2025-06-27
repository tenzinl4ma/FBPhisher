# FBPhisher 🔐  
*Facebook Login Phishing Simulation Tool*

> ⚠️ **Warning:** This tool is highly dangerous in the wrong hands. Use only for **ethical hacking**, **penetration testing**, or **educational purposes** — with explicit authorization.

This is a **simple Flask-based phishing simulation tool** that mimics the Facebook login page to demonstrate how attackers can harvest credentials like **email**, **password**, **IP address**, and **device information**.

Collected data is sent to a **Telegram bot** in real-time.

---

## 📁 File Structure
FBPhisher/
├── requirements.txt # Python dependencies
├── script.js # JavaScript for redirecting form and sending data to Telegram
├── app.py # Main Flask application
├── templates/ # HTML template of fake Facebook login page
└── static/ # CSS, JS, images



---

## 🧪 Features

- Fake Facebook login page
- Logs email and password input
- Captures IP address and browser info
- Sends data to Telegram via bot
- Runs locally by default (use ngrok for public access)

---

## 🛠️ Requirements

- Python 3.x
- Flask
- A working Telegram bot

Install dependencies using pip:

```bash
pip install -r requirements.txt

## You can also use virtual environment
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
##🧩 Setup Instructions
1. Clone the repository
bash
1
2
git clone https://github.com/your-username/FBPhisher.git 
cd FBPhisher


# 2. Install the Dependecies
pip install -r requirements.txt
3. Configure Telegram Bot
Open script.js in your favorite editor:
nano script.js
### Update the following
const botToken = "YOUR_TELEGRAM_BOT_TOKEN";  // Replace with your bot token
const chatId = "YOUR_TELEGRAM_CHAT_ID";      // Replace with your chat ID
# All set, Run with
python3 app.py

By default, the login page will be available at:
👉 http://localhost:5000

To expose this page publicly (for remote testing), use ngrok :

bash


1
ngrok http 5000
Copy the HTTPS link and share it responsibly within an authorized environment.

📬 What Gets Collected
When someone submits the fake login form, the following details are captured:

Email Address
Password
IP Address
User-Agent (Browser & Device Info)
These are then sent to your Telegram bot.

⚠️ Legal Disclaimer
This tool is strictly for educational and ethical hacking purposes only.
Do not use without explicit written permission from the target(s).
Misuse of this tool may result in legal consequences. 

You are responsible for:

Ensuring you have proper authorization before testing
Informing users about potential risks
Complying with all applicable laws and regulations
🧑‍💻 Author
Tenzin Lama
<br>
Instagram: https://www.instagram.com/tenzinlama212/#
Email: tenzinlama212@gmail.com





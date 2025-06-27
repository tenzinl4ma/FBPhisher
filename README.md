# FBPhisher 

<p align="center">
  <img src="https://github.com/user-attachments/assets/35927b5e-9545-49fc-ae52-7432943f35ad" alt="FBPhisher Logo" width="500"/>
</p>
**Facebook Login Phishing Simulation Tool**

> ⚠️ **Warning:** This tool is highly dangerous in the wrong hands. Use only for **ethical hacking**, **penetration testing**, or **educational purposes** — with explicit authorization.

This is a **simple Flask-based phishing simulation tool** that mimics the Facebook login page to demonstrate how attackers can harvest credentials like **email**, **password**, **IP address**, and **device information**.

Collected data is sent to a **Telegram bot** in real-time.

---

## 📁 File Structure

```
FBPhisher/
├── requirements.txt         # Python dependencies
├── script.js                # JavaScript for form redirect and Telegram
├── app.py                   # Main Flask application
├── templates/               # HTML template (fake Facebook login)
└── static/                  # CSS, JS, images
```

---

## 🧪 Features

- Fake Facebook login page
- Logs email and password inputs
- Captures IP address and browser info
- Sends data to Telegram via bot
- Runs locally (can be exposed with ngrok)


<img width="1433" alt="Screenshot 2025-06-27 at 3 52 04 PM" src="https://github.com/user-attachments/assets/747a3183-926e-490a-9e5b-3aaed736e663" />
***Above is exact clone of the facebook login in browser***

---

## 🛠️ Requirements

- Python 3.x
- Flask
- Telegram bot

Install dependencies:

```bash
pip install -r requirements.txt
```

(Recommended) Setup virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

---

## 🥉 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/tenzinl4ma/FBPhisher.git
cd FBPhisher
```

2. **Install Dependencies**

```bash
pip install -r requirements.txt
```

3. **Configure Telegram Bot** Edit `script.js`:

```js
const botToken = "YOUR_TELEGRAM_BOT_TOKEN"; // Replace with your bot token
const chatId = "YOUR_TELEGRAM_CHAT_ID";     // Replace with your chat ID
```

4. **Run the App**

```bash
python3 app.py
```

The fake login page will be available at: [**http://localhost:5000**](http://localhost:5000)

5. **Expose with Ngrok (Optional)**

```bash
ngrok http 5000
```

Copy and share the HTTPS link **only within authorized environments**.
<img width="1248" alt="Screenshot 2025-06-27 at 3 45 18 PM" src="https://github.com/user-attachments/assets/cfad6aad-2e69-4706-a5ac-9090ae2cf807" />


---

## 📬 What Gets Collected

- Email Address
- Password
- IP Address
- User-Agent (Browser & Device Info)

These details are sent to your configured Telegram bot.

![IMG_0165](https://github.com/user-attachments/assets/d20d2089-a897-42dd-80a3-cf0e35435486)

 
---

## ⚠️ Legal Disclaimer

This tool is **strictly** for educational and ethical hacking purposes **only**.

Do **not** use without explicit written permission from the target(s). Misuse may lead to legal consequences.

You are responsible for:

- Obtaining proper authorization
- Informing test users of potential risks
- Complying with applicable laws and regulations

---

## 🧑‍💻 Author

**Tenzin Lama**

- Instagram: [@tenzinlama212](https://www.instagram.com/tenzinlama212/)
- Email: [tenzinlama212@gmail.com](mailto\:tenzinlama212@gmail.com)

---

##  License

**MIT License**

Copyright (c) 2025 Tenzin Lama

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

## Ethical Use Reminder

FBPhisher exists for one purpose: **to educate and protect**.\
Misuse of this tool violates ethical hacking standards and legal boundaries.

Stay sharp.\
Stay ethical.<br>
Stay halal.

from flask import Flask, render_template
import pyfiglet
from colorama import Fore, Style, init
import logging
import sys
import time
import threading

#init(autoreset=True, convert=True)


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# 🔥 Typing animation
def typewriter(text, delay=0.03, clear_line=False):
    if clear_line:
        width = len(text) + 10  # buffer
        sys.stdout.write('\r' + ' ' * width + '\r')  # flush line
        sys.stdout.flush()
        time.sleep(2)
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print(end='\r')  # stay on line

# 🎬 Initial banner + looping animation
def animated_banner():
    banner = pyfiglet.figlet_format("Dragon Warrior")
    print("\033c")  # Clear terminal
    print(Fore.GREEN + banner)
    print()  # spacing
    print(Fore.YELLOW + "🔥 FBPhisher is online at http://127.0.0.1:5000\n")
    
    while True:
        typewriter(Fore.LIGHTRED_EX + "- Developed by Tenzin", delay=0.015, clear_line=True)
        time.sleep(2)

def suppress_logs():
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)

if __name__ == "__main__":
    suppress_logs()

    # 🔁 Start animation in background
    banner_thread = threading.Thread(target=animated_banner, daemon=True)
    banner_thread.start()

    # 🛠️ Start Flask app
    app.run(debug=False, use_reloader=False)

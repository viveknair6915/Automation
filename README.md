# Magento QA Automation Assessment

---

## 🎥 Demonstration Video

**See the automation in action:**

<p align="center">
  <a href="./screenshots/final.mp4"><img src="https://img.icons8.com/ios-filled/100/000000/video.png" alt="Demo Video" width="60"/></a>
</p>

**[▶️ Click here to watch the demonstration (final.mp4)](./screenshots/final.mp4)**

Or open `screenshots/final.mp4` in your video player.

---

## 📋 Assessment Overview

**Deadline:** 2 days  
**Objective:** Automate and validate the following user flows on [Magento Demo Site](https://magento.softwaretestingboard.com/):
1. **Sign Up** (Create Account)
2. **Login** with the same account
3. **Sign Out**
4. **Change Password**

---

## 🎯 Project Objectives & Deliverables

- **Automate** the end-to-end user flows listed above using Selenium and Python.
- **Document test cases** in an Excel file (`test_cases/test_cases.xlsx`).
- **Use Page Object Model (POM)** for maintainable, scalable test scripts.
- **Provide proof of execution** via screenshots and a screen recording.
- **Ensure code clarity, error handling, and robust structure.**
- **Multiple commits** in the repository to show development progress.

---

## 🛠️ Tech Stack

- **Language:** Python 3.x
- **Automation Framework:** Selenium WebDriver
- **Test Runner:** pytest
- **Reporting:** pytest-html (HTML reports)
- **Test Case Documentation:** openpyxl (Excel)
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git

---

## 🗂️ Project Structure

```
Automation/
│
├── README.md                        # Project documentation (this file)
├── requirements.txt                 # Python dependencies
├── test_cases/
│   ├── test_cases.xlsx              # Documented test cases (Excel)
│   └── credentials.txt              # (Auto-generated) Stores test account credentials
├── screenshots/
│   ├── final.mp4                    # Video demonstration of automation
│   ├── test_signup.png              # Screenshot on failure (if any)
│   ├── test_login.png               # Screenshot on failure (if any)
│   ├── test_signout.png             # Screenshot on failure (if any)
│   └── test_change_password.png     # Screenshot on failure (if any)
├── tests/
│   └── test_signup_login.py         # Main test script (pytest)
├── pages/
│   ├── base_page.py                 # Base POM class
│   ├── signup_page.py               # Sign Up page object
│   ├── login_page.py                # Login page object
│   ├── account_page.py              # Account page object
│   └── change_password_page.py      # Change Password page object
└── conftest.py                      # Pytest fixtures (browser setup, teardown, screenshot capture)
```

---

## 📝 Test Case Documentation

All test cases are documented in `test_cases/test_cases.xlsx` with the following columns:
- **Test Case ID**
- **Title**
- **Steps**
- **Expected Result**
- **Actual Result**
- **Status**

**Example:**
| Test Case ID | Title           | Steps                                                        | Expected Result                       |
|--------------|-----------------|--------------------------------------------------------------|---------------------------------------|
| TC001        | Sign Up         | 1. Go to sign up page<br>2. Fill form<br>3. Submit           | Account created, user is logged in    |
| TC002        | Login           | 1. Go to login page<br>2. Enter credentials<br>3. Submit     | User is logged in, account page shown |
| TC003        | Sign Out        | 1. Click account menu<br>2. Click Sign Out                   | User is signed out, sign in page shown|
| TC004        | Change Password | 1. Login<br>2. Go to account edit<br>3. Change password<br>4. Submit | Password changed confirmation message |

---

## 🧩 Automation Approach: Page Object Model (POM)

- **Each page** (Sign Up, Login, Account, Change Password) is represented by a class in `pages/`.
- **BasePage** provides common Selenium methods (find, click, type, etc.).
- **Test scripts** in `tests/` use these page objects for clear, maintainable code.
- **Test data** (unique email, password) is generated and persisted for cross-test use.

---

## 🛡️ Error Handling & Robustness

- **Explicit waits** ensure elements are interactable before actions.
- **JavaScript click fallback** for elements blocked by overlays/ads.
- **Screenshots** are automatically captured on test failure for debugging.
- **Credentials** are persisted between tests to ensure login/change password flows work reliably.
- **Test order** is enforced using `pytest-order` to maintain logical flow.

---

## 📊 Running the Automation & Viewing Results

### 1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

### 2. **Run the tests and generate HTML report:**
```bash
pytest --html=report.html --self-contained-html
```
- Screenshots (on failure) are saved in `screenshots/`.
- Test results are viewable in `report.html`.

### 3. **View the demonstration video:**
- **[▶️ Click to watch the demonstration (final.mp4)](./screenshots/final.mp4)**
- Or open `screenshots/final.mp4` in your video player.

---

## 🧾 Submission Checklist

- [x] **Test cases documented** in Excel
- [x] **Automation code** using Selenium, pytest, and POM
- [x] **Multiple commits** in the repository
- [x] **Screenshots and video** as proof of execution
- [x] **Well-structured, multi-file repository**
- [x] **README** with detailed instructions and demonstration

---

## 💡 Additional Notes

- The code is modular, clear, and easy to extend for more flows or data-driven testing.
- All selectors and waits are robust against UI changes and common web automation issues (ads, overlays, etc.).
- The project is ready for review and further enhancement as needed.

---

**For any questions or further improvements, please contact the repository maintainer.**
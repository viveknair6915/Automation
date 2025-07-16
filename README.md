# 🚀 Magento QA Automation Project

## 📋 Project Overview

This project demonstrates comprehensive QA automation for the Magento e-commerce platform using **Cypress** framework with **Page Object Model (POM)** design pattern. The automation covers complete user journey including registration, login, sign-out, and password change functionality.

### Objectives
- ✅ Test the sign up flow
- ✅ Login with same account  
- ✅ Signout functionality
- ✅ Change Password feature
- ✅ End-to-End user flow automation

---

## 📹 Demo Video

### 🎥 Test Execution Video
The complete test execution video is available at: `cypress/videos/fullUserFlow.cy.js.mp4`

*Watch the complete test execution demonstrating all user flows including registration, login, sign-out, and password change functionality.*

**Note**: The video file (21MB) shows the full automation in action with Cypress Test Runner and Magento website interaction.

---

## 🏗️ Project Structure

```
Automation Tools/
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 📄 fullUserFlow.cy.js          # Main test file
│   ├── 📁 support/
│   │   └── 📁 pages/                       # Page Object Model
│   │       ├── 📄 SignUpPage.js
│   │       ├── 📄 LoginPage.js
│   │       ├── 📄 AccountPage.js
│   │       └── 📄 PasswordChangePage.js
│   ├── 📁 fixtures/
│   │   └── 📄 testData.json               # Test data
│   ├── 📁 screenshots/                    # Test screenshots
│   └── 📁 videos/                         # Test recordings
├── 📁 test-cases/
│   └── 📄 test-cases.xlsx                 # Test cases documentation
├── 📄 README.md
├── 📄 package.json
└── 📄 cypress.config.js
```

---

## 🛠️ Technology Stack

- **Framework**: Cypress 13.17.0
- **Language**: JavaScript
- **Design Pattern**: Page Object Model (POM)
- **Test Runner**: Cypress Test Runner
- **Browser**: Electron 118 (Headless)
- **Node.js**: v22.12.0

---

## 📋 Test Cases Coverage

| Test Case ID | Description | Status |
|--------------|-------------|--------|
| TC001 | User Registration | ✅ PASS |
| TC002 | User Login | ✅ PASS |
| TC003 | User Sign Out | ✅ PASS |
| TC004 | Password Change | ✅ PASS |
| TC005 | Full User Flow (End-to-End) | ✅ PASS |

*Detailed test cases available in `test-cases/test-cases.xlsx`*

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd Automation-Tools
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Open Cypress Test Runner**
   ```bash
   npx cypress open
   ```

4. **Run Tests**
   ```bash
   # Run all tests
   npx cypress run
   
   # Run specific test file
   npx cypress run --spec cypress/e2e/fullUserFlow.cy.js
   
   # Run in headed mode (with browser UI)
   npx cypress run --headed
   ```

---

## 🧪 Test Execution

### Running Individual Test Cases

```bash
# User Registration Test
npx cypress run --spec cypress/e2e/signup.cy.js

# User Login Test  
npx cypress run --spec cypress/e2e/login.cy.js

# Password Change Test
npx cypress run --spec cypress/e2e/passwordChange.cy.js

# Full End-to-End Flow
npx cypress run --spec cypress/e2e/fullUserFlow.cy.js
```

### Test Results
- **Execution Time**: ~1.5 minutes for full flow
- **Success Rate**: 100% (All tests passing)
- **Coverage**: Complete user journey automation

---

## 🏛️ Page Object Model (POM) Implementation

### Page Classes

#### 1. SignUpPage.js
```javascript
class SignUpPage {
    // Registration form elements and methods
    fillRegistrationForm(firstName, lastName, email, password)
    submitRegistration()
    verifyRegistrationSuccess()
}
```

#### 2. LoginPage.js
```javascript
class LoginPage {
    // Login form elements and methods
    fillLoginForm(email, password)
    submitLogin()
    verifyLoginSuccess()
}
```

#### 3. AccountPage.js
```javascript
class AccountPage {
    // Account management methods
    navigateToAccountEdit()
    signOut()
    verifyAccountPage()
}
```

#### 4. PasswordChangePage.js
```javascript
class PasswordChangePage {
    // Password change functionality
    enablePasswordChange()
    fillPasswordForm(currentPassword, newPassword)
    submitPasswordChange()
    verifyPasswordChange()
}
```

---

## 🔧 Key Features

### ✅ Robust Element Selection
- Uses `.filter(':visible')` for reliable element selection
- Implements `.eq(0)` for multiple element handling
- Dynamic email generation to avoid conflicts

### ✅ Error Handling
- Comprehensive wait strategies
- Proper assertions and validations
- Graceful handling of dropdown menus

### ✅ Cross-Browser Compatibility
- Tested in headless mode
- Compatible with Electron browser
- Responsive element selection

### ✅ Test Data Management
- Dynamic test data generation
- Fixture-based data sharing
- Unique email addresses for each test run

---

## 🎯 Test Scenarios

### 1. User Registration Flow
- Navigate to registration page
- Fill registration form with valid data
- Submit form and verify account creation
- **Expected**: Account created successfully

### 2. User Login Flow
- Navigate to login page
- Enter valid credentials
- Submit login form
- **Expected**: User logged in successfully

### 3. User Sign Out Flow
- Click welcome dropdown menu
- Select "Sign Out" option
- Verify sign out confirmation
- **Expected**: User signed out successfully

### 4. Password Change Flow
- Navigate to account edit page
- Enable password change checkbox
- Enter current and new passwords
- Save changes and verify
- **Expected**: Password changed successfully

### 5. Complete End-to-End Flow
- Execute all above flows in sequence
- Verify each step completion
- **Expected**: Complete user journey successful

---

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Total Test Cases | 5 |
| Pass Rate | 100% |
| Average Execution Time | 1.5 minutes |
| Framework | Cypress 13.17.0 |
| Browser | Electron 118 |

---

## 🔍 Troubleshooting

### Common Issues & Solutions

1. **Element Not Found**
   ```javascript
   // Use more specific selectors
   cy.get('button[title="Create an Account"]').should('be.visible')
   ```

2. **Dropdown Not Visible**
   ```javascript
   // Force dropdown visibility
   cy.get('.customer-menu').invoke('show')
   ```

3. **Multiple Elements**
   ```javascript
   // Use filter and index
   cy.get('.customer-welcome').filter(':visible').eq(0)
   ```

---

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Support

For questions or issues:
- Create an issue in the repository
- Check the Cypress documentation
- Review test logs and screenshots
* 
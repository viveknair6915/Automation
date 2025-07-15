import pytest
import time
import random
import os
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.signup_page import SignupPage
from pages.login_page import LoginPage
from pages.account_page import AccountPage
from pages.change_password_page import ChangePasswordPage

CREDENTIALS_FILE = 'test_cases/credentials.txt'
FIRSTNAME = 'Test'
LASTNAME = 'User'
PASSWORD = 'Test@1234'
NEW_PASSWORD = 'Test@5678'

# Helper to persist credentials
def save_credentials(email, password):
    with open(CREDENTIALS_FILE, 'w') as f:
        f.write(f'{email}\n{password}')

def load_credentials():
    with open(CREDENTIALS_FILE, 'r') as f:
        lines = f.read().splitlines()
        return lines[0], lines[1]

@pytest.mark.order(1)
def test_signup(driver):
    # Generate unique email
    email = f'testuser_{int(time.time())}_{random.randint(1000,9999)}@example.com'
    signup = SignupPage(driver)
    signup.go_to_signup()
    signup.fill_signup_form(FIRSTNAME, LASTNAME, email, PASSWORD)
    signup.submit()
    # Wait for account page or success message
    WebDriverWait(driver, 10).until(
        lambda d: 'Thank you for registering' in d.page_source or 'My Account' in d.title
    )
    save_credentials(email, PASSWORD)
    assert True

@pytest.mark.order(2)
def test_login(driver):
    email, password = load_credentials()
    login = LoginPage(driver)
    login.go_to_login()
    login.fill_login_form(email, password)
    login.submit()
    # Wait for account page or welcome message
    WebDriverWait(driver, 10).until(
        lambda d: 'My Account' in d.title or 'Welcome' in d.page_source
    )
    assert True

@pytest.mark.order(3)
def test_signout(driver):
    email, password = load_credentials()
    # Login first
    login = LoginPage(driver)
    login.go_to_login()
    login.fill_login_form(email, password)
    login.submit()
    # Wait for account page
    WebDriverWait(driver, 10).until(lambda d: 'My Account' in d.title or 'Welcome' in d.page_source)
    # Open account menu and sign out
    try:
        # Wait for menu toggle to be clickable
        menu_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, 'button[data-action="customer-menu-toggle"]'))
        )
        driver.execute_script("arguments[0].scrollIntoView();", menu_btn)
        menu_btn.click()
        # Wait for Sign Out link
        signout_link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, 'Sign Out'))
        )
        driver.execute_script("arguments[0].scrollIntoView();", signout_link)
        signout_link.click()
    except Exception as e:
        # Try JS click as fallback
        driver.execute_script("arguments[0].click();", menu_btn)
        driver.execute_script("arguments[0].click();", signout_link)
    # Wait for sign out confirmation
    WebDriverWait(driver, 10).until(
        lambda d: 'You are signed out' in d.page_source or 'Sign In' in d.page_source
    )
    assert True

@pytest.mark.order(4)
def test_change_password(driver):
    email, password = load_credentials()
    # Login first
    login = LoginPage(driver)
    login.go_to_login()
    login.fill_login_form(email, password)
    login.submit()
    WebDriverWait(driver, 10).until(lambda d: 'My Account' in d.title or 'Welcome' in d.page_source)
    # Go to change password page
    driver.get('https://magento.softwaretestingboard.com/customer/account/edit/')
    # Wait for checkbox to be clickable
    change_pw_checkbox = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, 'change-password'))
    )
    driver.execute_script("arguments[0].scrollIntoView();", change_pw_checkbox)
    try:
        change_pw_checkbox.click()
    except Exception:
        driver.execute_script("arguments[0].click();", change_pw_checkbox)
    # Fill change password form
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'current-password'))
    )
    driver.find_element(By.ID, 'current-password').send_keys(password)
    driver.find_element(By.ID, 'password').send_keys(NEW_PASSWORD)
    driver.find_element(By.ID, 'password-confirmation').send_keys(NEW_PASSWORD)
    # Save
    save_btn = driver.find_element(By.CSS_SELECTOR, 'button[title="Save"]')
    driver.execute_script("arguments[0].scrollIntoView();", save_btn)
    save_btn.click()
    # Wait for confirmation
    WebDriverWait(driver, 10).until(
        lambda d: 'You saved the account information' in d.page_source or 'My Account' in d.title
    )
    assert True 
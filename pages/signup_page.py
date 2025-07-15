from selenium.webdriver.common.by import By
from .base_page import BasePage

class SignupPage(BasePage):
    def go_to_signup(self):
        self.driver.get('https://magento.softwaretestingboard.com/customer/account/create/')

    def fill_signup_form(self, firstname, lastname, email, password):
        self.type(By.ID, 'firstname', firstname)
        self.type(By.ID, 'lastname', lastname)
        self.type(By.ID, 'email_address', email)
        self.type(By.ID, 'password', password)
        self.type(By.ID, 'password-confirmation', password)

    def submit(self):
        self.click(By.CSS_SELECTOR, 'button[title="Create an Account"]') 
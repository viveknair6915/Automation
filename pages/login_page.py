from selenium.webdriver.common.by import By
from .base_page import BasePage

class LoginPage(BasePage):
    def go_to_login(self):
        self.driver.get('https://magento.softwaretestingboard.com/customer/account/login/')

    def fill_login_form(self, email, password):
        self.type(By.ID, 'email', email)
        self.type(By.ID, 'pass', password)

    def submit(self):
        self.click(By.ID, 'send2') 
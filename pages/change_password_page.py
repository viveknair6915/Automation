from selenium.webdriver.common.by import By
from .base_page import BasePage

class ChangePasswordPage(BasePage):
    def go_to_change_password(self):
        self.driver.get('https://magento.softwaretestingboard.com/customer/account/edit/') 
from selenium.webdriver.common.by import By
from .base_page import BasePage

class AccountPage(BasePage):
    def go_to_account(self):
        self.driver.get('https://magento.softwaretestingboard.com/customer/account/') 
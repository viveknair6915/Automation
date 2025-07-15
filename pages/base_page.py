from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def find(self, by, value):
        return self.wait.until(EC.presence_of_element_located((by, value)))

    def click(self, by, value):
        self.find(by, value).click()

    def type(self, by, value, text):
        elem = self.find(by, value)
        elem.clear()
        elem.send_keys(text)

    def get_text(self, by, value):
        return self.find(by, value).text 
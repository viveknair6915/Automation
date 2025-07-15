import pytest
from selenium import webdriver
import os

def pytest_addoption(parser):
    parser.addoption('--headless', action='store_true', help='Run browser in headless mode')

@pytest.fixture(scope='function')
def driver(request):
    headless = request.config.getoption('--headless')
    options = webdriver.ChromeOptions()
    if headless:
        options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    driver.maximize_window()
    yield driver
    if request.node.rep_call.failed:
        screenshot_dir = 'screenshots'
        os.makedirs(screenshot_dir, exist_ok=True)
        screenshot_path = os.path.join(screenshot_dir, f'{request.node.name}.png')
        driver.save_screenshot(screenshot_path)
    driver.quit()

@pytest.hookimpl(hookwrapper=True, tryfirst=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    rep = outcome.get_result()
    setattr(item, f'rep_{rep.when}', rep) 
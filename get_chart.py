import requests
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

options = Options()
def download_div_image(url, div_selector, filename):
    driver = webdriver.Chrome(options=options)
    driver.get(url)
    driver.execute_script("document.body.style.zoom='100%'")
    wait = WebDriverWait(driver, 40)
    element = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, div_selector)))
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', element) 

    element.screenshot(filename)
    driver.quit()

url = "https://ratings.aoe2.se/?team_one=439001-6237950-18660623-6446904&team_two="
div_selector = "#random_map_histogram"
filename = "1v1RM.png"

download_div_image(url, div_selector, filename)

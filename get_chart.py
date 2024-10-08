import requests
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
options.add_argument('full_page_screenshot=True')
def download_div_image(url, div_selector, filename):
    """Downloads an image of a specific <div> element from a webpage.

    Args:
        url: The URL of the webpage.
        div_selector: The CSS selector for the <div> element.
        filename: The desired filename for the downloaded image.
    """

    # Load the webpage using Selenium
    driver = webdriver.Edge(options=options)  # Replace with your preferred WebDriver
    driver.get(url)

    # Wait for the <div> element to be visible
    wait = WebDriverWait(driver, 10)  # Adjust timeout as needed
    div_element = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, div_selector)))

    # Take a screenshot of the <div> element
    div_element.screenshot(filename)

    # Close the browser
    driver.quit()

# Example usage
url = "https://ratings.aoe2.se/?team_one=439001-6237950-18660623-6446904&team_two="
div_selector = "#random_map_histogram"  # Replace with the actual CSS selector
filename = "1v1RM.png"

download_div_image(url, div_selector, filename)

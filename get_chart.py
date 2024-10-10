import Screenshot
from selenium import webdriver
from selenium.webdriver.common.by import By

ob = Screenshot.Screenshot()
driver = webdriver.Chrome()
url = "https://ratings.aoe2.se/?team_one=439001-6237950-18660623&team_two="
driver.get(url)

element = driver.find_element(By.ID, 'random_map_histogram')
img_url = ob.get_element(driver, element, save_path=r'.', image_name='1v1RM.png')
print(img_url)
driver.close()
driver.quit()

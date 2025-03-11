import {test,expect} from "@playwright/test"
import exp from "constants";
import { Network } from "inspector/promises";

test.describe.serial('Test Suite used for the Locators', () => {

   /* let page;
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('http://www.automationpractice.pl/index.php');
    })*/
    test.beforeEach(async ({ page }) => {

        await page.goto('http://www.automationpractice.pl/index.php');
        
    })
    test('Validate the Title of the page ', async ({ page }) => {

        const titleText = page.getByTitle('My Shop').nth(0)
        await expect(titleText).toBeVisible();
        
    })

    test('Validate the Ecommerce page ', async ({ page }) => {

        const callNow = page.locator('//span[@class="shop-phone"]')
        console.log(callNow)
        await expect(callNow).toHaveText('Call us now: 0123-456-789')
            
    })

    test('Verify the image is available', async ({ page }) => {

        const bannerImg = page.locator('//a[@href="http://www.automationpractice.pl/"]//img[@class="img-responsive"]')
        await expect(bannerImg).toBeVisible();

    })

    test('Verify the Contact Us Page is redirecting to respective page', async ({ page }) => {

        const contUs = page.locator('#contact-link');

        await expect(contUs).toBeEnabled() 
    })

    test('Verify the woman section for the shopping', async ({ page }) => {

        const womanDress = await page.locator('//a[@title="Women"]');

        await womanDress.click();

        const womanTitle = await page.locator('//span[@class="cat-name"]') 

       // await expect.soft(locator('.test')).toContainText('Test');//soft assertion

        await expect(womanTitle).toContainText('Women');

    })
    
})

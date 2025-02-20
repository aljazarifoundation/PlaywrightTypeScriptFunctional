import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

// Define credentials
const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';
const INVALID_PASSWORD = 'wrong_password';

// Base URL for Sauce Demo
const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Sauce Demo Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        allure.label('feature', 'Login'); // ✅ Allure feature
        await page.goto(BASE_URL);
    });

    test('Valid login', async ({ page }) => {
        allure.label('story', 'Valid Login'); // ✅ Allure story

        await allure.step('Enter valid username and password', async () => {
            await page.fill('#user-name', VALID_USERNAME);
            await page.fill('#password', VALID_PASSWORD);
            await page.click('#login-button');

            // ✅ Attach screenshot
            const screenshot = await page.screenshot();
            allure.attachment('Step Screenshot', screenshot, 'image/png');
        });

        await allure.step('Verify login success', async () => {
            await expect(page.locator('.title')).toHaveText('Products');
            await expect(page.url()).toContain('/inventory.html');

            // ✅ Attach screenshot after login
            const screenshot = await page.screenshot();
            allure.attachment('Login Success Screenshot', screenshot, 'image/png');
        });
    });

    test('Invalid login', async ({ page }) => {
        allure.label('story', 'Invalid Login');

        await allure.step('Enter valid username and incorrect password', async () => {
            await page.fill('#user-name', VALID_USERNAME);
            await page.fill('#password', INVALID_PASSWORD);
            await page.click('#login-button');

            // ✅ Attach screenshot
            const screenshot = await page.screenshot();
            allure.attachment('Invalid Login Screenshot', screenshot, 'image/png');
        });

        await allure.step('Verify login failure message', async () => {
            await expect(page.locator('[data-test="error"]'))
                .toHaveText('Epic sadface: Username and password do not match any user in this service');

            // ✅ Attach screenshot of error message
            const screenshot = await page.screenshot();
            allure.attachment('Error Message Screenshot', screenshot, 'image/png');
        });
    });
});
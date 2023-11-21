import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
	page: Page;
	url: string;
	usernameInput: Locator;
	passwordInput: Locator;
	loginBtn: Locator;

	constructor(driver: Page) {
		this.page = driver;
		this.url = 'https://www.saucedemo.com/';
		// Selectors para PW:
		this.usernameInput = this.page.locator('[data-test="username"]');
		this.passwordInput = this.page.locator('[data-test="password"]');
		this.loginBtn = this.page.locator('[type="submit"]');
	}

	async enterUsername() {
		await this.usernameInput.fill(process.env.example_username);
	}

	async enterPassword() {
		await this.passwordInput.fill(process.env.example_password);
	}

	async clickOnLoginBtn() {
		await this.loginBtn.click();
	}

	//todo: Login Workflow Actions:
	async LoginSession() {
		//*Open Browser baseUrl
		await this.page.goto(this.url);
		//* Move to Login Page.

		//*1: Ingresar texto en Username:
		await this.enterUsername();
		//*2: Ingresar texto en Password:
		await this.enterPassword();
		//*3: Hacer click en botón LOGIN:
		await this.clickOnLoginBtn();
		//*4: Should be logged in.
		const url = this.page.url();
		expect(url).toContain(process.env.example_endpoint);
	}
}
//?Otro ejemplo de POM
export class Navigationbar {}

import { LoginPage as TestLogin } from '@pages/AdvanceTest.Page';

import { test as driver, request } from '@playwright/test';

const test = driver.extend<{
	testlogin: TestLogin;
}>({
	//todo: Le digo a PW que use los PageObjects con una nueva instancia (new):
	//* Cada vez que llame el nombre de la variable,
	//* se activa la función asíncrona que usa una nueva instancia del PageObject Importado.

	testlogin: async ({ page }, use) => {
		await use(new TestLogin(page));
	},
});

export { test };
// Main utilities:
export const suite = test.describe;
export const expect = test.expect;
export const api = request;
// Hooks:
export const background = test.beforeAll;
export const prc = test.beforeEach;
export const post = test.afterEach;
export const close = test.afterAll;

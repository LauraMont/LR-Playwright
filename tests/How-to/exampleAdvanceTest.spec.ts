import { suite, expect, test } from '@pages/TestBase';
//suite: test.describe
//expect : test.expect
suite('TD-001 | Iniciar sesion prueba', () => {
	//?beforeEach es hook, comienza antes de cada prueba
	test('TC1:login saucedemo', async ({ testlogin, page }) => {
		//?con goto voy a la url indicada
		await page.goto(testlogin.url);
		await testlogin.enterUsername();
		await testlogin.enterPassword();
		await testlogin.clickOnLoginBtn();
		const url = page.url();
		await expect(url).toContain(process.env.example_endpoint);
	});
});

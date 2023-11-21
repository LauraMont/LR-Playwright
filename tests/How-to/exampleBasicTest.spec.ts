import { test, expect } from '@playwright/test';
import { randomNumberByRange, nombreRandom } from '@utils/generate.Data';

test.describe('TD-001 | Iniciar sesion prueba', () => {
	test('TC1:login saucedemo', async ({ page }) => {
		//?con goto voy a la url indicada
		await page.goto('https://www.saucedemo.com/');
		//?fill ingreso texto en un input
		await page.locator('[data-test="username"]').fill('standard_user');
		await page.locator('[data-test="password"]').fill('secret_sauce');
		await page.locator('[type="submit"]').click();
		console.log(randomNumberByRange(3, 6), nombreRandom());
		const url = page.url();
		await expect(url).toContain('inventory');
	});
});

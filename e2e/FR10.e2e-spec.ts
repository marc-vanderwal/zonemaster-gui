const { test, expect } = require('@playwright/test');

import { goToHome, clearBrowserCache } from './utils/app.utils';

test.describe('Zonemaster test FR10 - [On launching the URL opens with a default simple view]', () => {
  test.beforeEach(async ({ page }) => {
    await goToHome(page);
    await clearBrowserCache(page);
  });

  test('should have [Run domain test] label visible', async ({ page }) => {
    await expect(page.locator('h1', { hasText: 'Run domain test'})).toBeVisible();
  });

  test('should have [Options] label visible and NOT selected', async ({ page }) => {
    await expect(page.locator('label', { hasText: 'Options' })).toBeVisible();

    await expect(page.locator('#advanced-toggle')).toHaveAttribute('aria-expanded', 'false');
  });


  test('should have [Nameservers label] NOT visible', async ({ page }) => {
    await expect(page.locator('h4', { hasText: 'Nameservers'})).toBeHidden();
  });

  test('should have [DS records label] NOT visible', async ({ page }) => {
    await expect(page.locator('h4', { hasText: 'Delegation Signers (DS records)'})).toBeHidden();
  });
});

// @ts-check
import { test, expect } from '@playwright/test'
import { ENDPOINT_CAT_IMAGE } from '../src/Contanst'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await img.getAttribute('src')

  await expect(textContext?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(ENDPOINT_CAT_IMAGE)).toBeTruthy()
})

test('app click button for change random fac and image cat', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')
  const button = await page.getByRole('button')

  const firstTextContext = await text.textContent()
  const firImageUrl = await img.getAttribute('src')

  await button.click()
  await page.waitForTimeout(1000)

  const secondTextContext = await text.textContent()
  const secondImageUrl = await img.getAttribute('src')

  await expect(firstTextContext).not.toEqual(secondTextContext)
  await expect(firImageUrl).not.toEqual(secondImageUrl)
})

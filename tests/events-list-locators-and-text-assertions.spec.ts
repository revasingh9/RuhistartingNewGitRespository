import { test, expect } from '@playwright/test'


test('events-list-locators-and-text-assertions', async ({ page }) => {
    
    await page.goto('/login')
    await page.waitForURL(/\/login/)
    await (page.getByPlaceholder('you@email.com')).waitFor({ state: 'visible' })
    await (page.getByPlaceholder('you@email.com')).fill('')
    await page.getByRole('textbox', { name: "email" }).waitFor({ state: "visible" })
    await page.getByRole('textbox', { name: "email" }).fill('revasingh9@yahoo.in')
    await page.getByRole('textbox', { name: "password" }).waitFor({ state: "visible" })
    await page.getByRole('textbox', { name: "password" }).fill('Mall##ika30')
     await page.getByRole('button',{name:"Sign In"}).waitFor({state: "visible"})
    await page.getByRole('button',{name:"Sign In"}).click()

    expect(page.locator('.text-lg.font-bold.text-gray-900.tracking-tight').filter({hasText:'EventHub'}))
    // page.getByText('EventHub', { exact: true })
    // page.getByRole('heading', { name: 'EventHub' })
    // page.locator('.text-lg.font-bold', { hasText: 'EventHub' })

    await page.getByRole('link',{name:"Browse Events →"}).click()
    await page.getByRole('textbox',{name:"Search events, venues…"}).fill("World")
   const allCategories= page.locator('.w-full.px-3.py-2.rounded-lg').nth(1)
   await allCategories.selectOption('Conference')
   await  page.locator('.w-full.px-3.py-2.rounded-lg').nth(2).waitFor({state:"visible"})
      const allCities= page.locator('.w-full.px-3.py-2.rounded-lg').nth(2)
     
   await allCities.selectOption('Hyderabad')
   await page.waitForLoadState('networkidle')

   //await page.getByTestId('event-card').waitFor({state:"visible"})
   expect(page.getByTestId('event-card')).toHaveCount(1)
   await expect( page.getByTestId('event-card').getByRole("heading",{name:'World Tech Summit'})).toContainText('World Tech Summit')
   const totalSeatLeft = page.getByTestId('event-card').locator('.text-xs.font-bold.text-amber-600')
   const getseatText = (await totalSeatLeft.innerText()) 
  const parsednumberFromSeatText = parseInt(getseatText,10)
  //count seatcount = Number(getseatText.match(/\d+\)?.[0])
  console.log(parsednumberFromSeatText)
  expect(parsednumberFromSeatText).toBeGreaterThan(0)
  const eventPrice = page.getByTestId('event-card').locator('.text-lg.font-bold.text-indigo-700')
  const eventPriceRead = await eventPrice.innerText()
  console.log(eventPrice)
  const parseDollarSign =  eventPriceRead.match(/\$/)?.[0] ?? ''
  console.log(parseDollarSign)
})

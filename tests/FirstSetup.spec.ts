import {test,Browser,expect} from '@playwright/test'


test('', async({browser})=> {

    ///const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('/login')
    await page.waitForURL(/\/login/)
    await page.getByRole('heading',{name:'Sign in to EventHub'}).waitFor({state:'visible'})

    expect(page.getByRole('heading',{name:'Sign in to EventHub'})).toContainText('Sign in to EventHub')
    await (page.getByPlaceholder('you@email.com')).waitFor({state:'visible'})
    expect(page.getByPlaceholder('you@email.com')).toBeVisible()
    await (page.getByRole('button',{name:"Sign In"}).waitFor({state:'visible'}))
       
    expect(page.getByRole('button',{name:"Sign In"})).toBeVisible()

})

test('@smoke',async({page})=> {

    // const context = await browser.newContext()
    // const page = await context.newPage()
    await page.goto('/login')
    await page.waitForURL(/\/login/)
    await page.getByRole('textbox',{name:"password"}).waitFor({state:'visible'})
    expect(page.getByRole('textbox',{name:"password"})).toBeVisible()
    await (page.getByRole('heading',{name:'Sign in to EventHub'}).waitFor({state:'visible'}))

    expect(page.getByRole('heading',{name:'Sign in to EventHub'})).toBeVisible()


})
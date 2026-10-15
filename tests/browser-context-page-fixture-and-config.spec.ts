import { firefox,chromium,expect,test } from "@playwright/test"


test(" ",async() => {
    const chromeBrowser = await chromium.launch({headless :false})
    const chromeContext = await chromeBrowser.newContext()
    const chromePage = await chromeContext.newPage()
    await chromePage.goto('/login')
    await chromePage.waitForURL(/\/login/)
     await chromePage.getByRole('heading',{name:"Sign in to EventHub"}).waitFor({state:'visible'})
    expect(chromePage.getByRole('heading',{name:"Sign in to EventHub"})).toBeVisible()
    await chromePage.getByPlaceholder('you@email.com').waitFor({state:'visible'})
    expect(chromePage.getByPlaceholder('you@email.com')).toBeVisible()
    await chromePage.getByRole('button',{name:"Sign In"}).waitFor({state: "visible"})
    expect( chromePage.getByRole('button',{name:"Sign In"})).toBeVisible()


    const firefoxBrowser = await firefox.launch({headless :false})
    const firefoxContext = await firefoxBrowser.newContext()
    const firefoxPage = await firefoxContext.newPage()
    await firefoxPage.goto('/login')
    await firefoxPage.waitForURL(/\/login/)

    await firefoxPage.getByRole('heading',{name:"Sign in to EventHub"}).waitFor({state:'visible'})
    expect(firefoxPage.getByRole('heading',{name:"Sign in to EventHub"})).toBeVisible()
    await firefoxPage.getByPlaceholder('you@email.com').waitFor({state:'visible'})
    expect(firefoxPage.getByPlaceholder('you@email.com')).toBeVisible()
    expect(firefoxPage.getByPlaceholder('you@email.com')).toBeEmpty()
    await firefoxPage.getByRole('button',{name:"Sign In"}).waitFor({state: "visible"})
    expect(firefoxPage.getByRole('button',{name:"Sign In"})).toBeVisible()


   
    await chromePage.close()
    await  firefoxPage.close()
})

test('',async({page})=>{
await page.goto('https://eventhub.rahulshettyacademy.com/login')
await page.getByRole('textbox',{name:"email"}).waitFor({state:"visible"})
await page.getByRole('textbox',{name:"email"}).fill('beginner@sample.com')
expect(page.getByRole('textbox',{name:"email"})).toHaveValue('beginner@sample.com')



})
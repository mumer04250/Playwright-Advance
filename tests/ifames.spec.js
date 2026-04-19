import{test,expect} from '@playwright/test'
test('iframe',async({page})=>{
    await page.goto('https://practice.expandtesting.com/iframe')
    const iframe=page.frameLocator('#email-subscribe')
    await iframe.locator('#email').fill('umer@mailinator.com')
    await iframe.locator('#btn-subscribe').click()
    

})

//Nested frames=> Phle outer frame go get krna he ,then inner frame ko then innerframe element ko
//await page.goto('https://example.com')

// nested iframe handle
// await page
//   .frameLocator('#outer')
//   .frameLocator('#inner')
//   .locator('#username')
//   .fill('umer')

// // click bhi kar sakte ho
// await page
//   .frameLocator('#outer')
//   .frameLocator('#inner')
//   .locator('#login')
//   .click()
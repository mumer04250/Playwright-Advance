import {test ,expect}  from '@playwright/test'
test ('Screenshots',async({page})=>{
    await page.goto('https://www.opencart.com/')
    await page.screenshot({path:'Screenshorts/'+Date.now()+'Homepage.png'})

})
test ('Screenshot of full page',async({page})=>{
    await page.goto('https://www.opencart.com/')
    await page.screenshot({path:'Screenshorts/'+Date.now()+'FullPage.png',fullPage:true})
})
test ('Element screenshotr',async({page})=>{
    await page.goto('https://www.opencart.com/')
    await page.locator('#marketplace img.img-responsive').first().screenshot({path:'Screenshorts/'+Date.now()+'Elementimg.png'})
})

//if we add screenshot:'on' in config file ,then it will caputure the ss for all spec file and 
//set to the results folder ,also show in html report from npx playwright show-report
//1️⃣ Screenshot on failure (🔥 MUST KNOW)

// Playwright config me:

// use: {
//   screenshot: 'only-on-failure'
// }

// 👉 Jab test fail hoga → automatic screenshot save hoga
// 👉 Real companies me ye bohat use hota hai
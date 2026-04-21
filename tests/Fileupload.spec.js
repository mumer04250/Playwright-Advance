import {test ,expect} from '@playwright/test'
test('Single file upload',async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/file-upload.php')
    const fileupload=await page.locator('#fileInput')
    await fileupload.setInputFiles('UploadFiles/Git.pdf')
})
test('Multi file Upload',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    const fileupload=await page.locator('#filesToUpload')
    await fileupload.setInputFiles(['UploadFiles/Git.pdf','UploadFiles/Playwright interview.pdf'])
})
//For removing file  pass setinputfiles  empty as
//setinptfiles([])

//////////////////////Fie Download //////////////////////////
//we use saveas method to download file

// test('File Download', async ({ page }) => {
//   await page.goto('https://example.com');

//   // download start hone ka wait
//   const downloadPromise = page.waitForEvent('download');

//   // click jo download trigger kare
//   await page.click('text=Download');

//   // download capture
//   const download = await downloadPromise;

//   // file ka naam
//   console.log(await download.suggestedFilename());

//   // file save karna
//   await download.saveAs('downloads/' + await download.suggestedFilename());
// });
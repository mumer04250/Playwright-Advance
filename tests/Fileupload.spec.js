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
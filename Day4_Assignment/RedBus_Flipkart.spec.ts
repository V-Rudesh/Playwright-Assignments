import { test } from "@playwright/test";
test(`To launch the edge & firefox`, async ({page}, testinfo) => {
    const redbusURL = `https://www.redbus.in`;
    const flipkartURL = `https://www.flipkart.com`;

    //This will fetch the browser name from playwright config file
    const browserName = testinfo.project.name;

    //If browsername is edge
    if(browserName==='edge'){
        await page.goto(`${redbusURL}`);
        //To print the Page URL
        console.log("Page URL : "+page.url());
        //To print the Page title
        console.log("Page Title : "+ await page.title());    
    }
    //If browsername is firefox
    if(browserName==='firefox'){
        await page.goto(`${flipkartURL}`);
        //To print the Page URL
        console.log("Page URL : "+page.url());
        //To print the Page title
        console.log("Page Title : "+ await page.title());
        
    }
})
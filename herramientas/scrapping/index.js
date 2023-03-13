const puppeteer =require('puppeteer')

(async () => {
    // nuestro codigo
    console.log('lanzamos navegador');
    const browser = await puppeteer.luch({headless:false});
    console.log('cerramos nav...');
    browser.close();

    console.log('navegador cerrado');
})()
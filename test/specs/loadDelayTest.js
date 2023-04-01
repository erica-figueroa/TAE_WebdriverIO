
describe('Home page Test', async() => {
    it('should navigate to Load Delays page and click buttons', () => {
      browser.url('http://uitestingplayground.com/')
      const loadDelaysLink = $('a[href="/loaddelay"]')
      loadDelaysLink.click()
  
      browser.waitUntil(async () => {
       const pageTitle = await browser.getTitle();
          return pageTitle === 'Load Delays';
      }, {
        timeout: 10000,
        timeoutMsg: 'Page did not load within 10 seconds',
        interval: 1000,
      });
    })


  it('get loadDelay page text and button', async() => {
    browser.url('http://uitestingplayground.com/loaddelay')
    const loadDelaysText = $('body section div h3');
    const Delaybutton = $('body section  div  button');
    await expect(browser).toHaveTitleContaining('Load Delay');
    await expect(loadDelaysText).toHaveTextContaining('Load Delays');
    
  });

})
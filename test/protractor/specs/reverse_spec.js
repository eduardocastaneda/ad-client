'use strict';

describe('reverse input and result', function() {
  it('Should write in reverse input and get the right translation as result', function() {
    browser.get('http://localhost:4000');
    
    element(by.model("message")).sendKeys("Jag äter mackor till frukost");

    expect(element(by.binding("reversedMessage")).getText()).toEqual('gaj retä rokcam llit tsokurf');
  });

  it('Should get right reversed message after submit', function() {
    browser.get('http://localhost:4000');

    element(by.model("message")).sendKeys("Jag äter mackor till frukost");
    var reversedText = element(by.binding("reversedMessage")).getText();
    
    element(by.buttonText("ÖVERSÄTT")).click();
    
    expect(element(by.binding("headerReversedMessage")).getText(), reversedText);
  });
});

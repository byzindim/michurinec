
 /**
  * @jest-environment jsdom
  */

const {isMobile,iconMenu} = require('./burger')


 test('device type ', ()=> {
    expect(isMobile).not.toBe({})
 })


 test('device type ', ()=> {
    expect(isMobile.any()).not.toBe({})
 })


 test('after click', ()=> {
    expect(iconMenu).not.toBe([])
 })

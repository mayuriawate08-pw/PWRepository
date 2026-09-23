import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='awatemahadev62@gmail.com'
const pass='Ganesh@94'
let invalidemail='test@gmail.com'
let errormessage='Incorrect email or password. '
let lp:LoginPage
test.beforeEach(async({page})=>
{
     lp=new LoginPage(page)
    await lp.launchUrl(url)
})
test('valid login',async({page})=>
{
    
    await lp.loginIntoApplication(email,pass)
    await expect(lp.homePageIdentifier).toBeVisible()
    
})
test('Invalid login',async({page})=>
{
    
    await lp.loginIntoApplication(invalidemail,pass)
    await expect(lp.errormessage).toBeVisible()
})
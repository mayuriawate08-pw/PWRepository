import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { excelUtils } from '../pages/excelUtils'

test('read excel data',async({page})=>
{
const data = excelUtils.getExcelData('./testdata/login.xlsx', 'login');
console.log(data);
})


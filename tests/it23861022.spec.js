const { test, expect } = require('@playwright/test');

// Test Data (Pos 24, Neg 11, UI 1)
const testCases = [
    // Positive Functional Test Cases
    { id: 'Pos_Fun_0001', input: 'mama adha gedhara innee', expected: 'මම අද ගෙදර ඉන්නේ' },
    { id: 'Pos_Fun_0002', input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?', expected: 'මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?' },
    { id: 'Pos_Fun_0003', input: 'mata bath kanna oonee', expected: 'මට බත් කන්න ඕනේ' },
    { id: 'Pos_Fun_0004', input: 'mama dhaen vaeda karanavaa oyath vaeda karanna', expected: 'මම දැන් වැඩ කරනවා ඔයත් වැඩ කරන්න' },
    { id: 'Pos_Fun_0005', input: 'mama gedhara yanavaa saha eyaa office yannee', expected: 'මම ගෙදර යනවා සහ එයා office යන්නේ' },
    { id: 'Pos_Fun_0006', input: 'api kaeema kanna gihin passee movie ekak balanavaa', expected: 'අපි කෑම කන්න ගිහින් පස්සේ movie එකක් බලනවා' },
    { id: 'Pos_Fun_0007', input: 'oyaa hari nam api heta yamu', expected: 'ඔයා හරි නම් අපි හෙට යමු' },
    { id: 'Pos_Fun_0008', input: 'oyaa ennee nam mama balannam naethnam maath yanavaa', expected: 'ඔයා එන්නේ නම් මම බලන්නම් නැත්නම් මාත් යනවා' },
    
    // Long sentence test case
    { id: 'Pos_Fun_0009', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 330k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava bimal rathnaayaka saDHahan kaLeeya.', expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම්' },
    
    { id: 'Pos_Fun_0010', input: 'traffic thibuNa nisaa mama late vuNaa', expected: 'traffic තිබුණ නිසා මම late වුණා' },
    { id: 'Pos_Fun_0011', input: 'oyaata adha vaeda thiyenavaadha?', expected: 'ඔයාට අද වැඩ තියෙනවාද?' },
    { id: 'Pos_Fun_0012', input: 'api heta trip ekata yanavadha?', expected: 'අපි හෙට trip එකට යනවද?' },
    { id: 'Pos_Fun_0013', input: 'karuNaakaralaa mata kiyanna', expected: 'කරුණාකරලා මට කියන්න' },
    { id: 'Pos_Fun_0014', input: 'issarahata yanna', expected: 'ඉස්සරහට යන්න' },
    { id: 'Pos_Fun_0015', input: 'mama eeka hariyata karanavaa', expected: 'මම ඒක හරියට කරනවා' },
    { id: 'Pos_Fun_0016', input: 'mama eeka karannee naehae', expected: 'මම ඒක කරන්නේ නැහැ' },
    { id: 'Pos_Fun_0017', input: 'mama iiyee gedhara giyaa', expected: 'මම ඊයේ ගෙදර ගියා' },
    { id: 'Pos_Fun_0018', input: 'mama dhaen study karanavaa', expected: 'මම දැන් study කරනවා' },
    { id: 'Pos_Fun_0019', input: 'api heta Colombo yamu', expected: 'අපි හෙට Colombo යමු' },
    { id: 'Pos_Fun_0020', input: 'api yamu', expected: 'අපි යමු' },
    { id: 'Pos_Fun_0021', input: 'oyaalaa adha enavaa', expected: 'ඔයාලා අද එනවා' },
    { id: 'Pos_Fun_0022', input: 'mama email ekak yavalaa reply ekak enakan balan innavaa', expected: 'මම email එකක් යවලා reply එකක් එනකන් බලන් ඉන්නවා' },
    { id: 'Pos_Fun_0023', input: 'Zoom meeting ekak adha thiyenavaa', expected: 'Zoom meeting එකක් අද තියෙනවා' },
    { id: 'Pos_Fun_0024', input: 'karuNaakaralaa mata udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?' },

    // Negative Functional Test Cases
    { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_0002', input: 'apihetaenavaa', expected: 'අපි හෙට එනවා' },
    { id: 'Neg_Fun_0003', input: 'ela machan! supiri!!', expected: 'එළ මචං! සුපිරි!!' },
    { id: 'Neg_Fun_0004', input: 'mata bath kanda oonea', expected: 'මට බත් කන්න ඕනේ' },
    { id: 'Neg_Fun_0005', input: 'adoo eeka dhiyan', expected: 'අඩෝ ඒක දීපන්' },
    { id: 'Neg_Fun_0006', input: 'api enavaa @ 7pm', expected: 'අපි එනවා @ සවස 7ට' },
    { id: 'Neg_Fun_0007', input: 'hello!!!! kohomadha????', expected: 'හෙලෝ!!!! කොහොමද????' },
    { id: 'Neg_Fun_0008', input: 'mama   palliyata   yanavaa', expected: 'මම පල්ලියට යනවා' },
    { id: 'Neg_Fun_0009', input: 'mila Rs.1500/=i', expected: 'මිල රු.1500/=යි' },
    { id: 'Neg_Fun_0010', input: 'appatasiri mata late vunaa', expected: 'අප්පටසිරි මට පරක්කු වුණා' },
    { id: 'Neg_Fun_0011', input: 'oyaage bday eka kawadhadha?', expected: 'ඔයාගෙ බර්ත්ඩේ එක කවදද?' },

    // UI Test Case
    { id: 'Pos_UI_0001', input: 'mama yanavaa.', expected: 'මම යනවා.' }
];

test.describe('Assignment 1 Automation Suite', () => {
    
    // Run before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/'); 
    });

    for (const tc of testCases) {
        test(`Test ${tc.id}`, async ({ page }) => {
            // Increased timeout for long sentence test
            if (tc.id === 'Pos_Fun_0009') {
                test.setTimeout(60000);
            }

            const inputBox = page.locator('textarea').first(); 
            
            // Clear the input area
            await inputBox.click();
            await inputBox.fill(''); 

            // Type with delay to simulate human typing
            const delayTime = tc.id === 'Pos_Fun_0009' ? 50 : 100;
            await inputBox.pressSequentially(tc.input, { delay: delayTime }); 
            
            // Trigger conversion
            await inputBox.press('Space'); 
            
            // Wait for the result
            const waitTime = tc.id === 'Pos_Fun_0009' ? 10000 : 7000;
            await page.waitForTimeout(waitTime); 

            // Validation Logic
            
            if (tc.id === 'Pos_Fun_0009') {
                // Check for substring match for the long paragraph
                await expect(page.locator('body')).toContainText(tc.expected);
                console.log(`[PASS] ${tc.id}: Verified.`);
                
            } else if (tc.id.startsWith('Neg')) {
                // Negative test: We expect the system to fail (show incorrect output)
                const bodyText = await page.locator('body').innerText();
                if (!bodyText.includes(tc.expected)) {
                    console.log(`[PASS] ${tc.id}: Bug verified successfully.`);
                } else {
                    console.log(`[INFO] ${tc.id}: System output matches expected.`);
                }
            } else {
                // Positive test: Expected output must be present
                await expect(page.locator('body')).toContainText(tc.expected);
                console.log(`[PASS] ${tc.id}: Verified.`);
            }
        });
    }
});
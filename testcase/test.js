
import { Selector, t } from "testcafe";

const customBrowsers = ['chrome', 'firefox', 'edge']; // Specify the browsers you want to test

customBrowsers.forEach(browser => {
    fixture`Login Test - ${browser}`
        .page`https://dev.deepthought.education/login`;

    test('Login test with Valid Username and Password', async () => {

        const valid_username = 'ankur001';
        const valid_password = 'F6SxA#58DgvtXCG';

        await t
            .typeText(Selector('#username'), valid_username)
            .typeText(Selector('#password'), valid_password)
            .click(Selector('#login'));
            console.log(`Logged In ${browser}`);

        await t
            .expect(Selector('h5').withExactText('Welcome to DeepThought').exists)
            .ok({timeout: 15000});
        
            console.log('Login successful');

    });

    test('Login test with invalid Username and Password', async () => {
        const invalid_username = 'wrongname001';
        const invalid_password = 'wrongpassword110';

        await t
            .typeText(Selector('#username'), invalid_username)
            .typeText(Selector('#password'), invalid_password)
            .click(Selector('#login'))
            .expect(Selector('strong').withExactText('Login Unsuccessful').exists).ok();
        console.log('Login unsuccessful');

    });
});

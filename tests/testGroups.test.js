import {test} from '@playwright/test';

test.describe("Test group 1", () => {

    test.beforeAll(async() => {
         console.log("BEFORE ALL Tests");
     });
     test.afterAll(async() => {
         console.log("AFTER ALL Tests");
     });

     test.beforeEach(async() => {
         console.log("... BEFORE EACH TEST...");
     });
     test.afterEach(async() => {
         console.log("... AFTER EACH TEST...");
     });


     test("Test case 1", async ({page}) => {
         console.log("Test case 1 logic here");
     });
     test("Test case 2", async ({page}) => {
         console.log("Test case 2 logic here");
     });
     test("Test case 3", async ({page}) => {
         console.log("Test case 3 logic here");
     });
    });
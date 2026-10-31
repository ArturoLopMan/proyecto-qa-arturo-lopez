# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright\tests\modoEstricto.spec.js >> 1. provocar strict mode violation
- Location: playwright\tests\modoEstricto.spec.js:5:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByTestId('product-name') resolved to 9 elements:
    1) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Combination Pliers </h5> aka getByTestId('product-01M6945R6MD8JMH4RMB0S157AT')
    2) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Pliers </h5> aka getByTestId('product-01M6945R6Q34A4G8VVQAMVSPES')
    3) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Bolt Cutters </h5> aka getByTestId('product-01M6945R70E7FTRM45ZNV79XBZ')
    4) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Long Nose Pliers </h5> aka getByTestId('product-01M6945R73T1P35DGV33JGFK70')
    5) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Slip Joint Pliers </h5> aka getByTestId('product-01M6945R76PEJYAN9Q3FAN2GR3')
    6) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Claw Hammer with Shock Reduction Grip </h5> aka getByTestId('product-01M6945R78MM7AXYHBYEQJWPH1')
    7) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Hammer </h5> aka getByTestId('product-01M6945R7AN80Y4SERKPC7ZVDZ')
    8) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Claw Hammer </h5> aka getByTestId('product-01M6945R7CRDV3WXTR3XWJ50NF')
    9) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Thor Hammer </h5> aka getByTestId('product-01M6945R7EFPKSWRWCKBGVE85Q')

Call log:
  - waiting for getByTestId('product-name')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - heading "Practice Software Testing - Toolshop" [level=1] [ref=e50]
      - paragraph [ref=e51]:
        - img "Banner" [ref=e52]
      - separator [ref=e53]
      - generic [ref=e54]:
        - text: Enjoyed testing this app? Level up with hands-on software testing courses.
        - link "Explore courses" [ref=e57] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io/?utm_source=pst&utm_medium=homepage&utm_campaign=app_promo
    - generic [ref=e58]:
      - generic [ref=e59]:
        - heading [level=4] [ref=e60]
        - separator [ref=e64]
        - combobox "sort" [ref=e67]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading [level=4] [ref=e68]
        - separator [ref=e72]
        - generic "ngx-slider" [ref=e74]:
          - slider "ngx-slider" [ref=e79] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e80] [cursor=pointer]
          - generic [ref=e81]: "0"
          - generic [ref=e82]: "200"
          - generic [ref=e83]: "1"
          - generic [ref=e84]: "100"
        - heading [level=4] [ref=e86]
        - separator [ref=e90]
        - generic [ref=e92]:
          - generic [ref=e93]: Search
          - textbox "Search" [ref=e94]
          - button "X" [ref=e95] [cursor=pointer]
          - button "Search" [ref=e96] [cursor=pointer]
        - heading [level=4] [ref=e97]
        - separator [ref=e101]
        - heading "By category:" [level=4] [ref=e102]
        - group "Categories" [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - checkbox "Hand Tools" [ref=e107]
              - text: Hand Tools
            - list [ref=e108]:
              - group "Categories" [ref=e109]:
                - generic [ref=e112]:
                  - checkbox "Hammer" [ref=e113]
                  - text: Hammer
                - generic [ref=e115]:
                  - checkbox "Hand Saw" [ref=e116]
                  - text: Hand Saw
                - generic [ref=e118]:
                  - checkbox "Wrench" [ref=e119]
                  - text: Wrench
                - generic [ref=e121]:
                  - checkbox "Screwdriver" [ref=e122]
                  - text: Screwdriver
                - generic [ref=e124]:
                  - checkbox "Pliers" [ref=e125]
                  - text: Pliers
                - generic [ref=e127]:
                  - checkbox "Chisels" [ref=e128]
                  - text: Chisels
                - generic [ref=e130]:
                  - checkbox "Measures" [ref=e131]
                  - text: Measures
          - generic [ref=e132]:
            - generic [ref=e133]:
              - checkbox "Power Tools" [ref=e134]
              - text: Power Tools
            - list [ref=e135]:
              - group "Categories" [ref=e136]:
                - generic [ref=e139]:
                  - checkbox "Grinder" [ref=e140]
                  - text: Grinder
                - generic [ref=e142]:
                  - checkbox "Sander" [ref=e143]
                  - text: Sander
                - generic [ref=e145]:
                  - checkbox "Saw" [ref=e146]
                  - text: Saw
                - generic [ref=e148]:
                  - checkbox "Drill" [ref=e149]
                  - text: Drill
          - generic [ref=e150]:
            - generic [ref=e151]:
              - checkbox "Other" [ref=e152]
              - text: Other
            - list [ref=e153]:
              - group "Categories" [ref=e154]:
                - generic [ref=e157]:
                  - checkbox "Tool Belts" [ref=e158]
                  - text: Tool Belts
                - generic [ref=e160]:
                  - checkbox "Storage Solutions" [ref=e161]
                  - text: Storage Solutions
                - generic [ref=e163]:
                  - checkbox "Workbench" [ref=e164]
                  - text: Workbench
                - generic [ref=e166]:
                  - checkbox "Safety Gear" [ref=e167]
                  - text: Safety Gear
                - generic [ref=e169]:
                  - checkbox "Fasteners" [ref=e170]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e172]
        - group "Brands" [ref=e173]:
          - generic [ref=e176]:
            - checkbox "ForgeFlex Tools" [ref=e177]
            - text: ForgeFlex Tools
          - generic [ref=e179]:
            - checkbox "MightyCraft Hardware" [ref=e180]
            - text: MightyCraft Hardware
          - generic [ref=e182]:
            - checkbox "vs" [ref=e183]
            - text: vs
          - generic [ref=e185]:
            - checkbox "vs" [ref=e186]
            - text: vs
          - generic [ref=e188]:
            - checkbox "vs" [ref=e189]
            - text: vs
          - generic [ref=e191]:
            - checkbox "vs" [ref=e192]
            - text: vs
        - heading "Sustainability:" [level=4] [ref=e194]
        - group "Eco-Friendly Products" [ref=e195]:
          - generic [ref=e198]:
            - checkbox "Show only eco-friendly products" [ref=e199]
            - text: Show only eco-friendly products
      - generic [ref=e200]:
        - generic [ref=e201]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e202] [cursor=pointer]':
            - /url: /product/01M6945R6MD8JMH4RMB0S157AT
            - generic [ref=e203]:
              - img "Combination Pliers" [ref=e204]
              - button "Compare" [ref=e205]
            - generic [ref=e209]:
              - heading "Combination Pliers" [level=5] [ref=e210]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e211]:
                - text: "CO₂:"
                - generic [ref=e212]: A
                - generic [ref=e213]: B
                - generic [ref=e214]: C
                - generic [ref=e215]: D
                - generic [ref=e216]: E
            - generic [ref=e217]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e219] [cursor=pointer]':
            - /url: /product/01M6945R6Q34A4G8VVQAMVSPES
            - generic [ref=e220]:
              - img "Pliers" [ref=e221]
              - button "Compare" [ref=e222]
            - generic [ref=e226]:
              - heading "Pliers" [level=5] [ref=e227]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e228]:
                - text: "CO₂:"
                - generic [ref=e229]: A
                - generic [ref=e230]: B
                - generic [ref=e231]: C
                - generic [ref=e232]: D
                - generic [ref=e233]: E
            - generic [ref=e234]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e236] [cursor=pointer]':
            - /url: /product/01M6945R70E7FTRM45ZNV79XBZ
            - generic [ref=e237]:
              - img "Bolt Cutters" [ref=e238]
              - button "Compare" [ref=e239]
            - generic [ref=e243]:
              - heading "Bolt Cutters" [level=5] [ref=e244]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e245]:
                - text: "CO₂:"
                - generic [ref=e246]: A
                - generic [ref=e247]: B
                - generic [ref=e248]: C
                - generic [ref=e249]: D
                - generic [ref=e250]: E
            - generic [ref=e251]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e253] [cursor=pointer]':
            - /url: /product/01M6945R73T1P35DGV33JGFK70
            - generic [ref=e254]:
              - img "Long Nose Pliers" [ref=e255]
              - button "Compare" [ref=e256]
            - generic [ref=e260]:
              - heading "Long Nose Pliers" [level=5] [ref=e261]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e262]:
                - text: "CO₂:"
                - generic [ref=e263]: A
                - generic [ref=e264]: B
                - generic [ref=e265]: C
                - generic [ref=e266]: D
                - generic [ref=e267]: E
            - generic [ref=e268]:
              - generic [ref=e269]: Out of stock
              - generic [ref=e270]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e271] [cursor=pointer]':
            - /url: /product/01M6945R76PEJYAN9Q3FAN2GR3
            - generic [ref=e272]:
              - img "Slip Joint Pliers" [ref=e273]
              - button "Compare" [ref=e274]
            - generic [ref=e278]:
              - heading "Slip Joint Pliers" [level=5] [ref=e279]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e280]:
                - text: "CO₂:"
                - generic [ref=e281]: A
                - generic [ref=e282]: B
                - generic [ref=e283]: C
                - generic [ref=e284]: D
                - generic [ref=e285]: E
            - generic [ref=e286]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e288] [cursor=pointer]':
            - /url: /product/01M6945R78MM7AXYHBYEQJWPH1
            - generic [ref=e289]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e290]
              - button "Compare" [ref=e291]
            - generic [ref=e295]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e296]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e297]:
                - text: "CO₂:"
                - generic [ref=e298]: A
                - generic [ref=e299]: B
                - generic [ref=e300]: C
                - generic [ref=e301]: D
                - generic [ref=e302]: E
            - generic [ref=e303]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e305] [cursor=pointer]':
            - /url: /product/01M6945R7AN80Y4SERKPC7ZVDZ
            - generic [ref=e306]:
              - img "Hammer" [ref=e307]
              - button "Compare" [ref=e308]
            - generic [ref=e312]:
              - heading "Hammer" [level=5] [ref=e313]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e314]:
                - text: "CO₂:"
                - generic [ref=e315]: A
                - generic [ref=e316]: B
                - generic [ref=e317]: C
                - generic [ref=e318]: D
                - generic [ref=e319]: E
            - generic [ref=e320]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e322] [cursor=pointer]':
            - /url: /product/01M6945R7CRDV3WXTR3XWJ50NF
            - generic [ref=e323]:
              - img "Claw Hammer" [ref=e324]
              - button "Compare" [ref=e325]
            - generic [ref=e329]:
              - heading "Claw Hammer" [level=5] [ref=e330]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e331]:
                - text: "CO₂:"
                - generic [ref=e332]: A
                - generic [ref=e333]: B
                - generic [ref=e334]: C
                - generic [ref=e335]: D
                - generic [ref=e336]: E
            - generic [ref=e337]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e339] [cursor=pointer]':
            - /url: /product/01M6945R7EFPKSWRWCKBGVE85Q
            - generic [ref=e340]:
              - img "Thor Hammer" [ref=e341]
              - button "Compare" [ref=e342]
            - generic [ref=e346]:
              - heading "Thor Hammer" [level=5] [ref=e347]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e348]:
                - text: "CO₂:"
                - generic [ref=e349]: A
                - generic [ref=e350]: B
                - generic [ref=e351]: C
                - generic [ref=e352]: D
                - generic [ref=e353]: E
            - generic [ref=e354]: $11.14
        - navigation [ref=e358]:
          - list [ref=e359]:
            - listitem [ref=e360]:
              - button "Previous": «
            - listitem [ref=e361]:
              - button "Page-1" [ref=e362] [cursor=pointer]: "1"
            - listitem [ref=e363]:
              - button "Page-2" [ref=e364] [cursor=pointer]: "2"
            - listitem [ref=e365]:
              - button "Page-3" [ref=e366] [cursor=pointer]: "3"
            - listitem [ref=e367]:
              - button "Page-4" [ref=e368] [cursor=pointer]: "4"
            - listitem [ref=e369]:
              - button "Page-5" [ref=e370] [cursor=pointer]: "5"
            - listitem [ref=e371]:
              - button "Page-6" [ref=e372] [cursor=pointer]: "6"
            - listitem [ref=e373]:
              - button "Page-7" [ref=e374] [cursor=pointer]: "7"
            - listitem [ref=e375]:
              - button "Page-8" [ref=e376] [cursor=pointer]: "8"
            - listitem [ref=e377]:
              - button "Next" [ref=e378] [cursor=pointer]: »
  - contentinfo [ref=e380]:
    - generic [ref=e382]:
      - generic [ref=e383]: Learn & Explore
      - generic [ref=e384]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e386] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e389]:
            - generic [ref=e390]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e392] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e395]:
            - generic [ref=e396]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e398] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e401]:
            - generic [ref=e402]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=e403]:
      - generic [ref=e404]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=e405] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e406] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e407] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e408]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=e410] [cursor=pointer]
  - button "Show live shop activity" [ref=e414] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.use({ testIdAttribute: 'data-test' });
  4  | 
  5  | test('1. provocar strict mode violation', async ({ page }) => {
  6  |   await page.goto('https://practicesoftwaretesting.com');
> 7  |   await page.getByTestId('product-name').click();  
     |                                          ^ Error: locator.click: Error: strict mode violation: getByTestId('product-name') resolved to 9 elements:
  8  | });
  9  | test('3. solución .first', async ({ page }) => {
  10 |   await page.goto('https://practicesoftwaretesting.com');  
  11 |   await page.getByTestId('product-name').first().click();
  12 |   await expect(page).toHaveURL(/\/product\//);
  13 | });
  14 | 
  15 | test('4. solución .filter', async ({ page }) => {
  16 |   await page.goto('https://practicesoftwaretesting.com');
  17 |   await page.getByTestId('product-name').filter({ hasText: 'Pliers' }).first().click();
  18 |   await expect(page).toHaveURL(/\/product\//);
  19 | });
```
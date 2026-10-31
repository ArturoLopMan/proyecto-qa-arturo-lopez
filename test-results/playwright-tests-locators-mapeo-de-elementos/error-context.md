# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: playwright\tests\locators.spec.js >> mapeo de elementos
- Location: playwright\tests\locators.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Locators')
Expected: visible
Error: strict mode violation: getByText('Locators') resolved to 3 elements:
    1) <li aria-current="page" class="breadcrumb-item active">Locators Test page</li> aka getByText('Locators Test page', { exact: true })
    2) <h1>Locators Test page for Automation Testing</h1> aka getByRole('heading', { name: 'Locators Test page for' })
    3) <p class="text-muted">…</p> aka getByText('This page provides examples')

Call log:
  - Expect "toBeVisible" getByText('Locators') with timeout 5000ms
  - waiting for getByText('Locators')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Get Certified" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [ref=f3e1]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=9&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
            - generic [ref=f3e10]:
              - generic [ref=f3e12]:
                - link [ref=f3e16] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=19&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
                - generic [ref=f3e19]:
                  - link "See Photo Become 3D" [ref=f3e23] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=0&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
                  - link "See how AI makes 3D models in seconds. No skills, no install." [ref=f3e27] [cursor=pointer]:
                    - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=7&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
              - generic [ref=f3e30]:
                - link:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
                - link "Meshy.AI" [ref=f3e32] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=1&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
                - link "Open" [ref=f3e34] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
                - link [ref=f3e35] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Ck0u_c_vlaq2oL_TL5OUP7aaNgQej4ty_igHsqoOQ6RWPqeaSjw4QASCVlJmjAWDdBKABiMvZninIAQmpAuIwyQOKK4Q-qAMByAPLBKoE-QFP0HgdZFRcVXADCk9ZQGFJ2flQ-WzQezAptfXGfK5SggU-zKRGA66Ty8382hzG8MmeeAyHGIfsUU8ZjvaVTEERRU-LoPEOeUW22pDa5y_nWVZNnIqhhe2PINgssHSsxuNld7yDi4-Z45WVcDeiL2BIbtVqw3YL6JAwEtYim-JMj0Fd7WBtwQyiuDziT7U5VVLNMJ9iXQi6IbHhVps4vdVLYMRaYTVE47rby0u_CmGkfMsJ8pqhe09lm1rfCURNnF4SHBZZzrVA2iukwiukp97gcWpmQ7khgSQNhMTLZ1_0hmEmK1H6_M-Q2ntqrpSRUNNH5RWe5PXTPobABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAep67ECqAenzLECqAf98bECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WMTs7IC85JcDYAGxCfrBdxB9IHSNgAoBmAsByAsBgAwBogwIKgYKBPbysQKqDQJQRcgNAeoNEwj0su2AvOSXAxX0JbkGHW1TI3DwDQKIDgmwDriC24QZ2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAFAHC0ESCjQ5NzAyMTIyMjEYAbIYCRIC6FgYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE&num=1&cid=CAQShwIAQM4h3D-Wp4iWqBbcDS-jSgc-TzoAqvGzc13wBB7HhlhmooG40FzW14jt4-OheD49HjGKnMW5vQ8rwaZ9KGsojSqIo151tIOxvfNbV3DkjUcCYAM-x7HLmmJkVzI03Xc5UgQzH5yX1H3yS9hvrsX-vj0oBLH4FoIEOE7hyrAd8_V8n_Mn4XQJV6M9KgIIiliVvqsT5X5OS4E-sTwYo5PIIkdQduAXxpN4yII81f5JcgeDBMr4hmiupFf3o7YnJgWCQpuCJRPXxPbilLNg0yEpHXtLozfzDQShsVPsU0wQbP8oOBAkwvjgOmqKLgG_tdgb1w2y5flQkpu_VUJx_TL95ShNiM9OPRgB&sig=AOD64_0E_VyRZThyf6p_X9PiscxuQTS2Dw&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dpmax%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI7a3tgLzklwMV9CW5Bh1tUyNwEAEYASAAEgKqr_D_BwE
          - generic [ref=f3e45] [cursor=pointer]
          - button [ref=f3e50] [cursor=pointer]
          - iframe
    - paragraph [ref=e37]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e38] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e39]:
      - insertion [ref=e41]:
        - generic [ref=e44]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e46]: Discover more
          - link "Build a Website" [ref=e47] [cursor=pointer]
          - link "Get Certified" [ref=e52] [cursor=pointer]
          - link "Hire PM Experts" [ref=e57] [cursor=pointer]
          - link "Automation practice website" [ref=e62] [cursor=pointer]
          - link "Software Testing courses" [ref=e67] [cursor=pointer]
          - link "Automation testing tools" [ref=e72] [cursor=pointer]
          - link "QA certification training" [ref=e77] [cursor=pointer]
          - link "API testing tools" [ref=e82] [cursor=pointer]
      - generic [ref=e87]:
        - generic [ref=e89]:
          - navigation "breadcrumb mb-2" [ref=e90]:
            - list [ref=e91]:
              - listitem [ref=e92]:
                - link "Home" [ref=e93] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e94]: / Locators Test page
          - heading "Locators Test page for Automation Testing" [level=1] [ref=e95]
          - generic [ref=e96]:
            - paragraph [ref=e97]:
              - text: This page provides examples of different locators that can be used in automated tests, such as CSS selectors, XPath, Playwright locators and more
              - link "Try Cloud Tools" [ref=e98] [cursor=pointer]
            - generic [ref=e102]:
              - heading "🎯 getByRole" [level=4] [ref=e103]
              - button "Add Item" [ref=e104] [cursor=pointer]
              - link "Contact" [ref=e105] [cursor=pointer]:
                - /url: /contact
            - generic [ref=e106]:
              - heading "📝 getByText" [level=4] [ref=e107]
              - generic [ref=e108]: "🔥 Hot Deal: Buy 1 Get 1 Free"
              - paragraph [ref=e109]: Latest news and updates
            - generic [ref=e110]:
              - heading "🏷️ getByLabel" [level=4] [ref=e111]
              - generic [ref=e112]:
                - generic [ref=e113]: Choose a country
                - combobox "Choose a country" [ref=e114]:
                  - option "France" [selected]
                  - option "Japan"
                  - option "Brazil"
              - generic [ref=e115]:
                - generic [ref=e116]: Email for newsletter
                - textbox "Email for newsletter" [ref=e117]
            - generic [ref=e118]:
              - heading "🔤 getByPlaceholder" [level=4] [ref=e119]
              - textbox "Search the site" [ref=e120]
              - textbox "Filter by tag" [ref=e121]
            - generic [ref=e122]:
              - heading "🖼️ getByAltText" [level=4] [ref=e123]
              - img "User avatar" [ref=e124]
            - generic [ref=e125]:
              - heading "🏷️ getByTitle" [level=4] [ref=e126]
              - button "Reload" [ref=e127] [cursor=pointer]
              - generic "Settings panel" [ref=e128]: Settings
            - generic [ref=e129]:
              - heading "🧪 getByTestId" [level=4] [ref=e130]
              - generic [ref=e131]: All systems operational
              - text: "Username: Alice"
            - generic [ref=e132]:
              - heading "🧭 Legacy CSS" [level=4] [ref=e133]
              - text: This is a legacy CSS target
            - generic [ref=e134]:
              - 'heading "📋 XPath Practice: List" [level=4] [ref=e135]'
              - list [ref=e136]:
                - listitem [ref=e137]: "Task 1: Review"
                - listitem [ref=e138]: "Task 2: Implement"
                - listitem [ref=e139]: "Task 3: Deploy"
            - generic [ref=e140]:
              - 'heading "📊 XPath Practice: Table" [level=4] [ref=e141]'
              - table [ref=e142]:
                - rowgroup [ref=e143]:
                  - row [ref=e144]:
                    - columnheader "Product" [ref=e145]
                    - columnheader "Status" [ref=e146]
                    - columnheader "Stock" [ref=e147]
                - rowgroup [ref=e148]:
                  - row [ref=e149]:
                    - cell "Headphones" [ref=e150]
                    - cell "Available" [ref=e151]
                    - cell "12" [ref=e152]
                  - row [ref=e153]:
                    - cell "Monitor" [ref=e154]
                    - cell "Out of stock" [ref=e155]
                    - cell "0" [ref=e156]
                  - row [ref=e157]:
                    - cell "Keyboard" [ref=e158]
                    - cell "Available" [ref=e159]
                    - cell "5" [ref=e160]
        - insertion [ref=e162]:
          - generic [ref=e165]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e167]: Discover more
            - link "Try Dev Tools" [ref=e168] [cursor=pointer]
            - link "Try Cloud Tools" [ref=e173] [cursor=pointer]
            - link "Source Robotics" [ref=e178] [cursor=pointer]
            - link "Find Therapists" [ref=e183] [cursor=pointer]
            - link "Find Study Aids" [ref=e188] [cursor=pointer]
            - link "Compare Browsers" [ref=e193] [cursor=pointer]
            - link "Learn Scripting" [ref=e198] [cursor=pointer]
            - link "Learn to Code" [ref=e203] [cursor=pointer]
  - generic [ref=e208]:
    - insertion:
      - iframe [ref=e210]
  - contentinfo [ref=e211]:
    - generic [ref=e216]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e217]
      - paragraph [ref=e218]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e219] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
        - link "Try Cloud Tools" [ref=e220] [cursor=pointer]
  - generic [ref=e224] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('mapeo de elementos', async ({ page }) => {
  4  |   await page.goto('https://practice.expandtesting.com/locators');
  5  |   // Your test code here
  6  |   const button = page.getByRole('button', { name: 'Add Item' });
  7  |   await expect(button).toBeVisible();
  8  |   const bytex = page.getByText('Locators'); //se usa por el texto que se ve en la pagina
> 9  |   await expect(bytex).toBeVisible();
     |                       ^ Error: expect(locator).toBeVisible() failed
  10 |   const bylabel = page.getByLabel('Choose a country'); //se usa por su etiqueta dentro del codigo
  11 |   await expect(bylabel).toBeVisible();
  12 |   await bylabel.selectOption('Japan'); //selecciona la opcion Japan del select  
  13 | });
```
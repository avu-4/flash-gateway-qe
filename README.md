Flash-Gatewway System
Project Overview

Flash-Gatewway System is a merchant and settlement system designed to support merchant voucher issuance, payments, transfers, and transaction management.

The project focuses on Quality Engineering (QE) and test automation across multiple application layers, including UI and API testing.

Team Members:
Team Member	Git Branch
Avumile Mankawu	avumile
Yasmina Abrahams	yasmina
Asemahle Mpatho	asemahle
Ashton Hendricks	ashton

Technologies:
TypeScript
Playwright
Postman
Swagger / OpenAPI
SQL Database Testing (not yet implemented)

Application URLs:
Application Area	URL
Login	http://localhost:4173/login
Dashboard	http://localhost:4173/dashboard
Airtime	http://localhost:4173/airtime
Transfers	http://localhost:4173/transfers
Payment Methods	http://localhost:4173/payment-methods
Transaction History	http://localhost:4173/history

API Documentation:

Swagger API documentation is available at:

http://localhost:4001/api-docs/#/

API testing is performed using Postman based on the available API documentation and project requirements.

UI Test Automation

UI automation is implemented using Playwright with TypeScript.

The UI tests are organised into two main categories:

tests/
└── ui/
    ├── HappyPath/
    └── NegativePath/
    ├───CrossRoleSynchronisation/
    
Happy Path Tests

The Happy Path tests cover successful user workflows, including:

User login
Dashboard loading
Airtime purchases
Data bundle purchases
SMS bundle purchases
Internal account transfers
Payment review
Payment method functionality

Current Happy Path test files include:

tests/ui/HappyPath/
├── login.spec.ts
├── MerchantReviewDataPurchase.spec.ts
├── PurchaseCellCAirtime.spec.ts
├── PurchaseCellCDataBundles.spec.ts
├── PurchaseCellCSMSBundles.spec.ts
├── PurchaseMTNAirtime.spec.ts
├── PurchaseMTNDataBundles.spec.ts
├── PurchaseMTNSMSBundles.spec.ts
├── PurchaseTelkomAirtime.spec.ts
├── PurchaseTelkomDataBundles.spec.ts
├── PurchaseTelkomSMSBundles.spec.ts
├── PurchaseVodacomAirtime.spec.ts
├── PurchaseVodacomDataBundles.spec.ts
├── PurchaseVodacomSMSBundles.spec.ts
└── TransferFundsInternalAcc.spec.ts
Negative Path Tests

The Negative Path tests cover unsuccessful scenarios and validation of incorrect user input.

tests/ui/NegativePath/
├── Incorrectloginemailtest.spec.ts
└── Incorrectloginpasswordtest.spec.ts
API Testing

API testing is performed using Postman.

The API tests are based on the available Swagger API documentation and the requirements of the Flash-Gatewway System.

Swagger documentation:

http://localhost:4001/api-docs/#/

API testing covers REST API endpoints and validates expected API responses and behaviour.

Database Testing

Database testing has not yet been implemented.

Database testing is planned as part of the overall Quality Engineering strategy and will focus on validating database records and SQL ledger reconciliation.

Running Playwright Tests

Run all Playwright tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run a specific test:

npx playwright test <test-file-name> --headed

Example:

npx playwright test PurchaseMTNDataBundles.spec --headed
Git Branch Structure

The project uses the following branches:

main
├── avumile
├── yasmina
├── asemahle
└── ashton

The main branch contains the integrated project work, while individual team members use their respective branches for development and testing work.

Quality Engineering Scope

The project applies Quality Engineering practices across the following areas:

UI test automation using Playwright
API testing using Postman
Functional testing
Positive and negative test scenarios
Validation of user workflows
API response validation
Database testing and SQL reconciliation (not yet implemented)
Git-based collaborative development
Test organisation and maintainability
Project Status
Area	Status
UI Automation	In Progress
API Testing	In Progress
Postman Testing	In Progress
Database Testing	Not Yet Implemented
SQL Ledger Reconciliation	Not Yet Implemented
Git Collaboration	In Use
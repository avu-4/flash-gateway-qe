Layer 3 — Database Integrity & Financial Audit Test Suite

Structure:
01_Financial_Reconciliation_P0: 15 test cases
02_Settlement_Math_Verification_P0: 15 test cases
03_Data_Hygiene_Constraints_P1: 10 test cases
04_Business_Intelligence_Reports_P2: 10 test cases

Total: 50 SQL test cases.

Notes:
- The cases are based on the supplied Merchants, Settlements, WalletTransactions, Beneficiaries, PaymentMethods and Products schema/data.
- The supplied schema does not contain a commission percentage column, so SM-14 and SM-15 provide an adaptable commission validation framework rather than pretending such a field exists.
- Some supplied INSERT statements appear duplicated (especially Settlements and WalletTransactions). The test suite includes duplicate/ghost-record checks to expose this kind of issue.
- Run each .sql file against the target database and record Pass/Fail plus actual result in your QA execution report.

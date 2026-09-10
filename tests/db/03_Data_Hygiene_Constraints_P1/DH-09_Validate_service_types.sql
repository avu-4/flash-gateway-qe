/*TEST CASE ID: DH-09
TITLE: Validate service types
PRIORITY: P1

OBJECTIVE:
Detect unsupported service types.*/

SQL:
SELECT DISTINCT serviceType FROM dbo.WalletTransactions WHERE serviceType IS NOT NULL AND serviceType NOT IN ('VOUCHER','AIRTIME','DATA','BANK_TRANSFER');

/*EXPECTED RESULT:
Returns zero rows.*/

/*TEST CASE ID: DH-07
TITLE: Validate wallet status values
PRIORITY: P1

OBJECTIVE:
Detect unsupported wallet transaction statuses.*/

SQL:
SELECT DISTINCT status FROM dbo.WalletTransactions WHERE status NOT IN ('COMPLETED','PENDING','FAILED');

/*EXPECTED RESULT:
Returns zero rows.*/

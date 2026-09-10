/*TEST CASE ID: SM-05
TITLE: Calculate completed transaction total
PRIORITY: P0

OBJECTIVE:
Verify only COMPLETED transactions contribute to completed financial totals.*/

SQL:
SELECT SUM(amount) AS completedTotal FROM dbo.WalletTransactions WHERE status='COMPLETED';

--EXPECTED RESULT:
--Only completed rows are included.

TEST CASE ID: FR-07
TITLE: Detect transactions with duplicate references
PRIORITY: P0

OBJECTIVE:
References should uniquely identify wallet transactions.

SQL:
SELECT reference, COUNT(*) AS duplicateCount FROM dbo.WalletTransactions GROUP BY reference HAVING COUNT(*) > 1;

EXPECTED RESULT:
Returns zero rows.

TEST CASE ID: SM-04
TITLE: Calculate wallet transaction total by type
PRIORITY: P0

OBJECTIVE:
Verify purchase versus transfer totals.

SQL:
SELECT transactionType, SUM(amount) AS totalAmount FROM dbo.WalletTransactions GROUP BY transactionType;

EXPECTED RESULT:
Totals equal source transaction amounts.

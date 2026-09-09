TEST CASE ID: SM-10
TITLE: Verify transaction precision
PRIORITY: P0

OBJECTIVE:
Check wallet transaction amounts for two decimal places.

SQL:
SELECT id, amount FROM dbo.WalletTransactions WHERE amount <> ROUND(amount,2);

EXPECTED RESULT:
Returns zero rows.

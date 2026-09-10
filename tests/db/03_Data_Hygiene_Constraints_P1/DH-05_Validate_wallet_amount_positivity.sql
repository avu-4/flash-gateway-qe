TEST CASE ID: DH-05
TITLE: Validate wallet amount positivity
PRIORITY: P1

OBJECTIVE:
Detect zero or negative wallet transaction amounts.

SQL:
SELECT id,amount FROM dbo.WalletTransactions WHERE amount <= 0;

EXPECTED RESULT:
Returns zero rows for the supplied data.

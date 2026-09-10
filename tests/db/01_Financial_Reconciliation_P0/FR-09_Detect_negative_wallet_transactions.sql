TEST CASE ID: FR-09
TITLE: Detect negative wallet transactions
PRIORITY: P0

OBJECTIVE:
Financial transaction amounts should not be negative unless explicitly supported by the schema/business rule.

SQL:
SELECT id, merchantId, amount FROM dbo.WalletTransactions WHERE amount < 0;

EXPECTED RESULT:
Returns zero rows for the supplied test data.

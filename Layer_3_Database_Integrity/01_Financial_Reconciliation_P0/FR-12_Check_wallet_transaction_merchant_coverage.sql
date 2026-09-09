TEST CASE ID: FR-12
TITLE: Check wallet transaction merchant coverage
PRIORITY: P0

OBJECTIVE:
Every wallet transaction must resolve to one merchant.

SQL:
SELECT wt.id, wt.merchantId, m.merchantName FROM dbo.WalletTransactions wt JOIN dbo.Merchants m ON m.id = wt.merchantId;

EXPECTED RESULT:
Every transaction resolves to exactly one merchant.

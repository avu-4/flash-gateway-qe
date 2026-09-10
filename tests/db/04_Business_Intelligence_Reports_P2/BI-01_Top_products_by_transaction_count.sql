TEST CASE ID: BI-01
TITLE: Top products by transaction count
PRIORITY: P2

OBJECTIVE:
Rank products by wallet transaction count where productId is populated.

SQL:
SELECT p.id,p.name,COUNT(wt.id) transactionCount FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id GROUP BY p.id,p.name ORDER BY transactionCount DESC;

EXPECTED RESULT:
Products are ranked correctly; no orphaned product references appear.

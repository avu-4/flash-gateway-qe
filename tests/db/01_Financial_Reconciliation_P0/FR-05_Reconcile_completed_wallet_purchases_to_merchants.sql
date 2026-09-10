TEST CASE ID: FR-05
TITLE: Reconcile completed wallet purchases to merchants
PRIORITY: P0

OBJECTIVE:
Aggregate completed PURCHASE transactions and verify each merchant can be resolved.

SQL:
SELECT wt.merchantId, COUNT(*) AS transactionCount, SUM(wt.amount) AS totalAmount FROM dbo.WalletTransactions wt JOIN dbo.Merchants m ON m.id = wt.merchantId WHERE wt.transactionType = 'PURCHASE' AND wt.status = 'COMPLETED' GROUP BY wt.merchantId;

EXPECTED RESULT:
Every returned merchantId exists in Merchants and totals are numeric/non-negative.

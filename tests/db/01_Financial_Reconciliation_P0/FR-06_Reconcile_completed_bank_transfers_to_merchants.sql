TEST CASE ID: FR-06
TITLE: Reconcile completed bank transfers to merchants
PRIORITY: P0

OBJECTIVE:
Verify completed transfers are linked to valid merchants.

SQL:
SELECT wt.id, wt.merchantId, wt.amount FROM dbo.WalletTransactions wt JOIN dbo.Merchants m ON m.id = wt.merchantId WHERE wt.transactionType = 'TRANSFER' AND wt.status = 'COMPLETED';

EXPECTED RESULT:
All returned rows have a matching merchant.

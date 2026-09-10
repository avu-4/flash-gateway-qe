TEST CASE ID: SM-03
TITLE: Compare settlement totals to wallet transfers
PRIORITY: P0

OBJECTIVE:
Compare settlements with completed wallet transfers using merchant and amount.

SQL:
SELECT s.merchantId, SUM(s.amount) AS settlements, SUM(CASE WHEN wt.status='COMPLETED' AND wt.transactionType='TRANSFER' THEN wt.amount ELSE 0 END) AS completedTransfers FROM dbo.Settlements s LEFT JOIN dbo.WalletTransactions wt ON wt.merchantId=s.merchantId GROUP BY s.merchantId;

EXPECTED RESULT:
Any variance is explicitly identified and investigated; no unexplained financial difference is accepted.

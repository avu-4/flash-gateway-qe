TEST CASE ID: SM-08
TITLE: Merchant wallet versus transaction movement
PRIORITY: P0

OBJECTIVE:
Compare stored wallet balances against transaction movement where applicable.

SQL:
SELECT m.id,m.walletBalance,COALESCE(SUM(CASE WHEN wt.status='COMPLETED' THEN wt.amount ELSE 0 END),0) AS completedMovement FROM dbo.Merchants m LEFT JOIN dbo.WalletTransactions wt ON wt.merchantId=m.id GROUP BY m.id,m.walletBalance;

EXPECTED RESULT:
Any difference must be explained by opening balance, credits, debits, or other documented rules.

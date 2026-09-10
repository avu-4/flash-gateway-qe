TEST CASE ID: SM-06
TITLE: Exclude pending transactions from settled amount
PRIORITY: P0

OBJECTIVE:
Ensure pending rows do not enter completed settlement calculations.

SQL:
SELECT SUM(amount) AS pendingAmount FROM dbo.WalletTransactions WHERE status='PENDING';

EXPECTED RESULT:
Pending amount is reported separately and not included in completed totals.

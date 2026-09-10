TEST CASE ID: SM-07
TITLE: Exclude failed transactions from settled amount
PRIORITY: P0

OBJECTIVE:
Ensure failed rows do not enter completed settlement calculations.

SQL:
SELECT SUM(amount) AS failedAmount FROM dbo.WalletTransactions WHERE status='FAILED';

EXPECTED RESULT:
Failed amount is reported separately and not included in completed totals.

TEST CASE ID: DH-08
TITLE: Validate wallet transaction types
PRIORITY: P1

OBJECTIVE:
Detect unsupported transaction types.

SQL:
SELECT DISTINCT transactionType FROM dbo.WalletTransactions WHERE transactionType NOT IN ('PURCHASE','TRANSFER','credit','debit');

EXPECTED RESULT:
Returns zero rows for supplied values.

TEST CASE ID: SM-09
TITLE: Verify settlement precision
PRIORITY: P0

OBJECTIVE:
Check settlement amounts for two decimal places.

SQL:
SELECT id, amount FROM dbo.Settlements WHERE amount <> ROUND(amount,2);

EXPECTED RESULT:
Returns zero rows.

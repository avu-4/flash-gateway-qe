TEST CASE ID: DH-06
TITLE: Validate settlement amount positivity
PRIORITY: P1

OBJECTIVE:
Detect zero or negative settlements.

SQL:
SELECT id,amount FROM dbo.Settlements WHERE amount <= 0;

EXPECTED RESULT:
Returns zero rows.

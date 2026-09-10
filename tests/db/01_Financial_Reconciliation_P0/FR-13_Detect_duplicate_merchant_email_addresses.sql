TEST CASE ID: FR-13
TITLE: Detect duplicate merchant email addresses
PRIORITY: P0

OBJECTIVE:
Merchant email should identify a merchant uniquely.

SQL:
SELECT email, COUNT(*) AS duplicateCount FROM dbo.Merchants GROUP BY email HAVING COUNT(*) > 1;

EXPECTED RESULT:
Returns zero rows.

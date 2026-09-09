TEST CASE ID: DH-01
TITLE: Validate merchant email format
PRIORITY: P1

OBJECTIVE:
Detect malformed merchant email addresses.

SQL:
SELECT id,email FROM dbo.Merchants WHERE email NOT LIKE '%_@_%._%';

EXPECTED RESULT:
Returns zero rows.

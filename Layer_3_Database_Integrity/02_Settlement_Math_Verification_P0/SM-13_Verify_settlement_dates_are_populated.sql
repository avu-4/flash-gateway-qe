TEST CASE ID: SM-13
TITLE: Verify settlement dates are populated
PRIORITY: P0

OBJECTIVE:
Audit settlement timestamps.

SQL:
SELECT id, createdAt FROM dbo.Settlements WHERE createdAt IS NULL;

EXPECTED RESULT:
Returns zero rows.

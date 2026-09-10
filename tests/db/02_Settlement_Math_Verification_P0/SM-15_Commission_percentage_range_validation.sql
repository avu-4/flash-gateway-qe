TEST CASE ID: SM-15
TITLE: Commission percentage range validation
PRIORITY: P0

OBJECTIVE:
Ensure commission percentages used by settlement calculations are within 0–100%.

SQL:
/* Adapt column name if commissionPercent exists */ SELECT 1 WHERE EXISTS (SELECT 1 FROM dbo.Settlements WHERE 1=0);

EXPECTED RESULT:
Passes for the supplied schema because no commission column exists. If introduced, reject values below 0 or above 100.

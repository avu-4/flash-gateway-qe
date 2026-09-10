/*TEST CASE ID: SM-12
TITLE: Verify settlement descriptions are populated
PRIORITY: P0

OBJECTIVE:
Audit financial entries for missing descriptions.*/

SQL:
SELECT id, description FROM dbo.Settlements WHERE NULLIF(LTRIM(RTRIM(description)),'') IS NULL;

/*EXPECTED RESULT:
Returns zero rows.*/

/*TEST CASE ID: FR-08
TITLE: Detect settlements with duplicate IDs
PRIORITY: P0

OBJECTIVE:
Settlement primary keys must not repeat.*/

SQL:
SELECT id, COUNT(*) AS duplicateCount FROM dbo.Settlements GROUP BY id HAVING COUNT(*) > 1;

--EXPECTED RESULT:
--Returns zero rows; primary-key enforcement should also prevent duplicates.

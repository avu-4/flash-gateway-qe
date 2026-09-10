/*TEST CASE ID: FR-10
TITLE: Detect negative settlements
PRIORITY: P0

OBJECTIVE:
Settlement amounts should not be negative.*/

SQL:
SELECT id, merchantId, amount FROM dbo.Settlements WHERE amount < 0;

--EXPECTED RESULT:
--Returns zero rows.

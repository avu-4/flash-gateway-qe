/*TEST CASE ID: SM-01
TITLE: Calculate settlement total
PRIORITY: P0

OBJECTIVE:
Verify total settlement amount from source rows.*/

SQL:
SELECT SUM(amount) AS totalSettlement FROM dbo.Settlements;

--EXPECTED RESULT:
--Returns the sum of all settlement.amount values.

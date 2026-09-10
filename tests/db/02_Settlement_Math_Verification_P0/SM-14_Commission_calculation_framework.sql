/*TEST CASE ID: SM-14
TITLE: Commission calculation framework
PRIORITY: P0

OBJECTIVE:
Validate commission mathematics if a commission percentage column is introduced in the schema.*/

SQL:
SELECT s.id,s.amount, CAST(NULL AS DECIMAL(5,2)) AS commissionPercent, CAST(NULL AS DECIMAL(18,2)) AS expectedCommission FROM dbo.Settlements s;

/*EXPECTED RESULT:
Once commissionPercent exists, expectedCommission must equal amount * commissionPercent / 100 and match stored commission within allowed rounding.*/

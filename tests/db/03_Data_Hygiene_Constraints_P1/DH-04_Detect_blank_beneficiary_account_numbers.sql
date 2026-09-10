/*TEST CASE ID: DH-04
TITLE: Detect blank beneficiary account numbers
PRIORITY: P1

OBJECTIVE:
Find missing beneficiary account numbers.*/

SQL:
SELECT id,accountNumber FROM dbo.Beneficiaries WHERE NULLIF(LTRIM(RTRIM(accountNumber)),'') IS NULL;

/*EXPECTED RESULT:
Returns zero rows.*/

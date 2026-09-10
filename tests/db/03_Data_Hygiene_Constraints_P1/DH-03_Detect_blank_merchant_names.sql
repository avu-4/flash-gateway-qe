/*TEST CASE ID: DH-03
TITLE: Detect blank merchant names
PRIORITY: P1

OBJECTIVE:
Find empty or whitespace-only merchant names.*/

SQL:
SELECT id,merchantName FROM dbo.Merchants WHERE NULLIF(LTRIM(RTRIM(merchantName)),'') IS NULL;

/*EXPECTED RESULT:
Returns zero rows.*/

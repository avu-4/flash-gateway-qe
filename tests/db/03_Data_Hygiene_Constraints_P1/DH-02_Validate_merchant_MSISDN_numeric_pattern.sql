/*TEST CASE ID: DH-02
TITLE: Validate merchant MSISDN numeric pattern
PRIORITY: P1

OBJECTIVE:
Detect merchant mobile values containing non-numeric characters.*/

SQL:
SELECT id,msisdn FROM dbo.Merchants WHERE msisdn LIKE '%[^0-9]%';

/*EXPECTED RESULT:
Returns zero rows.*/

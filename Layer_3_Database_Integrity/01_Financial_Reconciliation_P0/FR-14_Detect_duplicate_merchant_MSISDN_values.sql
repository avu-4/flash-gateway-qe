TEST CASE ID: FR-14
TITLE: Detect duplicate merchant MSISDN values
PRIORITY: P0

OBJECTIVE:
Merchant mobile numbers should not be duplicated unless explicitly allowed.

SQL:
SELECT msisdn, COUNT(*) AS duplicateCount FROM dbo.Merchants GROUP BY msisdn HAVING COUNT(*) > 1;

EXPECTED RESULT:
Returns zero rows.

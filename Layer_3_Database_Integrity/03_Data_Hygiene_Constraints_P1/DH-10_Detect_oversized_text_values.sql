TEST CASE ID: DH-10
TITLE: Detect oversized text values
PRIORITY: P1

OBJECTIVE:
Check likely truncation risk against declared column lengths.

SQL:
SELECT id, merchantName FROM dbo.Merchants WHERE LEN(merchantName) > 255 UNION ALL SELECT id, beneficiaryName FROM dbo.Beneficiaries WHERE LEN(beneficiaryName) > 255;

EXPECTED RESULT:
Returns zero rows; inserts beyond declared lengths should fail rather than silently truncate.

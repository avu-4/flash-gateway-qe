TEST CASE ID: FR-03
TITLE: Detect beneficiaries with no valid merchant
PRIORITY: P0

OBJECTIVE:
Find beneficiary records whose merchantId is orphaned.

SQL:
SELECT b.id, b.merchantId FROM dbo.Beneficiaries b LEFT JOIN dbo.Merchants m ON m.id = b.merchantId WHERE m.id IS NULL;

EXPECTED RESULT:
Returns zero rows.

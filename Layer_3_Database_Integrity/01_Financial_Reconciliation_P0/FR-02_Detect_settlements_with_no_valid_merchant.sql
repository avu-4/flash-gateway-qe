TEST CASE ID: FR-02
TITLE: Detect settlements with no valid merchant
PRIORITY: P0

OBJECTIVE:
Find settlements that reference a missing merchant.

SQL:
SELECT s.id, s.merchantId FROM dbo.Settlements s LEFT JOIN dbo.Merchants m ON m.id = s.merchantId WHERE m.id IS NULL;

EXPECTED RESULT:
Returns zero rows.

/*TEST CASE ID: FR-11
TITLE: Check settlement merchant coverage
PRIORITY: P0

OBJECTIVE:
Every supplied settlement must map to an active or deactivated merchant record rather than a ghost merchant.*/

SQL:
SELECT s.id, s.merchantId, m.status FROM dbo.Settlements s JOIN dbo.Merchants m ON m.id = s.merchantId;

--EXPECTED RESULT:
--Every settlement has exactly one matching merchant.

/*TEST CASE ID: FR-04
TITLE: Detect payment methods with no valid merchant
PRIORITY: P0

OBJECTIVE:
Verify every payment method belongs to an existing merchant.*/

SQL:
SELECT p.id, p.merchantId FROM dbo.PaymentMethods p LEFT JOIN dbo.Merchants m ON m.id = p.merchantId WHERE m.id IS NULL;

--EXPECTED RESULT:
--Returns zero rows.

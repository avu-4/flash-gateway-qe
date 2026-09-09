TEST CASE ID: BI-07
TITLE: Detect orphaned product references
PRIORITY: P2

OBJECTIVE:
Find wallet transactions pointing to missing products.

SQL:
SELECT wt.id,wt.productId FROM dbo.WalletTransactions wt LEFT JOIN dbo.Products p ON p.id=wt.productId WHERE wt.productId IS NOT NULL AND p.id IS NULL;

EXPECTED RESULT:
Returns zero rows.

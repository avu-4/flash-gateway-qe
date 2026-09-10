/*TEST CASE ID: BI-09
TITLE: Products with no sales
PRIORITY: P2

OBJECTIVE:
Identify products not referenced by wallet transactions.*/

SQL:
SELECT p.id,p.name FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id WHERE wt.id IS NULL ORDER BY p.id;

/*EXPECTED RESULT:
Returns all currently unsold products; this is an informational BI result, not a data-integrity failure.*/

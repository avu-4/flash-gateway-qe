/*TEST CASE ID: BI-05
TITLE: Top product brands by sales value
PRIORITY: P2

OBJECTIVE:
Aggregate transaction value by product brand.*/

SQL:
SELECT p.brand,SUM(wt.amount) totalValue FROM dbo.Products p JOIN dbo.WalletTransactions wt ON wt.productId=p.id WHERE wt.status='COMPLETED' GROUP BY p.brand ORDER BY totalValue DESC;

/*EXPECTED RESULT:
Brand ranking matches completed transaction totals.*/

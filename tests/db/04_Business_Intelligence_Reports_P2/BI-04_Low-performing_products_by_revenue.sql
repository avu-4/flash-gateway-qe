/*TEST CASE ID: BI-04
TITLE: Low-performing products by revenue
PRIORITY: P2

OBJECTIVE:
Identify products with lowest transaction value.*/

SQL:
SELECT p.id,p.name,COALESCE(SUM(wt.amount),0) totalValue FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id GROUP BY p.id,p.name ORDER BY totalValue ASC,p.id;

/*EXPECTED RESULT:
Products are ordered from lowest to highest transaction value.*/

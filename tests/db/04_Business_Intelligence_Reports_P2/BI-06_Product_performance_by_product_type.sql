/*TEST CASE ID: BI-06
TITLE: Product performance by product type
PRIORITY: P2

OBJECTIVE:
Compare airtime, data and voucher performance.*/

SQL:
SELECT p.productType,COUNT(wt.id) transactionCount,COALESCE(SUM(wt.amount),0) totalValue FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id AND wt.status='COMPLETED' GROUP BY p.productType ORDER BY totalValue DESC;

/*EXPECTED RESULT:
Each product type has accurate count and total value.*/

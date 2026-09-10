/*TEST CASE ID: BI-03
TITLE: Low-performing products by transaction count
PRIORITY: P2

OBJECTIVE:
Identify products with the fewest transactions.*/

SQL:
SELECT p.id,p.name,COUNT(wt.id) transactionCount FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id GROUP BY p.id,p.name ORDER BY transactionCount ASC,p.id;

/*EXPECTED RESULT:
Products with zero transactions appear as low performers.*/

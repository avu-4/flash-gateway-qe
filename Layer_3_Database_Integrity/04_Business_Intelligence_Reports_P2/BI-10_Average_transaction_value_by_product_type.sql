TEST CASE ID: BI-10
TITLE: Average transaction value by product type
PRIORITY: P2

OBJECTIVE:
Calculate average completed transaction value per product type.

SQL:
SELECT p.productType,AVG(wt.amount) avgTransactionValue FROM dbo.Products p JOIN dbo.WalletTransactions wt ON wt.productId=p.id WHERE wt.status='COMPLETED' GROUP BY p.productType;

EXPECTED RESULT:
Average equals total completed value divided by completed transaction count for each type.

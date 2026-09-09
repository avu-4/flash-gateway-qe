TEST CASE ID: BI-02
TITLE: Top products by transaction value
PRIORITY: P2

OBJECTIVE:
Rank products by total transaction amount.

SQL:
SELECT p.id,p.name,COALESCE(SUM(wt.amount),0) totalValue FROM dbo.Products p LEFT JOIN dbo.WalletTransactions wt ON wt.productId=p.id GROUP BY p.id,p.name ORDER BY totalValue DESC;

EXPECTED RESULT:
Ranking reflects SUM(amount) accurately.

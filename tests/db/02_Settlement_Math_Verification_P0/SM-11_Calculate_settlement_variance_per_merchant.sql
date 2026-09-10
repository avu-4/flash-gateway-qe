/*TEST CASE ID: SM-11
TITLE: Calculate settlement variance per merchant
PRIORITY: P0

OBJECTIVE:
Identify merchants whose settlement amount differs from completed transfer amount.*/

SQL:
WITH s AS (SELECT merchantId,SUM(amount) total FROM dbo.Settlements GROUP BY merchantId), w AS (SELECT merchantId,SUM(amount) total FROM dbo.WalletTransactions WHERE transactionType='TRANSFER' AND status='COMPLETED' GROUP BY merchantId) SELECT COALESCE(s.merchantId,w.merchantId) merchantId,COALESCE(s.total,0)-COALESCE(w.total,0) variance FROM s FULL OUTER JOIN w ON s.merchantId=w.merchantId;

/*EXPECTED RESULT:
Variance is zero where settlement and completed transfer represent the same business event; otherwise documented differences are returned.*/

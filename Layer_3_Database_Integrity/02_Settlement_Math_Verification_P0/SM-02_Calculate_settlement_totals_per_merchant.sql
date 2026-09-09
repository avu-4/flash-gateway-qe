TEST CASE ID: SM-02
TITLE: Calculate settlement totals per merchant
PRIORITY: P0

OBJECTIVE:
Verify multi-row aggregation by merchant.

SQL:
SELECT merchantId, SUM(amount) AS merchantSettlement FROM dbo.Settlements GROUP BY merchantId;

EXPECTED RESULT:
Each total equals the sum of that merchant's settlement rows.

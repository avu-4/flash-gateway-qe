TEST CASE ID: FR-15
TITLE: Cross-check settlement totals by merchant
PRIORITY: P0

OBJECTIVE:
Produce settlement totals per merchant and verify all rows are linked.

SQL:
SELECT m.id, m.merchantName, COALESCE(SUM(s.amount),0) AS settlementTotal FROM dbo.Merchants m LEFT JOIN dbo.Settlements s ON s.merchantId=m.id GROUP BY m.id,m.merchantName ORDER BY m.id;

EXPECTED RESULT:
All merchants are represented and settlement totals match source rows.

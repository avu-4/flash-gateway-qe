TEST CASE ID: BI-08
TITLE: Product unit price integrity
PRIORITY: P2

OBJECTIVE:
Ensure product unit prices are not negative.

SQL:
SELECT id,name,unitPrice FROM dbo.Products WHERE unitPrice < 0;

EXPECTED RESULT:
Returns zero rows.

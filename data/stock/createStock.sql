INSERT INTO [production].[stocks]
(
    [store_id],
    [product_id],
    [quantity]
)
VALUES
(
    @store_id,
    @product_id,
    @quantity
)

SELECT SCOPE_IDENTITY() AS stock_Id
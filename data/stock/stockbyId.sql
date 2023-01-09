SELECT 
       [store_id],
    [product_id],
    [quantity]
FROM [production].[stocks]
WHERE [store_id] = @stockId
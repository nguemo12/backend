SELECT     [order_id],
    [item_id],
    [product_id],
    [quantity],
    [list_price],
    [discount],
    [last_updated]
FROM [sales].[order_items]    
WHERE [order_Id] = @orderitem_Id
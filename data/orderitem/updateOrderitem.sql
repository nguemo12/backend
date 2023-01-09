UPDATE  [sales].[order_items]
SET [order_id] = @order_id,
    [item_id] = @item_id,
    [product_id] = @product_id,
    [quantity] = @quantity,
    [list_price] = @list_price,
    [discount] = @discount
    

WHERE [order_Id] = @orderitem_Id

SELECT     [order_id],
    [item_id],
    [product_id],
    [quantity],
    [list_price],
    [discount]
  
FROM [sales].[order_items]    
WHERE [order_Id] = @orderitem_Id
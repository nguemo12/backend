INSERT INTO [sales].[order_items]
(
   
    [order_id],
    [item_id],
    [product_id],
    [quantity],
    [list_price],
    [discount]
    
    

)
VALUES
(
    @order_id,
    @item_id,
    @product_id,
    @quantiy,
    @list_price,
    @discount
    
    
)
 
 SELECT SCOPE_IDENTITY() AS orderitem_Id
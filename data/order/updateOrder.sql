UPDATE  [sales].[orders]
SET [order_Id], 
    [customer_id],
    [order_status],
    [order_date],
    [required_date],
    [shipped_date],
    [store_Id],
    [staff_Id]

WHERE [order_Id] = @order_Id  


SELECT [order_Id] 
    [customer_id],
    [order_status],
    [order_date],
    [required_date],
    [shipped_date],
    [store_Id],
    [staff_Id]
FROM [sales].[orders]
WHERE [order_Id] = @order_Id
INSERT INTO [sales].[orders]
(
   
    [customer_id],
    [order_status],
    [order_date],
    [required_date],
    [shipped_date],
    [store_Id],
    [staff_Id]
    

)
VALUES
(
    @customer_id,
    @order_status,
    @order_date,
    @required_date,
    @shipped_date,
    @store_id,
    @staff_Id
    
)
 
 SELECT SCOPE_IDENTITY() AS order_Id
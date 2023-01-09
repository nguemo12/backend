INSERT INTO [sales].[staffs]
(
    [first_name],
    [last_name],
    [email],
    [phone],
    [active],
    [store_id],
    [manager_id]
)
VALUES
(
    @first_name,
    @last_name,
    @email,
    @phone,
    @active,
    @store_id,
    @manager_id
    
)
 
 SELECT SCOPE_IDENTITY() AS staff_Id
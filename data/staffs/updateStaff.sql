UPDATE  [sales].[staffs]
SET     [staff_Id] = @staff_Id ,
        [first_name] = @first_name,
        [last_name] = @last_name,
        [email] = @email,
        [phone] = @phone,
        [active] = @active,
        [store_id] = @store_id,
        [manager_id] = @manager_id  
WHERE   [staff_Id] = @staff_Id

SELECT  [staff_Id],
        [first_name],
        [last_name],
        [email],
        [phone],
        [active],
        [store_id],
        [manager_id]
FROM [sales].[staffs]
WHERE [staff_Id] = @staff_Id
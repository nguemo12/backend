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
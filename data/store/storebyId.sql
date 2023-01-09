SELECT  [store_id],
       [store_name],
    [phone],
    [email],
    [street],
    [city],
    [state],
    [zip_code]
FROM [sales].[stores] 
WHERE [store_Id] = @store_Id
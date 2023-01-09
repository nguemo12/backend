UPDATE [sales].[stores]
SET    
       [store_id] = @store_id,
    [phone] = @phone,
    [email] = @email,
    [street] = @street,
    [city] = @city,
    [state] = @state,
    [zip_code] = @zip_code

WHERE [store_Id] = @store_Id


SELECT  [store_Id],
       
    [phone],
    [email],
    [street],
    [city],
    [state],
    [zip_code]
FROM [sales].[stores] 
WHERE [store_Id] = @store_Id
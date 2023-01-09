UPDATE [sales].[customers]
SET    [customer_Id] = @customerId,
        [first_name] = @first_name,
        [last_name],= @last_name,
        [phone] = @phone,
        [email] = @email,
        [street] = @street ,
        [city] = @city,
        [state] = @state,
        [zip_code] = @zip_code   
WHERE [customer_Id]=@customer_Id

SELECT  [customer_Id],
        [first_name],
        [last_name],
        [phone],
        [email],
        [street],
        [city],
        [state],
        [zip_code]
FROM [sales].[customers]
WHERE [customer_Id] = @customer_Id
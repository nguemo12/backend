SELECT  [customer_Id],
        [first_name],
        [last_name],
        [phone],
        [email],
        [street],
        [city],
        [state],
        [zip_code],
        [last_updated]
FROM [sales].[customers]
WHERE [customer_Id] = @customer_Id
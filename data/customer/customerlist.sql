SELECT  
TOP 10
       [customer_Id],
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
ORDER BY  [customer_Id] DESC

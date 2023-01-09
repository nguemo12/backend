INSERT INTO [sales].[stores]
(
    [store_name],
    [phone],
    [email],
    [street],
    [city],
    [state],
    [zip_code]
)
VALUES
(
    
    @store_name,
    @phone,
    @email,
    @street,
    @city,
    @state,
    @zip_code
    
)
 
 SELECT SCOPE_IDENTITY() AS store_Id
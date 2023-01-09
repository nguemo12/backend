INSERT INTO [sales].[customers]
(
    [first_name],
    [last_name],
    [phone],
    [email],
    [street],
    [city],
    [state],
    [zip_code]
)
VALUES
(
    @first_name,
    @last_name,
    @phone,
    @email,
    @street,
    @city,
    @state,
    @zip_code
)
 
 SELECT SCOPE_IDENTITY() AS customer_Id
INSERT INTO [production].[brands]
(
    [brand_name]
)
VALUES
(
    @brand_name
)

SELECT SCOPE_IDENTITY() AS brand_Id
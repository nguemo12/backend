INSERT INTO [production].[categories]
(
    [category_name]
)
VALUES
(
    @category_name
)

SELECT SCOPE_IDENTITY() AS category_Id
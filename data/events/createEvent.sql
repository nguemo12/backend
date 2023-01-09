INSERT INTO [production].[products]
    (
        [product_name],
        [brand_id],
        [category_id],
        [model_year],
        [list_price]
        -- [maxMembers]
    )
VALUES 
    (
        @product_name,
        @brand_id,
        @category_id,
        @model_year,
        @list_price
        -- @maxMembers
    )

SELECT SCOPE_IDENTITY() AS eventId
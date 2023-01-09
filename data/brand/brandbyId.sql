SELECT [brand_Id],
       [brand_name],
       [last_updated]
FROM [production].[brands]
WHERE [brand_Id] = @brandId
SELECT [category_Id],
       [category_name],
       [last_updated]
FROM [production].[categories]
WHERE [category_Id] = @categoryId
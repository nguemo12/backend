SELECT [product_Id]
      ,[product_name]
      ,[brand_id]
      ,[category_id]
      ,[model_year]
      ,[list_price]
      ,[last_updated]
FROM [production].[products]
WHERE [product_Id]=@eventId
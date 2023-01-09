SELECT
TOP 10
      [product_Id]
      ,[product_name]
      ,[brand_id]
      ,[category_id]
      ,[model_year]
      ,[list_price]
      ,[last_updated]
    --   ,[maxMembers]
  FROM [production].[products]
  ORDER BY  [product_Id] DESC
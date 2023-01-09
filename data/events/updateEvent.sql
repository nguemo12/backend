UPDATE [production].[products]
SET [product_name]=@eventTitle,
    [brand_id]=@eventDescription,
    [category_id]=@startDate,
    [model_year]=@endDate,
    [list_price]=@avenue,
    
WHERE [product_Id]=@eventId

SELECT [product_Id]
      ,[product_name]
      ,[brand_id]
      ,[category_id]
      ,[model_year]
      ,[list_price]
    --   ,[maxMembers]
  FROM [production].[products]
  WHERE [product_Id]=@eventId
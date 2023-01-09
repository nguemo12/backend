UPDATE [production].[brands]
SET [brand_name]=@brand_name    
WHERE [brand_Id]=@brand_Id

SELECT [brand_Id]
      ,[brand_name]    
  FROM [production].[brand]
  WHERE [brand_Id]=@brandId
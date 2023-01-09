UPDATE [production].[categories]
SET [category_name]=@category_name    
WHERE [category_Id]=@category_Id

SELECT [category_Id]
      ,[category_name]    
  FROM [production].[categories]
  WHERE [category_Id]=@categoryId
select 
      [model_year]
      ,sum([list_price]) AS Total
      from [production].[products] 
      group by [model_year]
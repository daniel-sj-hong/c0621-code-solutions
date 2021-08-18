select "a"."line1" as "street",
       "a"."district",
       "c"."name" as "city",
       "d"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "d" using ("countryId")

select "a"."countryId" as "country",
       count("c"."cityId") as "totalCities"
  from "countries" as "a"
  join "cities" as "c" using ("countryId")
group by "a"."countryId"

select "a"."releaseYear",
       "b"."name" as "category",
       "c"."filmId" as "filmId"
  from "films" as "a"
  join "filmCategory" as "c" using ("filmId")
  join "categories" as "b" using ("categoryId")
 where "a"."title" = 'Boogie Amelie'

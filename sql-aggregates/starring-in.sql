select "a"."name",
       count("a"."categoryId") as "numberOfMovies"
  from "categories" as "a"
  join "filmCategory" as "b" using ("categoryId")
  join "castMembers" as "c" using ("filmId")
  join "actors" as "d" using ("actorId")
 where "d"."firstName" = 'Lisa' and "d"."lastName" = 'Monroe'
group by "a"."name"

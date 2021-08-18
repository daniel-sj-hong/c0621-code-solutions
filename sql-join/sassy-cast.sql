select "a"."firstName",
       "a"."lastName"
  from "actors" as "a"
  join "castMembers" as "b" using ("actorId")
  join "films" as "c" using ("filmId")
 where "c"."title" = 'Jersey Sassy'

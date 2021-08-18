select "a"."firstName",
       "a"."lastName"
  from "customers" as "a"
  join "rentals" as "b" using ("customerId")
  join "inventory" as "c" using ("inventoryId")
  join "films" as "d" using ("filmId")
 where "d"."title" = 'Magic Mallrats'

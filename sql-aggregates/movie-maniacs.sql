select "firstName",
       "lastName",
       sum("amount") as "totalPayment"
  from "customers"
  join "payments" using ("customerId")
group by "customers"."customerId"
order by "totalPayment" desc

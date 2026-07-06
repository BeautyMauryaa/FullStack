-- 1. SELECT : Retrieve data from Database
SELECT * FROM employees 
-- (*) means all columns will be  retrieved from the employees table.
-- equivalent to Mongodb: select.find({})



-- 2. WHERE: FILTER date based on conditions
SELECT * FROM employees
WHERE department = 'development'
-- equivalent to Mongodb: select.find({department: 'development'})


-- 3. ORDER BY: Sort data in ascending or descending order
SELECT * FROM employees
ORDER BY salary DESC
-- equivalent to Mongodb: select.find().sort({salary:-1})
    

-- 4. GROUP BY: Group data based on sepecific column
SELECT department,
COUNT(*),
FROM employees,
GROUP BY department
-- equivalent to Mongodb: 
-- employees.aggregate(
-- [
--     {
--         $group:{
--             _id: "$department",
--             count:{$sum:-1}
--         }
--     }
-- ]
-- )




-- | SQL                      | NoSQL                                         |
-- | ------------------------ | --------------------------------------------- |
-- | Tables                   | Collections                                   |
-- | Rows                     | Documents                                     |
-- | Fixed Schema             | Flexible Schema                               |
-- | PostgreSQL, MySQL        | MongoDB                                       |
-- | Relationships using JOIN | Relationships using `ObjectId` + `populate()` |

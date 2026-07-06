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
    


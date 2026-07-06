-- index work same as mongodb 
CREATE index idx_email
on employees(email);
-- equivalent to mongodb : userschema.index({email: 1})

-- now when we search:
SELECT * FROM employees,
WHERE email="beauty@gmail.com"
-- flow: query -> index -> row pointer -> actual row 
-- instead of checking every row 

-- most sql db use B-tree by default to store the index
--                 M

--           /           \

--       G                  T

--     /   \              /    \

--   C      J          P        Z

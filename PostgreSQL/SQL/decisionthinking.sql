-- when should use sql and nosql
-- if data is  very structured then go with sql
-- if the schema change frequently then go with mongodb (no sql)

-- Is data structured?

--         │

--    Yes ─────► SQL

--         │

--         No

--         ▼

--     NoSQL



--Decision process:
-- Project Idea
--       │
--       ▼
-- How is my data?
--       │
--       ├── Fixed structure?
--       │        ▼
--       │       SQL
--       │
--       └── Flexible structure?
--                ▼
--             MongoDB

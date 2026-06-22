//what is bcrypt:
//- it is lib that convert the string pass into hash
// - add random salt (salt is just random string that bcrypt add to the pass before hahsing)
//for ex: pass is nova123 + X7@kP9 -> then hash it 
// With Salt

// bcrypt generates a different random salt for each user:

// User A:
// nova123 + A1B2C3
//          ↓
// HASH_X

// User B:
// nova123 + Z9Y8X7
//          ↓
// HASH_Y

// Database:

// User A → HASH_X
// User B → HASH_Y
//- make hashing slow enough to resist brute force attack



//how to do this:
//- npm install bcrypt
//- import -> const bcrypt=require("bcryptjs");


const bcrypt=require("bcryptjs")
const pass=test123;

const hashedPassword=await bcrypt.hash(
    pass,
    10
);

console.log(hashedPassword);

//10 means: it is called salt round

//usercontext: its like passing the data to the component who have need of that data....its porevent to do prop drilling

//there is some trick to remember:
//- which component has data in that component we will write provide
//- and which component needs data in that component we will write usecontext
import { createContext } from "react";


//steps 1: create context:
const UserContext=createContext();

//step2: provider:
<UserContext.Provider value={user}>
    <child/>
</UserContext.Provider>

//child component:
const userData=UserContext(UserContext);
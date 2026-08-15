//state management: Data kahan rahega + kaise flow karega + kaun control karega + kab update hoga

//when project/app is small then we use usetstate...
//when project is big for ex... 100+ component in a project then we use scaling..
//now why:
//because in this case when we use usstate then props drilling problem does arive and state synchronization
//so to prevent these issue we use state management scaling



//for the scaling we use Flux Architecture(introduce by facebook to mannage state in react)
//store
//action
//reducer
//dispatch


//on the scaling level we devide our state in three level
//1.local state- data that is managed and stored within single component (usestate and usereducer)
//trick: if only one components need it keep it local(
//2.global state - when multiple components needs same data then keep that data in global state(zeducer,redux toolkit) ex: user auth,shopping cart,theme
//3.server state- data that is managed on remote server(like database) and must be fetch into the client application to be displayed ..ex: API data, Caching, Loading/Error states. 
//tanstack query



//notes;;
// Don’t globalize everything
// ✔ Don’t use useEffect for API (use React Query)
// ✔ Don’t prop drill deeply
// ✔ Don’t overuse Context
// ✔ Split state by purpose (local / shared / server)    
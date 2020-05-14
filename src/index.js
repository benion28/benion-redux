import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed:", store.getState());
});

// Add A Bug
store.dispatch(bugAdded("Bug 1"));

// Resolve A Bug
store.dispatch(bugResolved(1));

// Unsubscribe From The Store
unsubscribe();

// Remove A Bug
store.dispatch(bugRemoved(1));
//same as saying const [addeverything,setAddeverything] = useState([]);
import { ADDITION, EDIT, DELETE, REMOVEALL } from "../Constant";

const initialData = {
  addeverything: [],
  isOpen: -1,
  editId: 0,
};
//main reducer function =>

const todoReducer = (state = initialData, action) => {
  // here we have passed 2 values unline defining state we also pass 2 values. here state and action
  switch (action.type) {
    case ADDITION:
      const { id, name } = action.payload;
      if (name.length > 2) {
        return {
          // return old data and new data .
          ...state, // we are getting initial data first
          addeverything: [
            // in the new data we will first get old data which is in state and new data in form of id and name
            ...state.addeverything,
            {
              id: id,
              name: name,
            },
          ],
        };
      }
      else {
        alert("Enter more than 2 words")
        return {...state}
      }
       

    case EDIT:
      if (state.isOpen === -1) {
        console.log("Inside If  isOpen === -1 Edit input closed "); // edit input will close
        return { ...state, isOpen: action.id, editId: action.id };
      } else if (state.isOpen === state.editId) {
        console.log("Inside Else If Edit input box opens "); // Edit input box opens
        const newdata = [...state.addeverything];
        const updatedData = newdata.map((value) => {
          if (action.payload) {
            console.log("Action.payload is not empty");
            if (value.id === state.editId) {
              console.log(
                "Inside value.id === state.editId && action.id!=null" +
                  action.payload
              );
              return { ...value, name: action.payload };
            } else {
              return value;
            }
          } else {
            return value;
          }
        }); // .Map closed
        return { addeverything: updatedData, isOpen: -1, editId: null };
      } else {
        alert("You are in return");
      }
      break;

    case DELETE:
      const dellist = state.addeverything.filter(
        // Store all the data whose id != action.id (current elements id ) in dellist
        (elem) => elem.id !== action.id
      );
      return {
        ...state,
        addeverything: dellist, // similar to setAddeverything(dellist);
      };
    case REMOVEALL:
      return {
        ...state,
        addeverything: [],
      };
    default:
      return state;
  }
};
export default todoReducer;

//  same as writing const allInputData = {
//  id: new Date().getTime().toString(), ==> Here we are saying that new data that will come it will have id and name .
//  name: addinput, };==>in id date.gettime will return time in milisecond and we are converting it to string
//  setAddeverything([...addeverything, allInputData]);
//  setAddinput(""); }};

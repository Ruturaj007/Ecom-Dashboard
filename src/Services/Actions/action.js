import { ADDITION, EDIT, DELETE, REMOVEALL } from "../Constant";

export const additem = (data) => {
  return {
    type: ADDITION,
    payload: {
      id: new Date().getTime().toString(),
      name: data,
    },
  };
};

export const upd = (id, payload) => {
  return {
    type: EDIT,
    id,
    payload, // here in payload the value from new input box will come
  };
};
export const del = (data, id) => {
  return {
    type: DELETE,
    payload: data,
    id,
  };
};
export const removeall = () => {
  return {
    type: REMOVEALL,
  };
};

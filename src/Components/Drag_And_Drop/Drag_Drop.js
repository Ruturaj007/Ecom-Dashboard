import { React, useState } from "react";
import List from "./Data.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const DDAR = () => {
  const [list, setList] = useState(List);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  };
  const myFunction = (result) => {
    console.log(result);
    setList(reorder());
  };

  // Droppable Gives set of rander props.
  // provided, snapshot is bunch of data that lets you bind all properties of Droppable with div inside it
  // ref={provided.innerRef()} will bind Droppable to div.
  // Draggable items to drag . It has id which is unique , key and index from data
  //  {...provided.draggableProps} gives all the data so drag can happen
  // DragHandleProps says that the div which it is wrapped around with is your drag handle .
  // So basically you can just grab the whole div and drag and drop
  return (
    <DragDropContext onDragEnd={myFunction}>
      <Droppable droppableId="AnyString">
        {(provided, snapshot) => {
          <div ref={provided.innerRef}>
            <h1 style={{ paddingLeft: "650px" }}> Data From JSON </h1>
            <table style={{ fontSize: "30px", Padding: "30px" }}>
              <tbody>
                <tr style={{ textAlign: "center", Padding: "30px" }}>
                  <td> Id </td>
                  <td> Title</td>
                  <td> Index</td>
                </tr>
                {list.map((value, index) => (
                  <Draggable
                    draggableId={value.id}
                    key={value.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <tr style={{ textAlign: "center", Padding: "30px" }}>
                          <td> {value.id} </td>
                          <td> {value.title}</td>
                          <td> {index} </td>
                        </tr>
                      </div>
                    )}
                  </Draggable>
                ))}
              </tbody>
            </table>
            {provided.placeholder}
          </div>;
        }}
      </Droppable>
    </DragDropContext>
  );
};
export default DDAR;

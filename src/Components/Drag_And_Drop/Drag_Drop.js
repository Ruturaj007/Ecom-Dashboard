import { React, useState } from "react";
import List from "./Data.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

let eId = Math.floor(Math.random()*100);
eId = toString(eId);
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
      <Droppable droppableId={eId}>
        {(provided) => {
          <div 
            ref={provided.innerRef}
            {...provided.droppableProps}
            data-testid= "droppable-container"
            className="column-drop"
          >
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
                    key={value.id}
                    draggableId={`drag-${value.key} || ${value.index}`}
                    index={index}
                  >
                    {(dragProvided) => (
                      <div
                      ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        className="column-drop"
                      >
                        <tr style={{ textAlign: "center", Padding: "30px" }}>
                         
                            <select 
                                aria-describedby="Modifying this control will update the position automatically"
                                className="a11y flag-dropdown"
                                name={value.title}
                                onChange={(
                                  {target}) => handleChange(
                                  index,
                                  target.value,
                                  target.name
                                  )
                                }
                            >
                                <option value="-1" aria-checked="true">Move this item</option>
                                <option value="UP" aria-checked="true">Up</option>
                                <option value="Down" aria-checked="true">Down</option>
                                <option value="To Top" aria-checked="true">To Top</option>
                                <option value="To Bottom" aria-checked="true">To Bottom</option>
                            </select>
                            <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                             <td> {value.id} </td>
                            <td> {value.title}</td>
                            <td> {index} </td>
                            <td>
                            </td>
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
      <span
        role="alert"
        aria-live="assertive"
        id="helpText"
      >
      </span>
    </DragDropContext>
  );

  function handleChange (index, value, name) {
    console.log(index, value, name);
  }
};
export default DDAR;

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../Contexts/TodoContext";

//Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Container
import Container from "@mui/material/Container";

//-Button
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ToDo from "./ToDo";

export default function ToDoList() {
  const [input, setinput] = useState("");
  const [ButtonType, setButtonType] = useState("");
  const value = useContext(TodoContext);

  const DoneTodos = value.todos.filter((el) => {
    return el.IsCompleted;
  });
  const NotcompletedTodos = value.todos.filter((el) => {
    return !el.IsCompleted;
  });
  let AllToDos = value.todos;

  //----------------------------------
  if (ButtonType === "Done") {
    AllToDos = DoneTodos;
  } else if (ButtonType === "NotComplet") {
    AllToDos = NotcompletedTodos;
  } else {
    AllToDos = value.todos;
  }
  //-------------------------

  //----------------------------------------
  const todojsx = AllToDos.map((el) => {
    return <ToDo key={el.id} todo={el} />;
  });
  //-------------------------------

  function HandelAdd() {
    if(input !== ""){
      const NewTodo = {
        id: uuidv4(),
        content: input,
        isEditing: true,
        IsCompleted: false,
      };
      const updateNewTodo = [...value.todos, NewTodo];
      value.settodos(updateNewTodo);
      localStorage.setItem("todos", JSON.stringify(updateNewTodo));
      setinput("");
    }
  }

  useEffect(() => {
    const Storagetodo = JSON.parse(localStorage.getItem("todos"));

    value.settodos(Storagetodo);
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className=" relative p-5 text-white bg-[#161618] ">
        <Card
          sx={{
            minWidth: 275,
            background: "transparent",
            boxShadow: "none",
            marginTop: "30px",
            color: "white",
          }}
        >
          <CardContent>
            {/*TEXT */}
            <h1 className=" text-center text-5xl my-7 text-teal-600 font-bold">
              To-Do App
            </h1>
            {/*TEXT */}

            {/*The-Input & Button */}
            <div className="The-Input flex justify-between items-center mb-7 border-solid border-2 border-teal-700 rounded-sm bg-zinc-900">
              <input
                className="w-[100%] bg-transparent p-2"
                type="text"
                placeholder="Add Your Task"
                value={input}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
                autoFocus
              />
              {/*plus Button */}
              <div>
                <i
                  className="fa-solid fa-plus font-bold text-2xl p-2 text-teal-700"
                  onClick={HandelAdd}
                ></i>
              </div>
              {/*plus Button */}
            </div>
            {/*The-Input & Button */}

            {/*The-Output */}
            <div className="The-Output !text-zinc-50 flex flex-col justify-center items-center w-full bg-zinc-900  p-5 rounded- border-solid border-2 border-teal-700 ">
              {/*<Buttons */}
              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  className="!text-[#bebebe] !border-gray-400 !font-bold"
                  onClick={() => {
                    setButtonType("ALL");
                  }}
                >
                  ALL ({AllToDos.length})
                </Button>
                <Button
                  variant="outlined"
                  className="!text-[#34c25fe1] !border-[#2ea0505d]"
                  onClick={() => {
                    setButtonType("Done");
                  }}
                >
                  Done ({DoneTodos.length})
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    setButtonType("NotComplet");
                  }}
                >
                  Not Complet ({NotcompletedTodos.length})
                </Button>
              </Stack>

              {/*<Buttons */}

              {/*ToDo*/}
              {todojsx}
              {/*ToDo*/}
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
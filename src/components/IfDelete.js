export default function IfDeelet({ No, Yes }) {
    return (
      <div className="bg-[#0c16149c] w-full h-full absolute top-0 left-0 flex justify-center items-center text-white min-h-screen">
        <div className="border-solid border-2 border-red-700 w-[60%] h-[220px] rounded-md bg-[#182020cc]">
          <h2 className="text-left text-2xl font-bold p-4 mt-7"> -Are You Sure To Delete This Task ?</h2>
          <button className="Delet" onClick={No}>No</button>
          <button className="Delet" onClick={Yes}>Yes</button>
        </div>
      </div>
    );
  }
const { useState, useEffect } = React;

export default () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);

  return (
    <div className=" flex justify-center items-center flex-col  text-[30px] gap-4  ">
      Counter App
      <div className="bg-green-600  text-[30px] mt-[20px] p-2 hover:bg-green-800">
        {add}
      </div>
      <div className=" text-[30px]  my-8">{count}</div>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800"
      >
        Increase
      </div>
      <div
        onClick={() => {
          setAdd(add - 1);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800 "
      >
        Decrease
      </div>
    </div>
  );
};

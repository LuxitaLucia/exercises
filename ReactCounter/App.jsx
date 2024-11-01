const Counter = ({title,initialCount,buttonText}) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="border-2 p-2">
      <div className="text-center">{buttonText}</div>
      <div className="text-center">{count}</div>

      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800"
      >
        {title}
      </div>
    </div>
  );
};

const { useState, useEffect } = React;

export default () => {
  return (
    <div className=" flex justify-center items-center flex-col  text-[30px] gap-4  ">
      <div>Counter App</div>

      <Counter buttonText="more" initialCount={2} title="banane"></Counter>
      <Counter buttonText="go" initialCount={7} title="mere"></Counter>
      <Counter buttonText="start" initialCount={23} title="pere"></Counter>
      <Counter buttonText="increment" initialCount={21} title="capsuni"></Counter>
      <Counter buttonText="run" initialCount={20} title="piersici"></Counter>
      {/*       
      <div className=" text-[30px]  my-8">{count}</div>
      
      <div
        onClick={() => {
          setCount(count - 1);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800 "
      >
        Decrease
      </div> */}

      {/* <div
        onClick={() => {
          setCount(0);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800 "
      >
        Reset
      </div> */}
    </div>
  );
};

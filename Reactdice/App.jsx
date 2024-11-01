const { useState, useEffect } = React;

export default () => {
  const [roll, setRoll] = useState(0);

  return (
    <div className=" flex justify-center items-center flex-col  text-[30px] gap-4 mt-[30px] ">
      Roll the Dice
      <div className=" text-[30px]  my-8">{roll}</div>
      <div
        onClick={() => {
          setRoll(Math.round(Math.random() * 5) + 1);
        }}
        className="text-center  bg-green-600 cursor-pointer rounded-lg text-2xl text-white p-6 hover:bg-green-800"
      >
        Roll the Dice
      </div>
    </div>
  );
};

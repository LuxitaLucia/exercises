const { useState, useEffect } = React;

export default () => {
  const [breadsImages, setBreadsImages] = useState([]);
  const [activeBread, setActiveBread] = useState(null);

  useEffect(() => {
    const effect = async () => {
      const rs = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await rs.json();
      const _breeds = Object.keys(data.message);

      const _breadsImages = await Promise.all(
        _breeds.map(async (bread) => {
          const rs = await fetch(`https://dog.ceo/api/breed/${bread}/images`);
          const data = await rs.json();
          return { bread, images: data.message };
        })
      );
      setBreadsImages(_breadsImages);
    };
    effect();
  }, []);
  const handleBreadClick = (bread) => () => {
    setActiveBread(bread);
  };
  const handleCloseClick = () => {
    setActiveBread(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {breadsImages.map((bread, i) => {
          return (
            <div
              key={i}
              onClick={handleBreadClick(bread)}
              className="w-[300px] bg-red-500 flex flex-col justify-between gap-5  rounded-lg overflow-hidden "
            >
              <img
                className="w-[300px] h-[300px] object-cover"
                src={bread.images[0]}
              />
              <div className="capitalize p-4 text-center text-2xl text-white">
                {bread.bread}
              </div>
            </div>
          );
        })}
      </div>

      {activeBread && (
        <div className="mim-h-screen w-screen absolute bg-white top-0 ">
          <div
            onClick={handleCloseClick}
            className="fixed top-4 right-8 bg-green-700 text-white p-4 cursor-pointer text-2xl"
          >
            X
          </div>
          <div className="flex flex-wrap gap-5 mt-10 justify-around">
            {activeBread.images.map((image) => {
              return (
                <img className="w-[300px] h-[300px] object-cover" src={image} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold py-7">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-8">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/jamie2.jfif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/doc.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/cyber2.jpg"
              alt=""
            />
          </div>
          {/*New image */}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/nmn2.jfif"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="./src/assets/img/newmanchester.jfif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/jamie4.jfif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/alex2.jpg"
              alt=""
            />
          </div>
          {/*New image */}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/city.jfif"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/nmn.jfif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/computer.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/building.jpg"
              alt=""
            />
          </div>
          {/*New image */}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/nmn3.jfif"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/newmanchester2.jfif"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/jamie3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/luxury.jpg"
              alt=""
            />
          </div>
          {/*New image */}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./src/assets/img/city2.jfif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

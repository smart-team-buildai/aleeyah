import { IoSend } from "react-icons/io5";

function Chat() {
  return (
    <>
      <div className="w-10/12 p-10 h-screen flex flex-col justify-between">
        <div className="flex gap-4 flex-col ">
          <div>
            <h1 className="text-primarycolor text-7xl">Hello, Alleyah</h1>
            <h1 className="text-7xl w-1/2 font-thin text-gray-400">
              What do you plan on eating today?
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold text-gray-400">Presets</h1>

            <div className="grid grid-cols-4 gap-8">
              <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                <h1 className="text-gray-400 text-lg">
                  I have some ingredients what can i make out of it?
                </h1>
              </div>

              <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                <h1 className="text-gray-400 text-lg">
                  Come up with a meal plan and grocery list for the week for me
                </h1>
              </div>
              <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                <h1 className="text-gray-400 text-lg">
                  Substitute the ingredients recipe for a food
                </h1>
              </div>
              <div className="p-8 rounded-lg h-[200px] cursor-pointer hover:border-[2.5px] hover:border-primarycolor bg-gray-50">
                <h1 className="text-gray-400 text-lg">
                  I have been having a funny feeling since i ate, why could that
                  be?
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 justify-between rounded-full bg-gray-50 flex items-center">
          <input
            type="text"
            placeholder="How would you like aleeyah to help you today?"
            className="flex w-full outline-none bg-transparent"
          />
          <button>
            <IoSend />
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default Chat;

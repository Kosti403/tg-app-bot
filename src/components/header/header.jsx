import { useTelegram } from "../../shared/hook/useTelegram";
import { Button } from "../../shared/ui/button/button";


export default function Header() {
  const { firstName, handleClose } = useTelegram();
  return (
    <>
      <header className="w-full bg-cyan-800 p-5 text-center m-0 flex justify-between items-center ">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg  text-gray-100">Telegram Bot</h2>
          <Button
            onClick={handleClose}
            className="text-black "
          >
            Close
          </Button>
        </div>
        <span className="text-center font-medium text-lg text-stone-200">
          Приветствуем <br />{firstName}!
        </span>
      </header>
    </>
  );
}

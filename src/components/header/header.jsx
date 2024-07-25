import { useTelegram } from "../hook/useTelegram";
import { Button } from "../ui/button";

export default function Header() {
  const { user, handleClose } = useTelegram();
  return (
    <>
      <header>
        <h1>Telegram Bot</h1>
        <Button onClick={handleClose}>Close</Button>
        <span className="user-name">Приветствуем, {user?.username}</span>
      </header>
    </>
  );
}

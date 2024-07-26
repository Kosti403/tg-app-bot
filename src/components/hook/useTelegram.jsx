const tg = window.Telegram.WebApp;
export function useTelegram() {
  const handleClose = () => {
    tg.close();
  };
  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    tg,
    handleClose,
    onToggleButton,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
    number: tg.initDataUnsafe?.number,
    email: tg.initDataUnsafe?.email,
  };
}

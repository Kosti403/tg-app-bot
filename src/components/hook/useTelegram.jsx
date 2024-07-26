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
  const user = tg.initDataUnsafe?.user;
  return {
    tg,
    handleClose,
    onToggleButton,
    firstName: user?.first_name,
    lastName: user?.last_name,
    photoUrl: user?.photo_url,
    userId: user?.id,
  };
}

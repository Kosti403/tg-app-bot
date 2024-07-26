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
    userId: tg.initDataUnsafe?.user?.id,
    firstName: tg.initDataUnsafe?.user?.first_name,
    lastName: tg.initDataUnsafe?.user?.last_name,
    photoUrl: tg.initDataUnsafe?.user?.photo_url,
  };
}

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

  const user = tg.initDataUnsafe?.user || {};
  const userId = tg.initDataUnsafe?.id || '';
  const firstName = tg.initDataUnsafe?.first_name || '';
  const lastName = tg.initDataUnsafe?.last_name || '';
  const photoUrl = tg.initDataUnsafe?.photo_url || '';

  return {
    tg,
    handleClose,
    onToggleButton,
    user,
    userId,
    firstName,
    lastName,
    photoUrl,
  };
}

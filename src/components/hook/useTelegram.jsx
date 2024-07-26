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

  const initData = tg.initDataUnsafe || {};
  
  const user = initData.user || {};
  const userId = user.id || "";
  const firstName = user.first_name || "";
  const lastName = user.last_name || "";
  const photoUrl = user.photo_url || "";

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

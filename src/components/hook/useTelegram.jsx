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
  const userId = initData.id || "";
  const firstName = initData.first_name || "";
  const lastName = initData.last_name || "";
  const photoUrl = initData.photo_url || "";

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

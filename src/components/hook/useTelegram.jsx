const tg = window.Telegram.WebApp;

export function useTelegram() {
  const handleClose = () => tg.close();

  const onToggleButton = () => {
    tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
  };

  const { user = {}, email = "Not provided", phone_number: phoneNumber = "Not provided", auth_date: authDate = 0 } = tg.initDataUnsafe || {};
  const { id = "", first_name: firstName = "", last_name: lastName = "", photo_url: photoUrl = "" } = user;

  return {
    tg,
    handleClose,
    onToggleButton,
    user,
    userId: id,
    firstName,
    lastName,
    photoUrl,
    email,
    phoneNumber,
    authDate: new Date(authDate * 1000).toLocaleString(),
  };
}

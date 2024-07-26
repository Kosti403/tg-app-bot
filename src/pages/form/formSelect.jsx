import { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../shared/hook/useTelegram";
import s from "./Form.module.css";

export const FormSelect = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject, tg]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, [tg]);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street, tg.MainButton]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={s.formContent}>
     <div className={s.form} >
      <h3 className={s.title}>Введите ваши данные</h3>
      <input
        className={s.input}
        type="text"
        placeholder="Страна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={s.input}
        type="text"
        placeholder="Улица"
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className={s.select}>
        <option className={s.option} value="physical">Физ. лицо</option>
        <option className={s.option} value="legal">Юр. лицо</option>
      </select>
     </div>
    </div>
  );
};

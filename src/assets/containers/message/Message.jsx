import axios from 'axios'
import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'
import "./message.css"

const Message = () => {
    const {t, i18n} = useTranslation();
    const Messager = (e) => {
        e.preventDefault();
        const token = "7402062434:AAFA_T8sjTdOkoE9IuJ1-Fy6n9GHnk3F2k4";
        const m_id = 5187415041;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
      
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const tel = formData.get('tel');
        const mess = formData.get('mess');

        
        if (name.length < 2) {
            Swal.fire({
              title: t('error'),
              text: t('name_too_short'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
            return;
          }
      
          if (!name || !tel || !mess) {
            Swal.fire({
              title: t('error'),
              text: t('all fields required'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
            return;
          }
      
        axios
          .post(url, {
            chat_id: m_id,
            text: `Name: ${name}\nTel: ${tel}\nMessage: ${mess}`,
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: t('message_sent'),
              icon: 'success',
              confirmButtonText: t('ok')
            });
            e.target.reset();
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: t('error'),
              text: t('message_not_sent'),
              icon: 'error',
              confirmButtonText: t('ok')
            });
          });
      };
  return (
    <div className='message'>
      <div className="container message__inner">
        <form id='form' onSubmit={Messager}>
            <h2>{t("message")}</h2>
            <input type="text" name="name" id="name" placeholder={t("yourname")} />
            <input type="tel" name="tel" id="tel" placeholder={t("phonenum")}/>
            <textarea name="mess" id="mess" cols="30" rows="10" placeholder={t("mess")}></textarea>
            <br />
            <button className="btn btn__message" type='submit'>{t("sending")}</button>
        </form>
      </div>
    </div>
  )
}

export default Message

import React from 'react'
import style from './OutlineButton.module.scss';

export interface OutlineButtonProps{
    btnText:string,
    onClickBtn:()=>void
}
function OutlineButton({btnText,onClickBtn}:OutlineButtonProps) {
  return (
    <button onClick={onClickBtn} className={style.btnCont}>
        {btnText}
    </button>
  )
}

export default OutlineButton
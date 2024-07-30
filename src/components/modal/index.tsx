import React from 'react'
import style from './Modal.module.scss';
import closeIcon from '../../assests/logos/close.svg';

export interface ModalProps{
    title:string,
    isOpen?:()=>{},
    subtitle?:string,
    logo?:string,
    children:any
}
function Modal({isOpen,title,subtitle,logo,children}:ModalProps ){
  return (
    <>
      <div className={style.darkBG}/>
      <div className={style.centered}>
        <div className={style.modal}>
            {/***Modal Header */}
          <div className={style.modalHeader}>
            <img onClick={isOpen} className={style.close} src={closeIcon} width={16} height={16} alt='modal-close'/>
            {logo &&
                <img src={logo} width={48} height={48} alt='modal-header-icon'/>
            }
            <div className={style.flexCol}>
                <div className={style.title}>{title}</div>
                <div className={style.greyText}>{subtitle}</div>
            </div>
           </div> 
            {/***Modal content */}
            {children}
        </div>
      </div>
    </>  )
}

export default Modal
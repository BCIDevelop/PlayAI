
import useAlert from '../../hook/useAlert'
import styles from './toast.module.css'
import { useEffect } from 'react'

const Toast = () => {
    const {toast,hideToast}=useAlert()
   useEffect(()=>{
        const fn= toast.visibility ? hideToast : ()=>{}
         const timerId=setTimeout(()=>{
           fn()
        },3000) 
        
        return ()=> clearTimeout(timerId) 
   },[toast]) 
   if (toast.visibility===true){
  return (
    
    <div className={styles.wrapper}>
        <div className={toast.type==='Error'? styles.toastError : styles.toastSuccess}>
            <div className={styles.container1}>
                <i className="fas fa-times-circle"></i>
            </div>
            <div className={styles.container2}>
                <p>{toast.type}</p>
                <p className="error-message-toast">{toast.message}</p>
            </div>
            <button onClick={hideToast}> &times;</button>
            <div className={toast.type==='Error'? styles.animatedLineError:styles.animatedLineSuccess}></div>
        </div>
      
    </div>
  )
} 
 return null
}

export default Toast
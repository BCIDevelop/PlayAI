import avatar from '../../assets/avatar.svg'
import { AvatarType } from '../../types/avatar.type'
import './avatar.css'

const Avatar = ({classAvatar,userAvatar}: AvatarType) => {
  const classText = classAvatar ? `avatar-container ${classAvatar}`: `avatar-container`
  const avatarImage = userAvatar ? userAvatar : avatar
  return (
    <figure className={classText}>
        <img className='avatar-container__image' src={avatarImage} alt="avatar" />
    </figure>
  )
}

export default Avatar

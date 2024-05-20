import { User } from '../common/types/user';

function UserAvatar(props: { user: User }) {
  return (
    <img
      alt='user'
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      src={props.user.picture}
      referrerPolicy='no-referrer'
    />
  );
}

export default UserAvatar;

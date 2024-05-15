import { User } from "../common/types/user";

function UserAvatar(props: { user: User }) {
  return <img src={props.user.picture} alt={props.user.name} />;
}

export default UserAvatar;

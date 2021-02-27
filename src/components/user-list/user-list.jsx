import UserPreview from '../user-preview/user-preview';
import './user-list.css';

function UserList({ users }) {
	return (
		<div className="UserList">
			{users.map((user, index) => (
				<UserPreview key={index} user={user} />
			))}
		</div>
	);
}

UserList.defaultProps = {
	users: [{ user: null, status: null, place: null }],
};
export default UserList;

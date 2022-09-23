import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from './Statistic/Statistics';
import stats from 'components/Statistics/data';
import { FriendList } from './FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="upload stats" />
      <FriendList friends={friends} />
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

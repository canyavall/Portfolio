import { GET_FEED, LIKE_BLITZ_FEED, ADD_BLITZ_FEED }  from '../../actions/defaultActionConstants';
import sortBy from 'lodash/sortBy';

const feed = (state = [], action) => {
  switch (action.type) {
    case GET_FEED:
      return sortBy(action.content, ['created_at']).reverse();

    case LIKE_BLITZ_FEED:
      const newLikeState = [ ...state ];
      for (let i = 0; i < newLikeState.length; i++) {
        if (newLikeState[i]._id === action.content._id){
          newLikeState[i].isLiked = !newLikeState[i].isLiked;
          continue;
        }
      }
      return newLikeState;

      case ADD_BLITZ_FEED:
        const newAddState = [ ...state ];
        newAddState.unshift(action.content);
        return newAddState;

    default:
      return state;
  }
}

export default feed;

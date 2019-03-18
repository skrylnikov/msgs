import { connect } from 'react-redux';
import { getMessageList } from '../selectors';

import { Store } from '../../reducers';
import { Dispatch, bindActionCreators } from 'redux';

import { sendMessage } from '../actions';
import { Chat } from './chat';

const MapStateToProps = () => {

  return (state: Store) => ({
    messageList: getMessageList(state),
  });
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  sendMessage,
}, dispatch);

export const ChatContainer = connect(MapStateToProps, mapDispatchToProps)(Chat)
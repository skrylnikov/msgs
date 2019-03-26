import { connect } from 'react-redux';

import { Store } from '../../reducers';
import { Dispatch, bindActionCreators } from 'redux';

import { sendMessage } from '../actions';
import { Chat } from './chat';

const MapStateToProps = () => {

  return (state: Store) => ({
  });
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  sendMessage,
}, dispatch);

export const ChatContainer = connect(MapStateToProps, mapDispatchToProps)(Chat)
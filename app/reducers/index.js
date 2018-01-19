import { combineReducers } from 'redux';
import routes from './routes';
import notes from '../modules/notes/duck/notes';

export default combineReducers({
  routes,
  notes
});

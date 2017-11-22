import DECREMENT_OFFSET from 'constants/decrement-offset';
import template from 'actions/template/template';

const decrementOffset = num => template(DECREMENT_OFFSET, num);

export default decrementOffset;

import INCREMENT_OFFSET from 'constants/increment-offset';
import template from 'actions/template/template';

const incrementOffset = num => template(INCREMENT_OFFSET, num)

export default incrementOffset;

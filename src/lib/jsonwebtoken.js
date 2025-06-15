import util from 'util';
import baseJWT from 'jsonwebtoken';

const sign = util.promisify(baseJWT.sign);
const verify = util.promisify(baseJWT.verify);

export default {
    sign,
    verify,
};
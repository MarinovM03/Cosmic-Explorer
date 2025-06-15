import util from 'util';
import baseJWT from 'jsonwebtoken';

const sign = util.promisify(baseJWT.sign);
const decode = util.promisify(baseJWT.decode);
const verify = util.promisify(baseJWT.verify);

export default {
    sign,
    decode,
    verify,
};
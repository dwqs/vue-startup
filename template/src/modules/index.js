import Vue from 'vue';
import Revuejs, { Modules } from 'revuejs';

Vue.use(Revuejs);

import time from './time';

const modules = new Modules({
    time
});

export default modules;
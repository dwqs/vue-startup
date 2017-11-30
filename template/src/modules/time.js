import awaitTo from 'async-await-error-handling';

import api from '@src/network/api';

export default {
    namespace: 'time',
    state: {
        curTime: Date.now()
    },
    actions: {
        async changeTime (state, payload) {
            const [err, data] = await awaitTo(api.getIndex());
            if(data){
                return {
                    curTime: Date.now()
                };
            }
        }
    }
}
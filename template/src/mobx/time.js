import { observable, action } from 'mobx';
import awaitTo from 'async-await-error-handling';

import api from '@src/network/api';

Class Time {
    @observable
    curTime = Date.now();

    @action
    async changeTime () {
        const [err, data] = await awaitTo(api.getIndex());
        if(data){
            this.curTime = Date.now();
        }
    }
}

const time = new Time();
export default time;
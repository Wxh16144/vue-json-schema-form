/**
 * Created by Liu.Jun on 2019/12/4 15:06.
 */

import propsSchema from './AllGoodsList.json';
import uiSchema from './uiSchema.json';

const View = () => import('./component/View.vue');

export default {
    View,
    propsSchema,
    uiSchema
};

import {vRow} from './component/v-row';

export {vRow} from './component/v-row'
import type {App} from 'vue'

export const setupDirectives = (app: App) => {
    app.directive('row', vRow)
}
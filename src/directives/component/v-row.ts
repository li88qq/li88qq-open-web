import {watch, ref} from 'vue'
import type {Directive} from 'vue'
import {useElementSize, useDebounceFn} from '@vueuse/core'

//class前缀
const prefix = 'row'

/**
 * 栅格指令
 * 用于拥有栅格元素上，可根据当前元素元素的宽度，设置相应的类
 */
export const vRow: Directive = {
    mounted: (el) => {
        //当前栅格
        const colRef = ref('')
        //防抖获取元素宽度
        const {width} = useElementSize(el)

        /**
         * 防抖，计算元素栅格
         */
        const debouncedFn = useDebounceFn((value) => {
            if (value < 576) {
                colRef.value = 'xs'
            } else if (value < 768) {
                colRef.value = 'sm'
            } else if (value < 992) {
                colRef.value = 'md'
            } else if (value < 1200) {
                colRef.value = 'lg'
            } else if (value < 1600) {
                colRef.value = 'xl'
            } else {
                colRef.value = 'xxl'
            }
        }, 200)

        /**
         * 设置相对于当前元素的栅格
         */
        watch(() => colRef.value, (value, oldValue) => {
            if (oldValue) {
                el.classList.remove(`${prefix}-${oldValue}`)
            }
            el.classList.add(`${prefix}-${value}`)
        })

        /**
         * 获取宽度
         */
        watch(() => width.value, value => {
            debouncedFn(value)
        })
    },
}
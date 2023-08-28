import {defineStore} from 'pinia'

interface State {
    //dom
    el: any,
    //内容
    text: string,
    //是否显示
    show: boolean,
}

/**
 * 统一tooltip
 */
export const useTooltipStore = defineStore('tooltipStore', {
    state: (): State => ({
        el: null,
        text: '',
        show: false,
    }),
    getters:{
      getText:(state)=>state.text?.replace(/[\n]+/g,'\n')
    },
    actions:{
        //注册
        register(el:HTMLElement,text:string){
            this.el = el
            this.text = text
            this.show = true
        },
        //隐藏
        close(){
            this.show = false
        },
        /**
         * 表格列注册
         * @param text 内容
         */
        customCell_cell(text:string){
            return {
                onmouseover:(e)=>{
                    this.register(e.target,text)
                },
                onmouseleave:()=>{
                    this.close()
                }
            }
        }
    }
})
import type {FormProps, FormItemProps, ColProps} from 'ant-design-vue'

export type  ItemComponent = 'Input' | 'Select' |'Password'

export interface FormTypes extends FormProps {

}

export interface FormSchema extends FormItemProps {
    component: ItemComponent,
}
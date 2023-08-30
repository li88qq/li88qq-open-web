import type {TableColumnProps} from 'ant-design-vue'

export const columns: TableColumnProps[] = [
    {dataIndex: 'index',title:'序号'},
    {dataIndex: 'id',title:'ID'},
    {dataIndex: 'username',title:'账号'},
    {dataIndex: 'nickname',title:'昵称'},
    {dataIndex: 'password',title:'密码'},
    {dataIndex: 'createDate',title:'注册时间'},
]
/**
 * 自定义属性
 */
export interface DrawerCustomProps {
    //加载中
    loading?: boolean,
    //展示
    open?: boolean,
    //是否详情页
    detail?: boolean,
}

export interface DrawerInstance {
    //设置属性
    setProps: (props: DrawerCustomProps) => void,
}

/**
 * 组件方法
 */
export interface DrawerMethods {
    //展示
    open: () => void,
    //隐藏
    close: () => void,
    //加载中
    openLoading: () => void,
    //关闭加载中
    closeLoading: () => void,
    //获取数据
    getData: () => void,
}

export type RegisterFn = (drawerInstance: DrawerInstance, uuid: string) => void
export type UseDrawerType = [RegisterFn, DrawerMethods];

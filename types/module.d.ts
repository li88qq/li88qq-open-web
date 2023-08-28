declare module '*.vue' {
    import { DefineComponent } from 'vue';

    const Component: DefineComponent<{}, {}, any>;
    export default Component;
}

declare module '*.json' {
    const value: any;
    export const version: string;
    export default value;
}

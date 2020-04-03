import { StyleSheet as RnStyleSheet, ViewStyle, TextStyle, ImageStyle } from '<a href="https://www.miaoroom.com/tag/react" data-toggle="tooltip" title="查看更多关于 react 的文章" target="_blank">react</a>-native';

type StyleProps = Partial<ViewStyle | TextStyle | ImageStyle>;

export const StyleSheet = {
    create(styles: { [className: string]: StyleProps }) {
        return RnStyleSheet.create(styles);
    }
};
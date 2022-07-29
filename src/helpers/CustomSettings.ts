import {configureFonts, DefaultTheme, DarkTheme as PaperDarkTheme} from "react-native-paper";

// interface font {
//     fontFamily:string,
//     fontWeight:undefined | string
// }
//
// interface Fonts {
//     regular: font,
//     medium: font,
//     light:font,
//     thin:font
// }

const fonts: any = {
    regular: {
        fontFamily: 'redhat-regular',
        fontWeight: 'normal',
    },
    medium: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
    light: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
    thin: {
        fontFamily: 'redhat-black',
        fontWeight: 'normal',
    },
}

const font = {
    web: {...fonts},
    ios: {...fonts},
    android: {...fonts}
};

const theme = {
    ...DefaultTheme,
    version: 3,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#17C3B2',
    },
    fonts: configureFonts(font),
};

const darkTheme = {
    ...PaperDarkTheme,
    version:3,
    colors:{
        ...PaperDarkTheme.colors,
        primary:'#17C3B2',
        // secondary:'#17C3B2'
    },
    fonts: configureFonts(font),
}

const CustomSettings = {theme,darkTheme,font}

export default CustomSettings
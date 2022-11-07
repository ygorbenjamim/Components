# Dependências

```
yarn add styled-components
```
```
yarn add react-hook-form
```
```
yarn add react-native-vector-icons
```
```
yarn add react-native-text-input-mask
```

## Dependências de desenvolvedor
```
yarn add --dev @types/react-native-vector-icons
```
```
yarn add --dev @types/styled-components
```

# Instruções de instalação das bibliotecas mencionadas

### react-native-vector-icons

Criar arquivos react-native.config.js na raiz do projeto e colar o código
```js
module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    project: {
        ios: {},
        android: {},
    },
    assets: ['./src/assets/fonts'],
};
```

#### IOS
Inserir em `podfile` o código abaixo
```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Inserir em `info.plist` o código abaixo
```js
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
</array>
```

### react-native-text-input-mask

#### IOS
Inserir em `podfile` o código
```
pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text', :modular_headers => true
```
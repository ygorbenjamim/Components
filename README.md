<p style="text-align: center;">Design de alguns componentes</p>

<div>
	<img src="/img/default.jpeg" alt="Design default" width="300"/>
	<img src="/img/minimal.jpeg" alt="Design minimal" width="300"/>
</div>

## Dependências instaladas

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
yarn add moment
```

```
yarn add react-native-text-input-mask
```

```
yarn add react-native-animatable
```

```
yarn add @react-native-community/datetimepicker
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

#### Android

Inserir em `android/build.gradle` o código

```js
dependencies {
    //...
    implementation(project(':react-native-vector-icons')) // <- Adicionar essa linha
}

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" // <- Adicionar essa linha
```

#### IOS

Inserir em `podfile` o código abaixo

```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Inserir em `info.plist` o código abaixo

```html
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

#### Android

Inserir em `android/build.gradle`o código

```js
buildscript {
    ext {
        // ...
        kotlin_version = '1.6.10' // <- Adicionar essa linha
    }

    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version" // <- Adicionar essa linha
        // ...
    }
}
```

#### IOS

Inserir em `podfile` o código

```js
pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text', :modular_headers => true
```

# Uso

## Button

### Propriedades

|    Prop     |           Tipo           |                  Descrição                  | Requerido |
| :---------: | :----------------------: | :-----------------------------------------: | :-------: |
|   onPress   |       `() => void`       |     Função que será executada ao clicar     |    Sim    |
|  disabled   |        `boolean`         |    Indica se o botão poderá ser clicado     |    Não    |
|   loading   |        `boolean`         | Indica se o botão está em estado de loading |    Não    |
|   outline   |        `boolean`         |        Indica se o estilo `outline`         |    Não    |
| transparent |        `boolean`         |   Indica se o background é `transparent`    |    Não    |
|   design    | `'default' or 'minimal'` |               Indica o design               |    Sim    |

### Exemplo

O botão insere os `children` em um componente de texto internamente, evitando o uso de mais um componente.

```tsx
import React from 'react';
import Button from '../components/Button';

function App() {
	return (
		<Button design="default" onPress={() => Alert.alert('Alert', 'Alert')}>
			Exemplo
		</Button>
	);
}
export default App;
```

## Input

### Propriedades

|     Prop      |           Tipo           |                           Descrição                           | Requerido |
| :-----------: | :----------------------: | :-----------------------------------------------------------: | :-------: |
|     label     |         `string`         |                 Etiqueta da entrada de texto                  |    Não    |
| requiredLabel |        `boolean`         |            Indicação visual para campo obrigatório            |    Não    |
|  maskFormat   |         `string`         | Máscara para o texto, utilizando valores dentro dos colchetes |    Não    |
|     name      |         `string`         |         Referente a integração com `react-hook-form`          |    Sim    |
|     error     |         `string`         |          Mensagem de erro abaixo da entrada de texto          |    Não    |
|    control    |        `control`         |         Referente a integração com `react-hook-form`          |    Sim    |
|   password    |        `boolean`         |    Indica se a entrada de texto receberá um valor de senha    |    Não    |
|    design     | `'default' or 'minimal'` |                        Indica o design                        |    Sim    |

### Exemplo

A entrada de texto herda todas as propriedades de um `TextInput` do React Native, portanto, poderá ser utilizado as demais `props`.

```tsx
import React from 'react';
import Input from '../components/Input';

function App() {
	return (
		<Input
			label="Etiqueta"
			name="name"
			control={control}
			placeholder="Exemplo" // <- Prop herdada do TextInput
			design="default"
		/>
	);
}
export default App;
```

## SelectInput

### Propriedades

|     Prop      |           Tipo           |                             Descrição                             | Requerido |
| :-----------: | :----------------------: | :---------------------------------------------------------------: | :-------: |
|    onPress    |       `() => void`       |         Função que será executada ao selecionar uma opção         |    Não    |
|     data      |       `IPicker[]`        |                          Lista de opções                          |    Não    |
|     label     |         `string`         |                   Etiqueta da entrada de texto                    |    Não    |
| requiredLabel |        `boolean`         |              Indicação visual para campo obrigatório              |    Não    |
|    design     | `'default' or 'minimal'` |                          Indica o design                          |    Sim    |
|    loading    |        `boolean`         |                    Indica o estado de loading                     |    Não    |
|     type      |         `string`         | Indica o tipo de opções, podendo ser `'text' ou 'date' ou 'time'` |    Não    |
|     error     |         `string`         |            Mensagem de erro abaixo da entrada de texto            |    Não    |
|     name      |         `string`         |           Referente a integração com `react-hook-form`            |    Sim    |
|    control    |        `control`         |           Referente a integração com `react-hook-form`            |    Sim    |

#### O tipo `IPiker` consiste na seguinte interface

```tsx
interface IPicker {
	key: string | number;
	label: string;
}
```

### Exemplo

```tsx
import React from 'react';
import Input from '../components/SelectInput';

function App() {
	return (
		<SelectInput
			data={options}
			label="Etiqueta"
			type="text"
			design="default"
			name="name4"
			control={control}
		/>
	);
}
export default App;
```

## Dialog

### Propriedades

|     Prop      |                    Tipo                    |                   Descrição                    | Requerido |
| :-----------: | :----------------------------------------: | :--------------------------------------------: | :-------: |
|  dialogList   |            `IDialogItemProps[]`            |       Variável com uma lista de diálogos       |    Sim    |
| setDialogList | `(dialogList: IDialogItemProps[]) => void` | Função que altera o valor da lista de diálogos |    Sim    |

#### O tipo `IDialogItemProps` consiste na seguinte interface

```tsx
interface IDialogItemProps {
	id: number;
	design?: 'default' | 'minimal';
	title?: string;
	subtitle?: string;
	options?: IOptionsProp[];
	loading?: boolean;
}
```

### Exemplo

O componente precisa ser incluído na `DOM`dentro do `return`, após isso, o seu valor poderá ser alterado por uma função e ao decorrer do código, vários diálogos distintos poderão ser utilizados. Toda a lógica de chamada foi abstraída para um hook.

```tsx
import React, { useState } from 'react';
import Dialog from '../components/Dialog';
// Hook
import useDialog from '../hooks';

function App() {
	const { dialog, dialogList, setDialogList } = useDialog();

	// chamada da função. Exemplo 1
	dialog('Título', 'Subtítulo');

	// chamada da função. Exemplo 2
	dialog('', 'Subtítulo', [
		{ text: 'Opção 1', onPress: () => Alert.alert('Chamada de função') },
		{ text: 'Opção 2', onPress: () => Alert.alert('Chamada de função') },
		{ text: 'Opção 3', onPress: () => Alert.alert('Chamada de função') },
		{ text: 'Opção 4', onPress: () => Alert.alert('Chamada de função') },
		{ text: 'Cancelar', onPress: () => {} },
	]);

	return <Dialog dialogList={dialogList} setDialogList={setDialogList} />;
}
export default App;
```

## Toast

### Propriedades

|     Prop     |                   Tipo                   |                  Descrição                  | Requerido |
| :----------: | :--------------------------------------: | :-----------------------------------------: | :-------: |
|  toastList   |           `IToastItemProps[]`            |       Variável com uma lista de toast       |    Sim    |
| setToastList | `(toastList: IToastItemProps[]) => void` | Função que altera o valor da lista de toast |    Sim    |

#### O tipo `IToastItemProps` consiste na seguinte interface

```tsx
interface IToastItemProps {
	id: number;
	title?: string;
	subtitle: string;
	type: 'success' | 'info' | 'danger' | 'warning';
}
```

### Exemplo

O componente precisa ser incluído na `DOM`dentro do `return`, após isso, o seu valor poderá ser alterado por uma função e ao decorrer do código, vários toast's distintos poderão ser utilizados. Toda a lógica de chamada foi abstraída para um hook.

```tsx
import React, { useState } from 'react';
import Toast from '../components/Toast';

// Hooks
import useToast from '../hooks';

function App() {
	const { toast, toastList, setToastList } = useToast();

	// chamada da função. Exemplo 1
	toast('Sucesso', 'Mensagem de sucesso.', 'success');

	// chamada da função. Exemplo 2
	toast('Informação', 'Mensagem de informação.', 'info');

	return <Toast toastList={toastList} setToastList={setToastList} />;
}
export default App;
```

## NotFound

### Propriedades

|    Prop     |   Tipo   |              Descrição              | Requerido |
| :---------: | :------: | :---------------------------------: | :-------: |
| description | `string` | Descrição do que não foi encontrado |    Não    |

### Exemplo

O Componente exibe um feedback para o usuário informando que ao concluir uma busca, os dados não foram encontrados. Um bom exemplo de uso, é utilizá-lo como argumento para a prop `ListEmptyComponent` do `FlatList`.

```tsx
import React, { useState } from 'react';
import NotFound from '../components/NotFound';

function App() {
	return <NotFound description="Nenhum registro encontrado." />;
}
export default App;
```

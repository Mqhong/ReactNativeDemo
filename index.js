import { AppRegistry } from 'react-native';
import App from './demoJS/9.0_FetchAPI';

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('FirstProject', () => App);

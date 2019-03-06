/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import luancher from './js/Launcher/launcher';
import {Navigator} from "react-native-deprecated-custom-components"

/**
 * abstract class  Navigator{
 *     Object component
 *
 *     constuct(){
 *         component= initialRoute()
 *
 *     }
 *
 *  abstract initialRoute(component );
 * onDraw(){   renderScene
 *
 *     return Component
 *
 * }
 * }
 */
class MeiTuan extends Component {
    render(): React.ReactNode {
        return <Navigator
            initialRoute={{
                name: "启动页",
                component: luancher
            }}
            renderScene={(router, navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>;

            }
            }
        />;
    }

}

AppRegistry.registerComponent(appName, () => MeiTuan);

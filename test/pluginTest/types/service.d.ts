import { SoService } from 'iqy-server';
  import { TestPlugin } from '/home/southorange/project/node_project/iqy-server/test/pluginTest/test.plugin'; 
undefined
  declare module 'iqy-server' {
    interface SoService {
      TestPlugin: TestPlugin; 
wss: SocketServer; 

    }
  }
  
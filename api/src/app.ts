import { Server } from "./utils/server";

Server
    .start()
    .listen(2000, () => {
        console.log('started server');
    }); 
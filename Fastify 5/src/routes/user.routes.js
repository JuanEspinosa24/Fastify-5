import userCtrl from "../controllers/user.controller.js";

export const usersRoutes=(fastify,opts,done)=>{

    fastify.post("/register", userCtrl.register);
    fastify.post("/login", userCtrl.login);

    done()

}

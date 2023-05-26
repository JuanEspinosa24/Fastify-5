import facturaCtrl from "../controllers/Factura.controller.js";
import { verifyToken } from "../middlewares/auth.js";

export const facturaRoutes= (fastify,opts,done)=>{

fastify.get("/", facturaCtrl.listAll);
fastify.get("/:id", facturaCtrl.listById);
fastify.post("/", {preHandler:[verifyToken]},facturaCtrl.create);
fastify.delete("/:id",{preHandler:[verifyToken]}, facturaCtrl.delete);
fastify.put("/:id", {preHandler:[verifyToken]},facturaCtrl.update);

done();

}
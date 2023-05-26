import productCtrl from "../controllers/Product.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";


export const productRoutes= (fastify,opts,done)=>{

fastify.get("/", productCtrl.listAll);
fastify.get("/:id", productCtrl.listById);
fastify.post("/", {preHandler:[verifyToken,upload.single("img")]}, productCtrl.create);
fastify.delete("/:id", {preHandler:[verifyToken]}, productCtrl.delete);
fastify.put("/:id", {preHandler:[verifyToken,upload.single("img")]}, productCtrl.update);

done();

}


import categoryCtrl from "../controllers/Category.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";

export const categoryRoutes= (fastify,opts,done)=>{

fastify.get("/", categoryCtrl.listAll);

fastify.get("/:id", categoryCtrl.listById);

fastify.post("/", {preHandler:[verifyToken,upload.single("img")]}, categoryCtrl.create);

fastify.delete("/:id", {preHandler:[verifyToken]}, categoryCtrl.delete);

fastify.put("/:id", {preHandler:[verifyToken,upload.single("img")]}, categoryCtrl.update);

done()

}

const { Router } = require("express");
const routes = require("../routes/index");

const router = Router();

router.get("/", (_req, res) => {res.status(200).send("<h3>Api funcionando</h3>")});
router.get("/consultar", routes.consultarRemedios.consultarRemedios);
router.post("/agendar", routes.agendarRemedio.agendarRemedio);
router.post("/consumir", routes.consumirRemedio.consumirRemedio);

exports.router = router;
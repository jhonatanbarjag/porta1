import { Router } from "express";


const router = Router();


router.get("/", (req, res) => res.render("index", {title :"inicio"}));
router.get("/about", (req, res) => res.render("sobremi", {title :"sobre mi"}));
router.get("/habilidad", (req, res) => res.render("habilidades", {title :"habilidades"}));
router.get("/contacto", (req, res) => res.render("contacto", {title :"contacto"}));


export default router;
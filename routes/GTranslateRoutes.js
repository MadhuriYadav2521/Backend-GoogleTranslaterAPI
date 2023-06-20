import express from "express";
import { detect, languages, translate } from "../controllers/GTranslateController.js";
var router = express.Router();


router.post('/detect',detect);
router.get('/languages',languages);
router.get('/translate',translate);




export default router;
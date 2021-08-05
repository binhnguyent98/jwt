import {body} from "express-validator";
import validator from "./validator";

export default {
    user: [
        body('email')
            .not()
            .isEmpty().withMessage('No empty')
            .isEmail().withMessage('Email no valid'),
        body('password')
            .not()
            .isEmpty().withMessage('Password not empty')
            .isLength({ min: 6 , max: 20}),
        validator
    ],
    update: [
        body('email')
            .not()
            .isEmpty().withMessage('No empty')
            .isEmail().withMessage('Email no valid'),
        validator
    ]
}
// export function rollAdminVerify(req, res, next) {
//     if (req.session?.admin) {
//         return next()
//     }
//     return res.status(401).send('Usted no es admintrador')
// }

// export function rollUserVerify(req, res, next) {
//     if (req.session?.usuario) {
//         return next()
//     }
//     return res.status(401).send('Usted no es usuario')
// }
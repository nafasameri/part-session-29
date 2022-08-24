const RoleRepository = require("../repositories/role.repository");
const logger = require('log4js').getLogger();
logger.level = 'debug';

const roleRepository = new RoleRepository();
const sendResponse = require('../../../modules/handler/response.handler');

const getAllRoles = async (req, res) => {
    try {
        const id = req.querystring ?.id;
        if (id) {
            const role = await roleRepository.fetchRole(id);
            sendResponse(res, 200, { "Content-Type": "application/json" }, role);
        }
        else {
            const roles = await roleRepository.fetchAll();
            sendResponse(res, 200, { "Content-Type": "application/json" }, roles);
        }
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

const createRole = async (req, res, data) => {
    try {
        const productId = await roleRepository.add(data);
        if (!productId) {
            sendResponse(res, 404, { "Content-Type": "application/json" }, { message: 'Could Not Create' });
        } else {
            sendResponse(res, 200, { "Content-Type": "application/json" }, productId);
        }
    } catch (error) {
        logger.error(error);
        throw error;
    }
};

// async function getRoles(req, res) {
//     try {
//         const id = req.params ?.id;
//         if (id) await getRole(req, res, id);
//         else {
//             let products = await roleRepository.findAll();
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(products));
//         }
//     } catch (e) {
//         logger.error(e);
//     }
// }

// async function getRole(req, res, id) {
//     try {
//         const product = await Role.findById(id)
//         if (!product) {
//             res.writeHead(404, { 'Content-Type': 'application/json' })
//             res.end(JSON.stringify({ message: 'Role Not Found' }))
//         } else {
//             res.writeHead(200, { 'Content-Type': 'application/json' })
//             res.end(JSON.stringify(product))
//         }
//     } catch (error) {
//         logger.error(error)
//     }
// }


module.exports = {
    getAllRoles,
    createRole
};

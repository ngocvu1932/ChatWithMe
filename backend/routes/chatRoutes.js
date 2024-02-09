const express = require('express');
const { protect } = require('../middlewares/authMiddleWares');
const {removeFromGroup, accessChat, addToGroup, fetchchat, createGroupChat, renameGroupChat } = require('../controllers/chatControllers');

const router = express.Router();

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchchat);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroupChat);
router.route('/groupremove').put(protect, removeFromGroup);
router.route('/groupadd').put(protect, addToGroup);

module.exports = router;
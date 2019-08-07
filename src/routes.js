const express=require("express")
const DevController=require('./controllers/DevController')
const likeController=require('./controllers/likeController')
const dislikeController=require('./controllers/dislikeController')
const router=express.Router()

router.get('/dev',DevController.index)
router.post('/dev',DevController.store)
router.post('/dev/:devId/likes',likeController.store)
router.post('/dev/:devId/dislikes',dislikeController.store)

module.exports=router;
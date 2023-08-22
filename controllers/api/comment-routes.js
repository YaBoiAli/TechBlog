const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// api/comment routes
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
       
      ...req.body, // req.body is an object containing the comment data

      // the "..."  the code is spreading the properties of req.body and creating a new object with the same properties.
      user_id: req.session.user_id,
      // assigns the value of req.session.user_id to the user_id property of the object being created.
    });
    console.log(newComment)
    res.status(200).json(newComment);
   
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
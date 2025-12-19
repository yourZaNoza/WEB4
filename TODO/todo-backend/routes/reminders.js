// routes/reminders.js
const express = require("express");
const pool = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const now = new Date().toISOString();
    const [reminders] = await pool.execute(
      `SELECT id, title, description, image_url, reminder_time, is_completed
       FROM tasks 
       WHERE user_id = ? 
         AND reminder_time IS NOT NULL 
         AND reminder_time >= ?
         AND is_completed = FALSE
       ORDER BY reminder_time ASC`,
      [req.user.userId, now]
    );

    res.json(reminders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при получении напоминаний" });
  }
});

module.exports = router;

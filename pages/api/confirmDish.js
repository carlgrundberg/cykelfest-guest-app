import withSession from "../../lib/session";
import { confirmDish } from "../../lib/data";

export default withSession(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    await confirmDish(user.name);
    return res.json({ ok: true });
  } else {
    return res.json({ ok: false });
  }
});

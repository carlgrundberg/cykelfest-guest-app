import withSession from "../../lib/session";
import { getHostByPhone } from "../../lib/data";

export default withSession(async (req, res) => {
  const { phone } = await req.body;

  const host = await getHostByPhone(phone);

  if (host) {
    const user = { isLoggedIn: true, phone, ...host };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } else {
    res.status(400).json({ error: "Not found" });
  }
});

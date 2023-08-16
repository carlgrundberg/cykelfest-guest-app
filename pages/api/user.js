import withSession from "../../lib/session";
import { getDataForHost } from "../../lib/data";

export default withSession(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    res.json({
      isLoggedIn: true,
      ...user,
      ...(await getDataForHost(user.name)),
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});

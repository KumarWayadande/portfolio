import { db } from "../db/db.js";
import { createJSONToken } from "../util/auth.js";

export async function getUser(email) {
  const q = "select * from users where `email` = ?";

  try {
    const [result] = await db.query(q, [email]);
    if (result.length === 0) return null;
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
}

export async function login(req, res) {
  const userData = req.body.body.userData;
  const timeData = req.body.body.timeData;

  const isAlreadyRegistered = await getUser(userData.email);

  if (!isAlreadyRegistered) {
    try {
      const q = "insert into users values(?)";
      const dataToStore = [
        userData.email,
        userData.username,
        userData.profileUrl,
        userData.phoneNumber,
      ];
      await db.query(q, [dataToStore]);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    const q = "insert into system values(?)";
    const dataToBeStored = [
      userData.email,
      timeData.createdAt,
      timeData.creationTime,
      timeData.lastLoginAt,
      timeData.lastSignInTime,
    ];
    await db.query(q, [dataToBeStored]);
  }

  const authToken = createJSONToken(userData.email);
  return { user: userData, token: authToken, message: "Login done" };
}

export function logout(req, res) {
  res.json("logout Successfull");
}

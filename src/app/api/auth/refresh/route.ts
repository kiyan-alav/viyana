import connectToDB from "@/configs/db";
import { generateAccessToken, verifyRefreshToken } from "@/utils/auth";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";

interface MyJwtPayload extends JwtPayload {
  id: string;
  email: string;
  role: string;
}

export async function GET() {
  try {
    await connectToDB();

    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return Response.json(
        { message: "توکن وجود ندارد، لطفاً وارد شوید" },
        { status: 401 }
      );
    }

    const tokenPayload = verifyRefreshToken(refreshToken) as MyJwtPayload;

    if (!tokenPayload) {
      return Response.json({ message: "توکن نامعتبر است" }, { status: 401 });
    }

    const verifiedUser = await User.findById(tokenPayload.id).select("_id");

    if (!verifiedUser) {
      return Response.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    const isValidToken = await User.findOne({
      _id: tokenPayload.id,
      refreshToken,
    });

    if (!isValidToken) {
      return Response.json({ message: "توکن نامعتبر است" }, { status: 401 });
    }

    const newAccessToken = generateAccessToken({
      id: tokenPayload.id,
      email: tokenPayload.email,
      role: tokenPayload.role,
    });

    (await cookies()).set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    return Response.json({ message: "توکن جدید صادر شد" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

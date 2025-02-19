import connectToDB from "@/configs/db";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import User from "@/models/User";
import { JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
  id: string;
}

export async function GET() {
  try {
    await connectToDB();

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return Response.json(
        { message: "توکن وجود ندارد، لطفاً وارد شوید" },
        { status: 401 }
      );
    }

    const tokenPayload = verifyAccessToken(accessToken) as MyJwtPayload;

    if (!tokenPayload) {
      return Response.json({ message: "توکن نامعتبر است" }, { status: 401 });
    }

    const verifiedUser = await User.findById(tokenPayload.id).select(
      "-password"
    );

    if (!verifiedUser) {
      return Response.json({ message: "کاربر یافت نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "اطلاعات کاربر", verifiedUser },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

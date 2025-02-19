import connectToDB from "@/configs/db";
import User from "@/models/User";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyPassword,
} from "@/utils/auth";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const { email, password } = body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return Response.json(
        { message: "کاربری با این ایمیل وجود ندارد" },
        { status: 400 }
      );
    }

    const isCorrectPasswordWithHash = await verifyPassword(
      password,
      existingUser.password
    );

    if (!isCorrectPasswordWithHash) {
      return Response.json(
        { message: "ایمیل یا پسورد اشتباه است" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({
      email,
      id: existingUser._id,
      role: existingUser.role,
    });
    const refreshToken = generateRefreshToken({
      email,
      id: existingUser._id,
      role: existingUser.role,
    });

    await User.findOneAndUpdate(
      { email },
      {
        $set: { refreshToken },
      }
    );

    const response = Response.json(
      {
        message: "با موفقیت وارد شدید",
      },
      {
        status: 201,
      }
    );

    response.headers.append(
      "Set-Cookie",
      `accessToken=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    response.headers.append(
      "Set-Cookie",
      `refreshToken=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return response;
  } catch (error) {
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}

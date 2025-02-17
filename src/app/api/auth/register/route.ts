import connectToDB from "@/configs/db";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const { firstName, lastName, email, mobile, password } = body;

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return Response.json(
        { message: "کاربری با این ایمیل یا موبایل وجود دارد" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const allUser = await User.find({});

    await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
      role: allUser.length > 0 ? "USER" : "ADMIN",
    });

    return Response.json(
      { message: "کاربر جدید با موفقیت ایجاد شد" },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json(
      { message: error },
      {
        status: 500,
      }
    );
  }
}

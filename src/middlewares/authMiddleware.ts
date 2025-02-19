import { NextRequest } from "next/server";

export function authMiddleware(req: NextRequest) {
    
  
    console.log("authMiddleware", req.cookies);
}

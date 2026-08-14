import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, systemType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // In production, dispatch via Resend / SendGrid / Webhook
    console.log("[CONTACT_INCOMING]", { name, email, systemType, message, receivedAt: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: "Telemetry received successfully. I will review and reply within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server processing error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  address?: string;
  buildingType?: string;
  floors?: string;
  area?: string;
  message?: string;
  locale?: string;
};

const REQUIRED_FIELDS: Array<keyof QuotePayload> = [
  "name",
  "email",
  "phone",
  "address",
  "buildingType",
];

export async function POST(request: Request) {
  let payload: QuotePayload;
  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((key) => !payload[key]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "missing_fields", fields: missing },
      { status: 400 },
    );
  }

  // Lead capture: log structured for now; wire to email/CRM later (Resend, SendGrid, Sheets, etc.)
  console.log("[quote] new lead", {
    receivedAt: new Date().toISOString(),
    ...payload,
  });

  return NextResponse.json({ ok: true });
}

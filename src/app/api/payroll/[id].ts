import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const url = `${process.env.API_GATEWAY}/payroll-service/api/v1/payroll/${id}`;

  try {
    const response = await axios.get(url, { maxBodyLength: Infinity });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Failed to fetch payroll data",
        error: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}

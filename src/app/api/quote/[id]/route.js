import conMongoDb from "@/utilities/mongodb";
import QuoteModel from "@/models/quotes";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await conMongoDb();
  await QuoteModel.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Quote Update" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await conMongoDb();
  const quote = await QuoteModel.findOne({ _id: id });
  return NextResponse.json({ quote }, { status: 200 });
}

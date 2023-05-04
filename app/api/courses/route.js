import { NextResponse } from "next/server";
import { v4 } from "uuid";
import courses from "./data.json";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: v4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);
  return NextResponse.json(courses);
}

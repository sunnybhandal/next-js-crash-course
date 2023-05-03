import { count } from "console";
import Link from "next/link";

async function fetchCourses() {
  const response = await fetch(`http://localhost:3000/api/courses`);
  const courses = await response.json();
  return courses;
}

export default async function Courses() {
  const courses = await fetchCourses();
  return (
    <div className="">
      {courses.map((course) => (
        <div key={course.id} className="">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
}

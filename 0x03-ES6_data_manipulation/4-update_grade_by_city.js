export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // eslint-disable-next-line max-len
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id); // Find grade by studentId
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A', // Update or set 'N/A' if no grade found
      };
    });
}

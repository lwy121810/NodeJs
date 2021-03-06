CREATE TABLE IF NOT EXISTS students (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	age INT
);

CREATE TABLE IF NOT EXISTS courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	price DOUBLE
);
# 插入数据 
INSERT INTO `students` (name, age) VALUES('why', 18);
INSERT INTO `students` (name, age) VALUES('tom', 22);
INSERT INTO `students` (name, age) VALUES('lilei', 25);
INSERT INTO `students` (name, age) VALUES('lucy', 16);
INSERT INTO `students` (name, age) VALUES('lily', 20);

INSERT INTO `courses` (name, price) VALUES ('英语', 100);
INSERT INTO `courses` (name, price) VALUES ('语文', 666);
INSERT INTO `courses` (name, price) VALUES ('数学', 888);
INSERT INTO `courses` (name, price) VALUES ('历史', 80);
INSERT INTO `courses` (name, price) VALUES ('物理', 888);
INSERT INTO `courses` (name, price) VALUES ('地理', 333);

# 2.建立关系表 
CREATE TABLE IF NOT EXISTS students_select_courses (
	id INT PRIMARY KEY AUTO_INCREMENT,
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY(student_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY(course_id) REFERENCES courses(id) ON UPDATE CASCADE
);

# 3.学生选课 
# why选择了英文、数学、历史
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 1);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 3);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (1, 4);


INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 2);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (3, 4);


INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 2);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 3);
INSERT INTO `students_select_courses` (student_id, course_id) VALUES (5, 4);

# 4.查询的需求 
# 4.1.查询所有选择课程的学生 选择了哪些课 
# 使用内连接 
# 这里会多出student_id course_id等不需要的数据 
-- SELECT * FROM students stu 
-- JOIN students_select_courses ssc ON stu.id = ssc.student_id 
-- JOIN courses cs ON cs.id = ssc.course_id; 

SELECT stu.id stuId, stu.name stuName, stu.age stuAge,cs.id csId,cs.name csName, cs.price csPrice
FROM students stu 
JOIN students_select_courses ssc ON stu.id = ssc.student_id 
JOIN courses cs ON cs.id = ssc.course_id; 

# 4.2.查询所有学生的选课情况  左连接 
SELECT stu.id stuId, stu.name stuName, stu.age stuAge,cs.id csId,cs.name csName, cs.price csPrice
FROM students stu 
LEFT JOIN students_select_courses ssc ON stu.id = ssc.student_id
LEFT JOIN courses cs ON cs.id = ssc.course_id;

# 4.3.那些学生没有选课  
SELECT stu.id stuId, stu.name stuName, stu.age stuAge,cs.id csId,cs.name csName, cs.price csPrice
FROM students stu 
LEFT JOIN students_select_courses ssc ON ssc.student_id = stu.id 
LEFT JOIN courses cs ON ssc.course_id = cs.id
WHERE cs.id IS NULL;

# 4.4.查询哪些课程是没有被选择的 右连接 
SELECT stu.id stuId, stu.name stuName, stu.age stuAge,cs.id csId,cs.name csName, cs.price csPrice
FROM students stu 
RIGHT JOIN students_select_courses ssc ON ssc.student_id = stu.id 
RIGHT JOIN courses cs ON ssc.course_id = cs.id 
WHERE stu.id IS NULL;

# 4.5.某一个学生选了哪些课程 why 
# > 先查询出所有学生的选课数据 
# > 再根据学生的id筛选出对应的数据 
SELECT stu.id stuId, stu.name stuName, stu.age stuAge,cs.id csId,cs.name csName, cs.price csPrice
FROM students stu 
LEFT JOIN students_select_courses ssc ON ssc.student_id = stu.id
LEFT JOIN courses cs ON ssc.course_id = cs.id 
WHERE stu.id = 2;






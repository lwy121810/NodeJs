# 将联合查询到的数据转成对象 （一对多使用的比较多）
SELECT 
	products.id id, products.title title, products.price price,
	JSON_OBJECT('id', brand.id, 'name', brand.`name`, 'website', brand.website) brand 
FROM products 
LEFT JOIN brand ON products.brand_id = brand.id;

# 将查询到的多条数据 组成对象 并放到数组中(多对多用的比较多)
SELECT 
	stu.id id, stu.name name,stu.age age,
	JSON_ARRAYAGG(JSON_OBJECT('id',cs.id, 'name',cs.`name`, 'price',cs.price)) 
FROM students stu 
JOIN students_select_courses ssc ON stu.id = ssc.student_id
JOIN courses cs ON cs.id = ssc.course_id
GROUP BY stu.id;
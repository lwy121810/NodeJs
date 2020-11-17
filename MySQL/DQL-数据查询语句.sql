CREATE TABLE IF NOT EXISTS `products` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	brand VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);


# 1.基本查询 
# 查询表中所有字段和所有数据 
SELECT * FROM products;
# 查询指定的字段 
SELECT title, price FROM products;
# 对字段结果起别名 
SELECT title AS phoneName, price AS currentPrice FROM products;

# 2.WHERE查询 
# WHERE后面是查询条件 
SELECT * FROM products WHERE price = 1000;
SELECT title, price FROM products WHERE price > 1000;
# 下面两种写法是一样的 都是不等于 
SELECT * FROM products WHERE price != 1000;
SELECT * FROM products WHERE price <> 1000;

# 2.2 逻辑运算符 
# 案例一：价格1000到2000的手机 
SELECT * FROM products WHERE price > 1000 AND price < 2000;
SELECT * FROM products WHERE price > 1000 && price < 2000;
# BETWEEN AND包含等于的情况 
SELECT * FROM products WHERE price BETWEEN 1000 AND 2000;

# 逻辑或 
SELECT * FROM products WHERE price > 5000 || brand = '华为';

# 查询一个值是否为NULL 
-- UPDATE products SET url = NULL WHERE id >= 85 AND id <= 90;
# 查询url为NULL的数据 
SELECT * FROM products WHERE url IS NULL;
# 查询url不为NULL的数据 
SELECT * FROM products WHERE url IS NOT NULL;

# 2.3.模糊查询 
# 查询 title中有M的数据 
SELECT * FROM products WHERE title LIKE '%M%';
# 查询title中第二个字母是P的数据 
SELECT * FROM products WHERE title LIKE '_P%';

# 2.4 IN ：取多个值中的一个即可 
SELECT * FROM products WHERE brand = '华为' || brand = '小米' || brand = '苹果';
# 这句跟上面的作用相同 
SELECT * FROM products WHERE brand IN ('华为','小米','苹果');

# 查询结果的排序 
# ASC: 升序 DESC：降序 
# 查询的结果根据价格的升序排序 
SELECT * FROM products WHERE brand IN ('华为','小米','苹果') ORDER BY price ASC;
# 查询的结果以价格的升序排序 价格相同时以score的降序排序 
SELECT * FROM products WHERE brand IN ('华为','小米','苹果') ORDER BY price ASC, score DESC;

# 分页查询 
SELECT * FROM products LIMIT 20 OFFSET 0;
SELECT * FROM products LIMIT 0,20;
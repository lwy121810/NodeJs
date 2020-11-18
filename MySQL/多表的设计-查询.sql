# 1. 笛卡尔乘积的数据 
SELECT * FROM products, brand;
# 进行筛选 
SELECT * FROM products, brand WHERE products.brand_id = brand.id;

# 2.左连接 以左表数据为主 
# 是LEFT [OUTER] JOIN，但是OUTER可以省略的
# ON：说明是以什么条件进行连接的 
# 查询出以products 表为主的 products.brand_id = brand.id的数据 因为brand_id 是以brand表的id设置的 所以是找出手机对应的品牌信息 
# 手机没有品牌信息的 品牌信息会显示NULL 
# 2.1. 查询所有的手机（包括没有品牌信息的）以及对应的品牌null 
SELECT * FROM products  LEFT JOIN brand ON products.brand_id = brand.id; // 查询出108条 
# 在products表中查询 brand.id为NULL的数据 
# 2.2. 查询没有对应品牌信息的手机 
SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL;

# 3.右连接 
# 3.1. 查询所有的品牌（即使没有对应的手机数据，品牌也显示）以及对应的手机数据 
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id;
# 3.2. 查询所有没有对应手机信息的品牌数据 
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE products.brand_id IS NULL;

# 4.内连接 :内连接是表示左边的表和右边的表都有对应的数据关联
# 内连接的写法:INNER JOIN, CROSS JOIN或者 JOIN都可以;
SELECT * FROM products JOIN brand ON products.brand_id = brand.id;

# 5.全连接 
# mysql是不支持全连接的 报语法错误
-- SELECT * FROM products FULL JOIN brand ON products.brand_id = brand.id;
# 我们可以把左连接的结果和右连接额的结果进行联合(`UNION`),联合会去除重复的数据。
(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id)
UNION
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id);
 

(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL)
UNION
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE products.brand_id IS NULL);


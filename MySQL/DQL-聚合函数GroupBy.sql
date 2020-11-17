# 1.聚合函数的使用 
# 1.1 求所有手机价格的总和 
SELECT SUM(price) FROM products;
## 设置名称 
SELECT SUM(price) AS totalPrice FROM products;
## AS可以省略 
SELECT SUM(price) totalPrice FROM products;
# 查询某个指定品牌的手机价格总和 
SELECT SUM(price) FROM products WHERE brand = '华为';
# 查询某个品牌下的平均价格 
SELECT AVG(price) FROM products WHERE brand = '华为';
# 所有手机中的最大价格 
SELECT MAX(price) FROM products;
# 所有手机价格中的最小值 
SELECT MIN(price) FROM products;

# 某个品牌手机的个数 
SELECT COUNT(*) FROM products WHERE brand = '苹果';
# url的个数 
SELECT COUNT(url) FROM products WHERE brand = '苹果';

SELECT COUNT(price) FROM products;
# 查询数据表中有多少个价格 （重复的价格会去除）
SELECT COUNT(DISTINCT price) FROM products;


# 2. GROUP BY
# 按照品牌来分组计算对应的平均价格 数量 平均评分
# 不会显示对应的品牌名称 
SELECT AVG(price), COUNT(*), AVG(score) FROM products GROUP BY brand;
# 会显示品牌名 
# 需要注意的是，因为是根据brand进行分组(GROUP BY)的，所以SELECT后面跟着的是brand，
# 而不能是title等其他的字段。当然brand和AVG(price)等的顺序可以自由调节
SELECT brand, AVG(price), COUNT(*), AVG(score) FROM products GROUP BY brand;

# 3. HAVING的使用 
# HAVING是对分组之后的数据进行筛选 不能使用WHERE（MySQL不支持这样的语法）
# 3.1 按照品牌来分组计算对应的平均价格 数量 平均评分之后 筛选出其中平均价格大于2000的数据 
# 可能会在结果后面跟上WHERE筛选条件 这样是语法错误的 
# SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM products GROUP BY brand WHERE avgPrice > 2000;
# 应该是 
SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM products GROUP BY brand HAVING avgPrice > 2000;

SELECT brand, AVG(price) avgPrice, COUNT(*), AVG(score) FROM products

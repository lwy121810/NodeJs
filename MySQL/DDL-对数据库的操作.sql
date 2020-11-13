# 查看所有的数据库
SHOW DATABASES;

# 查看正在使用的数据库
-- SELECT DATABASE();

# 创建新的数据库 这里如果已经有该数据库 会报错 在程序中运行的话就会抛出异常 
-- CREATE DATABASE bili;
# 如果不存在该数据库就创建 
-- CREATE DATABASE IF NOT EXISTS bili;
-- 
-- CREATE DATABASE IF NOT EXISTS huya DEFAULT CHARACTER SET utf8mb4
-- 				COLLATE utf8mb4_0900_ai_ci;
-- 
-- # 删除数据库 
-- DROP DATABASE IF EXISTS huya;

# 修改数据库的编码 
ALTER DATABASE bili CHARACTER SET = utf8 
				COLLATE = utf8_unicode_ci;
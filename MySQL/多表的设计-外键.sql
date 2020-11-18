CREATE TABLE IF NOT EXISTS brand (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO brand (name, website, phoneRank) VALUES ('华为','www.huawei.com',2);
INSERT INTO brand (name, website, phoneRank) VALUES ('苹果','www.apple.com',3);
INSERT INTO brand (name, website, phoneRank) VALUES ('小米','www.xiaomi.com',5);
INSERT INTO brand (name, website, phoneRank) VALUES ('OPPO','www.oppo.com',10);

INSERT INTO brand (name, website, phoneRank) VALUES ('京东','www.jd.com',8);
INSERT INTO brand (name, website, phoneRank) VALUES ('谷歌','www.goole.com',9);


# 外键
# 给brand_id设置引用brand中的id的外键约束
# 添加字段 
ALTER TABLE products ADD brand_id INT;
# 将brand_id设置为外键 
# 将products表中的brand_id字段添加为外键 该外键引用自brand表中的id字段 
ALTER TABLE products ADD FOREIGN KEY(brand_id) REFERENCES brand(id);

# 设置brand_id的值 
UPDATE `products` SET `brand_id` = 1 WHERE `brand` = '华为';
UPDATE `products` SET `brand_id` = 2 WHERE `brand` = '苹果';
UPDATE `products` SET `brand_id` = 3 WHERE `brand` = '小米';
UPDATE `products` SET `brand_id` = 4 WHERE `brand` = 'oppo';

# 此时修改brand_id会报错 因为10000不在brand表的id范围内 
# UPDATE products SET brand_id = 10000 WHERE brand = '华为';

# 此时修改brand表中的id字段的值也是报错：因为被其他表引用为外键了
UPDATE `brand` SET `id` = 100 WHERE `id` = 1;

# 修改外键更改时的ACTION步骤大致分为三步 
# 1. 查看表结构 获取外键名 
SHOW CREATE TABLE products;
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--  `products_ibfk_1`就是外键名
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


# 2，删除之前的外键 
ALTER TABLE products DROP FOREIGN KEY products_ibfk_1;

# 3. 添加新的外键 并设置新的action 
ALTER TABLE products ADD FOREIGN KEY(brand_id) 
										 REFERENCES brand(id) 
										 ON UPDATE CASCADE
										 ON DELETE RESTRICT;

# 此时就可以更新外键的值了 



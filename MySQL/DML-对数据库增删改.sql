# DML 

# 插入数据 
INSERT INTO user VALUES (110,'lwy','15665431234','2020-11-11','2020-12-12');
INSERT INTO user (name,telPhone,createTime,updateTime) 
						VALUES ('zhangsan','020-123456','2020-11-12','2020-12-13');
						
INSERT INTO user (name, telPhone) 
						VALUES ('lisi','030-213456');
						
						
# 需求：createTime和updateTime可以自动设置值 
# createTime 默认为创建时的时间 
ALTER TABLE user MODIFY createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
# updateTime 默认为创建时间 在修改时自动设置修改时间 
ALTER TABLE user MODIFY updateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
INSERT INTO user (name, telPhone) 
						VALUES ('lris','050-213456');
						
# 删除数据 
# 删除表中所有的数据 
DELETE FROM user;
DELETE FROM user WHERE id = 110;

# 更新数据 
# 更新所有的数据 
UPDATE user SET name = '李四', telPhone = '012-12345600';
# 更新符合条件的数据 
UPDATE user SET name = '李四', telPhone = '012-12345600' WHERE id = 111;

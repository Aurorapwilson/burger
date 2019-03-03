-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- 

CREATE TABLE `t_burger` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) 



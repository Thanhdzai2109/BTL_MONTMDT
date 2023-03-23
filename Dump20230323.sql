-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` bigint NOT NULL AUTO_INCREMENT,
  `customer_address` varchar(255) DEFAULT NULL,
  `address_type` varchar(255) DEFAULT NULL,
  `customer_city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `customer_landmark` varchar(255) DEFAULT NULL,
  `customer_locality` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `customer_pincode` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK6i66ijb8twgcqtetl8eeeed6v` (`user_id`),
  CONSTRAINT `FK6i66ijb8twgcqtetl8eeeed6v` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'haNoi','home',NULL,NULL,'test','123','thanh','9629834692','123',NULL,2),(2,'123','home','123',NULL,'123','123','thanh','9629834692','123',NULL,4),(3,NULL,'home',NULL,NULL,NULL,NULL,'Thanh','9835984353',NULL,NULL,5);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookinfo`
--

DROP TABLE IF EXISTS `bookinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookinfo` (
  `book_id` bigint NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) DEFAULT NULL,
  `book_details` text,
  `book_name` varchar(255) DEFAULT NULL,
  `created_date_and_time` datetime(6) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `no_of_books` bigint DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `updated_date_and_time` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookinfo`
--

LOCK TABLES `bookinfo` WRITE;
/*!40000 ALTER TABLE `bookinfo` DISABLE KEYS */;
INSERT INTO `bookinfo` VALUES (1,'Richard','In the midst of the hustle and bustle of life, we are dragged into the vortex of anxiety and fatigue, gradually we close ourselves to all relationships, less and less familiar relationships. , and one thing that is easy to encounter is that it is easy to get angry, we begin to be angry with this very life, with ourselves.  The book \"Rich from the inside\" by author Kim Dung is a book that heals the hearts that are dominated by this rushing reality.  The book is an inner discovery in the middle of life with too many influences, the inner thoughts are lost, helping us to return to ourselves, balance our thoughts, learn to give, be more tolerant, find with others. peace of mind, love yourself, love people, love everything, use your heart to feel, to love, use your beautiful inner self to feel things, you will see how beautiful the world is.','Test','2023-03-14 15:28:43.281525','Screenshot 2023-03-14 222529.png',0,10000,'approved',NULL,1),(2,'Richard ','A thrillingly told queer space opera about the wreckage of war, the family you find, and who you must become when every choice is stripped from you, Some Desperate Glory is Astounding Award Winner Emily Tesh’s highly anticipated debut novel.  \"Masterful, audacious storytelling. Relentless, unsentimental, a completely wild ride.\"—Tamsyn Muir  \"Deserves a space on shelves alongside Ursula K. Le Guin and Octavia Butler.\"—Publishers Weekly (starred review)','Ghost','2023-03-14 16:32:38.256145','watty.jpg',4,1000,'approved',NULL,3),(3,'Billy','Các kiểu kiến trúc trên thế giới sẽ cho bạn đọc một bức tranh toàn cảnh về các công trình kiến trúc mà loài người đã tạo dựng nên theo trình tự lịch sử từ thời Trung cổ, phục hưng Châu Âu, thời đại công nghiệp và cho đến hiện đại ngày nay.','The golder','2023-03-15 08:13:20.687434','elon usk.jpg',7,100,'approved',NULL,3),(4,'An tonny','Là một trong những cuốn sách hay nhất','The beautyfull','2023-03-15 09:00:03.256665','abdul-kalam.jpg',12,100,'approved',NULL,3);
/*!40000 ALTER TABLE `bookinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `cart_id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FKka3t831w0aw2vrwgsbhcn5y4m` (`user_id`),
  CONSTRAINT `FKka3t831w0aw2vrwgsbhcn5y4m` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (1,'2023-03-14 16:25:19.727282',2),(2,'2023-03-14 16:35:35.016257',2),(3,'2023-03-14 16:35:37.234681',2),(4,'2023-03-15 08:51:55.288486',2),(5,'2023-03-15 09:00:50.766219',2),(6,'2023-03-15 09:22:09.718945',2),(7,'2023-03-15 09:54:31.793582',2),(8,'2023-03-15 09:55:42.985906',4),(9,'2023-03-15 10:02:08.618440',4),(10,'2023-03-15 10:09:41.744454',4),(11,'2023-03-15 10:14:37.158441',4),(12,'2023-03-15 10:18:12.739420',4),(13,'2023-03-15 10:18:58.114473',4),(14,'2023-03-15 10:26:49.404015',4),(15,'2023-03-15 10:35:00.146353',2),(16,'2023-03-15 10:50:53.280793',2),(17,'2023-03-15 10:57:41.800599',2),(18,'2023-03-15 11:07:16.521340',4),(19,'2023-03-15 11:16:41.599266',4),(20,'2023-03-15 11:17:26.546196',4),(21,'2023-03-15 14:32:32.035416',5),(22,'2023-03-18 08:25:04.695833',5),(23,'2023-03-18 08:39:30.355061',4),(24,'2023-03-22 05:47:21.677990',5);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item_books_list`
--

DROP TABLE IF EXISTS `cart_item_books_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item_books_list` (
  `cart_item_cart_id` bigint NOT NULL,
  `books_list_book_id` bigint NOT NULL,
  KEY `FK7bi3t7kj1min41g8rmnxu8psq` (`books_list_book_id`),
  KEY `FKqetkglw5vblc3h3oy4589ktt8` (`cart_item_cart_id`),
  CONSTRAINT `FK7bi3t7kj1min41g8rmnxu8psq` FOREIGN KEY (`books_list_book_id`) REFERENCES `bookinfo` (`book_id`),
  CONSTRAINT `FKqetkglw5vblc3h3oy4589ktt8` FOREIGN KEY (`cart_item_cart_id`) REFERENCES `cart_item` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item_books_list`
--

LOCK TABLES `cart_item_books_list` WRITE;
/*!40000 ALTER TABLE `cart_item_books_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item_books_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (6);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `order_id` bigint NOT NULL,
  `address_id` bigint DEFAULT NULL,
  `order_placed_time` datetime(6) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FKk2w14ysy80rutm079xu6d4ygm` (`user_id`),
  CONSTRAINT `FKk2w14ysy80rutm079xu6d4ygm` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (47571,2,'2023-03-15 09:55:52.301276','delivered',1000,4),(95931,1,'2023-03-14 16:36:36.267771','delivered',1000,2),(106300,2,'2023-03-15 11:16:47.027936','in shipment',100,4),(258111,1,'2023-03-14 16:36:23.138231','delivered',10000,2),(318770,2,'2023-03-15 11:07:22.484867','in progress',100,4),(368941,2,'2023-03-15 10:02:22.736421','pending',1000,4),(414208,1,'2023-03-15 09:54:45.245096','in progress',1000,2),(531243,1,'2023-03-15 10:54:09.278475','pending',100,2),(577804,2,'2023-03-15 10:14:59.637089','pending',100,4),(588945,1,'2023-03-15 09:01:05.479049','delivered',1000,2),(624635,1,'2023-03-15 10:35:06.712859','pending',100,2),(666008,1,'2023-03-15 11:10:34.954424','pending',100,2),(743103,1,'2023-03-14 16:35:59.003682','delivered',10000,2),(796624,2,'2023-03-18 08:39:35.509950','pending',1000,4),(835062,1,'2023-03-15 09:22:22.038228','pending',100,2),(836361,1,'2023-03-15 08:52:12.932328','delivered',1000,2),(886438,3,'2023-03-18 08:35:28.212891','pending',1000,5),(916367,2,'2023-03-15 10:09:46.313220','in progress',100,4),(961733,2,'2023-03-15 11:17:31.785184','pending',100,4),(982901,2,'2023-03-15 10:19:03.205202','pending',100,4),(992092,2,'2023-03-15 10:27:01.962546','pending',100,4),(997260,2,'2023-03-15 10:18:19.881136','pending',100,4);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details_books_list`
--

DROP TABLE IF EXISTS `order_details_books_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details_books_list` (
  `order_order_id` bigint NOT NULL,
  `books_list_book_id` bigint NOT NULL,
  KEY `FK54ephs8yju0o6fdalgjs4vvla` (`books_list_book_id`),
  KEY `FK5whx6lyvhe1jdkhfy86mvwcxg` (`order_order_id`),
  CONSTRAINT `FK54ephs8yju0o6fdalgjs4vvla` FOREIGN KEY (`books_list_book_id`) REFERENCES `bookinfo` (`book_id`),
  CONSTRAINT `FK5whx6lyvhe1jdkhfy86mvwcxg` FOREIGN KEY (`order_order_id`) REFERENCES `order_details` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details_books_list`
--

LOCK TABLES `order_details_books_list` WRITE;
/*!40000 ALTER TABLE `order_details_books_list` DISABLE KEYS */;
INSERT INTO `order_details_books_list` VALUES (743103,1),(743103,1),(258111,1),(95931,2),(836361,2),(588945,2),(835062,4),(414208,2),(47571,2),(368941,2),(916367,4),(577804,3),(997260,4),(982901,4),(992092,4),(624635,4),(531243,3),(318770,3),(666008,4),(106300,4),(961733,3),(886438,2),(796624,2);
/*!40000 ALTER TABLE `order_details_books_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantity`
--

DROP TABLE IF EXISTS `quantity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quantity` (
  `quantity_id` bigint NOT NULL AUTO_INCREMENT,
  `quantity_of_book` bigint DEFAULT NULL,
  `totalprice` double DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `cart_id` bigint DEFAULT NULL,
  PRIMARY KEY (`quantity_id`),
  KEY `FKd0j1wh9b30lfbvtg6gasr7x37` (`order_id`),
  KEY `FKsm7ipuxm7p41lm1fr9dkkg0j1` (`cart_id`),
  CONSTRAINT `FKd0j1wh9b30lfbvtg6gasr7x37` FOREIGN KEY (`order_id`) REFERENCES `order_details` (`order_id`),
  CONSTRAINT `FKsm7ipuxm7p41lm1fr9dkkg0j1` FOREIGN KEY (`cart_id`) REFERENCES `cart_item` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantity`
--

LOCK TABLES `quantity` WRITE;
/*!40000 ALTER TABLE `quantity` DISABLE KEYS */;
INSERT INTO `quantity` VALUES (1,2,20000,743103,NULL),(2,1,1000,95931,NULL),(3,1,10000,258111,NULL),(4,1,1000,836361,NULL),(5,1,1000,588945,NULL),(6,1,100,835062,NULL),(7,1,1000,414208,NULL),(8,1,1000,47571,NULL),(9,1,1000,368941,NULL),(10,1,100,916367,NULL),(11,1,100,577804,NULL),(12,1,100,997260,NULL),(13,1,100,982901,NULL),(14,1,100,992092,NULL),(15,1,100,624635,NULL),(16,1,100,531243,NULL),(17,1,100,666008,NULL),(18,1,100,318770,NULL),(19,1,100,106300,NULL),(20,1,100,961733,NULL),(21,1,1000,NULL,NULL),(22,1,1000,886438,NULL),(23,1,1000,796624,NULL),(24,1,1000,NULL,NULL);
/*!40000 ALTER TABLE `quantity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_and_rating`
--

DROP TABLE IF EXISTS `review_and_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_and_rating` (
  `rating_review_id` bigint NOT NULL AUTO_INCREMENT,
  `book_id` bigint NOT NULL,
  `rating` int NOT NULL,
  `review` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rating_review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_and_rating`
--

LOCK TABLES `review_and_rating` WRITE;
/*!40000 ALTER TABLE `review_and_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `review_and_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_verified` bit(1) NOT NULL,
  `mobile_number` bigint DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `active` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2023-03-14 15:18:53.869118','test@gmail.com',_binary '\0',9629834692,'Thanh','$2a$10$27oaaXZoz2q0o3ayM8mK4eddQt3olwLGpu1bpgZ67zjP327rirZ0e','admin',1),(2,'2023-03-14 16:24:54.848281','thanhdzai219@gmail.com',_binary '\0',9629834692,'thanh','$2a$10$cItkH5EiN8czVBFoqLDtQuSCeEInSRwM9IrMfjtEMD6JPUC2YC.jW','user',1),(3,'2023-03-14 16:29:02.009494','Seller@gmail.com',_binary '\0',9868761234,'Seller','$2a$10$3KFUAWe3kNuhKXqDjKz5PebbvkQ.RS5rA98tuuO9Z6mqwFuO8FlcO','seller',1),(4,'2023-03-15 09:14:54.839995','thanhnt21092001@gmail.com',_binary '\0',9629834692,'thanh','$2a$10$E2TmkZ44SlLlLBEt8EixReyCEL7ElA9G3UYgX.YoCNx8kOk3ndEl2','user',1),(5,'2023-03-15 10:36:47.731210','thanhdzai2109@gmail.com',_binary '\0',9835984353,'Thanh','$2a$10$Bj8kqtU/eVurOo0oN0GzcuMHil/luuX90K.FQVAVgUpiQYDGpMe/i','user',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishbook`
--

DROP TABLE IF EXISTS `wishbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishbook` (
  `wishlist_id` bigint NOT NULL AUTO_INCREMENT,
  `wishlist_time` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `FK4b2tdcxbqbomphyck9cmmr8t3` (`user_id`),
  CONSTRAINT `FK4b2tdcxbqbomphyck9cmmr8t3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishbook`
--

LOCK TABLES `wishbook` WRITE;
/*!40000 ALTER TABLE `wishbook` DISABLE KEYS */;
INSERT INTO `wishbook` VALUES (1,'2023-03-15 08:07:33.065588',2),(2,'2023-03-15 08:51:45.641590',2),(3,'2023-03-15 08:51:49.231947',2),(4,'2023-03-15 14:13:12.281921',5),(5,'2023-03-15 14:13:18.405031',5),(6,'2023-03-16 04:32:54.347865',5),(7,'2023-03-16 04:33:26.011917',5),(8,'2023-03-16 04:33:44.788108',5),(9,'2023-03-17 03:49:57.039645',5),(10,'2023-03-22 04:57:21.409072',5);
/*!40000 ALTER TABLE `wishbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishbook_books_list`
--

DROP TABLE IF EXISTS `wishbook_books_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishbook_books_list` (
  `wishlist_book_wishlist_id` bigint NOT NULL,
  `books_list_book_id` bigint NOT NULL,
  KEY `FKlarx8yot1n0yntt61cj2obvyj` (`books_list_book_id`),
  KEY `FK1lselvgppji60otr0cydlmxk8` (`wishlist_book_wishlist_id`),
  CONSTRAINT `FK1lselvgppji60otr0cydlmxk8` FOREIGN KEY (`wishlist_book_wishlist_id`) REFERENCES `wishbook` (`wishlist_id`),
  CONSTRAINT `FKlarx8yot1n0yntt61cj2obvyj` FOREIGN KEY (`books_list_book_id`) REFERENCES `bookinfo` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishbook_books_list`
--

LOCK TABLES `wishbook_books_list` WRITE;
/*!40000 ALTER TABLE `wishbook_books_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishbook_books_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-23 18:52:55

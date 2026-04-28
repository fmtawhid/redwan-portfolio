-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 07, 2025 at 11:20 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jolshiri_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('jolshiri_cache_spatie.permission.cache', 'a:3:{s:5:\"alias\";a:4:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:51:{i:0;a:3:{s:1:\"a\";i:1;s:1:\"b\";s:10:\"users.view\";s:1:\"c\";s:3:\"web\";}i:1;a:3:{s:1:\"a\";i:2;s:1:\"b\";s:12:\"users.create\";s:1:\"c\";s:3:\"web\";}i:2;a:3:{s:1:\"a\";i:3;s:1:\"b\";s:10:\"users.edit\";s:1:\"c\";s:3:\"web\";}i:3;a:3:{s:1:\"a\";i:4;s:1:\"b\";s:12:\"users.delete\";s:1:\"c\";s:3:\"web\";}i:4;a:4:{s:1:\"a\";i:5;s:1:\"b\";s:10:\"roles.view\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:5;}}i:5;a:3:{s:1:\"a\";i:6;s:1:\"b\";s:12:\"roles.create\";s:1:\"c\";s:3:\"web\";}i:6;a:3:{s:1:\"a\";i:7;s:1:\"b\";s:10:\"roles.edit\";s:1:\"c\";s:3:\"web\";}i:7;a:3:{s:1:\"a\";i:8;s:1:\"b\";s:12:\"roles.delete\";s:1:\"c\";s:3:\"web\";}i:8;a:3:{s:1:\"a\";i:9;s:1:\"b\";s:16:\"permissions.view\";s:1:\"c\";s:3:\"web\";}i:9;a:3:{s:1:\"a\";i:10;s:1:\"b\";s:18:\"permissions.assign\";s:1:\"c\";s:3:\"web\";}i:10;a:3:{s:1:\"a\";i:11;s:1:\"b\";s:10:\"plots.view\";s:1:\"c\";s:3:\"web\";}i:11;a:3:{s:1:\"a\";i:15;s:1:\"b\";s:9:\"post.view\";s:1:\"c\";s:3:\"web\";}i:12;a:3:{s:1:\"a\";i:16;s:1:\"b\";s:11:\"post.create\";s:1:\"c\";s:3:\"web\";}i:13;a:3:{s:1:\"a\";i:17;s:1:\"b\";s:11:\"post.update\";s:1:\"c\";s:3:\"web\";}i:14;a:3:{s:1:\"a\";i:18;s:1:\"b\";s:11:\"post.delete\";s:1:\"c\";s:3:\"web\";}i:15;a:3:{s:1:\"a\";i:19;s:1:\"b\";s:10:\"order.view\";s:1:\"c\";s:3:\"web\";}i:16;a:3:{s:1:\"a\";i:20;s:1:\"b\";s:12:\"order.create\";s:1:\"c\";s:3:\"web\";}i:17;a:3:{s:1:\"a\";i:21;s:1:\"b\";s:12:\"order.update\";s:1:\"c\";s:3:\"web\";}i:18;a:3:{s:1:\"a\";i:22;s:1:\"b\";s:12:\"order.delete\";s:1:\"c\";s:3:\"web\";}i:19;a:3:{s:1:\"a\";i:23;s:1:\"b\";s:12:\"order.export\";s:1:\"c\";s:3:\"web\";}i:20;a:3:{s:1:\"a\";i:24;s:1:\"b\";s:9:\"user.view\";s:1:\"c\";s:3:\"web\";}i:21;a:3:{s:1:\"a\";i:25;s:1:\"b\";s:11:\"user.create\";s:1:\"c\";s:3:\"web\";}i:22;a:3:{s:1:\"a\";i:26;s:1:\"b\";s:11:\"user.update\";s:1:\"c\";s:3:\"web\";}i:23;a:3:{s:1:\"a\";i:27;s:1:\"b\";s:11:\"user.delete\";s:1:\"c\";s:3:\"web\";}i:24;a:3:{s:1:\"a\";i:28;s:1:\"b\";s:16:\"user.impersonate\";s:1:\"c\";s:3:\"web\";}i:25;a:3:{s:1:\"a\";i:29;s:1:\"b\";s:12:\"roles.update\";s:1:\"c\";s:3:\"web\";}i:26;a:3:{s:1:\"a\";i:30;s:1:\"b\";s:17:\"roles.impersonate\";s:1:\"c\";s:3:\"web\";}i:27;a:3:{s:1:\"a\";i:32;s:1:\"b\";s:13:\"mutation.view\";s:1:\"c\";s:3:\"web\";}i:28;a:3:{s:1:\"a\";i:34;s:1:\"b\";s:15:\"mutation.create\";s:1:\"c\";s:3:\"web\";}i:29;a:3:{s:1:\"a\";i:35;s:1:\"b\";s:15:\"mutation.update\";s:1:\"c\";s:3:\"web\";}i:30;a:3:{s:1:\"a\";i:36;s:1:\"b\";s:15:\"mutation.delete\";s:1:\"c\";s:3:\"web\";}i:31;a:3:{s:1:\"a\";i:37;s:1:\"b\";s:15:\"permission.view\";s:1:\"c\";s:3:\"web\";}i:32;a:3:{s:1:\"a\";i:38;s:1:\"b\";s:17:\"permission.create\";s:1:\"c\";s:3:\"web\";}i:33;a:3:{s:1:\"a\";i:39;s:1:\"b\";s:17:\"permission.update\";s:1:\"c\";s:3:\"web\";}i:34;a:3:{s:1:\"a\";i:40;s:1:\"b\";s:17:\"permission.delete\";s:1:\"c\";s:3:\"web\";}i:35;a:3:{s:1:\"a\";i:41;s:1:\"b\";s:14:\"accouting.view\";s:1:\"c\";s:3:\"web\";}i:36;a:3:{s:1:\"a\";i:42;s:1:\"b\";s:16:\"accouting.create\";s:1:\"c\";s:3:\"web\";}i:37;a:3:{s:1:\"a\";i:43;s:1:\"b\";s:16:\"accouting.update\";s:1:\"c\";s:3:\"web\";}i:38;a:3:{s:1:\"a\";i:44;s:1:\"b\";s:16:\"accouting.delete\";s:1:\"c\";s:3:\"web\";}i:39;a:3:{s:1:\"a\";i:45;s:1:\"b\";s:11:\"report.view\";s:1:\"c\";s:3:\"web\";}i:40;a:3:{s:1:\"a\";i:46;s:1:\"b\";s:13:\"report.create\";s:1:\"c\";s:3:\"web\";}i:41;a:3:{s:1:\"a\";i:47;s:1:\"b\";s:13:\"report.update\";s:1:\"c\";s:3:\"web\";}i:42;a:3:{s:1:\"a\";i:48;s:1:\"b\";s:13:\"report.delete\";s:1:\"c\";s:3:\"web\";}i:43;a:3:{s:1:\"a\";i:49;s:1:\"b\";s:12:\"setting.view\";s:1:\"c\";s:3:\"web\";}i:44;a:3:{s:1:\"a\";i:50;s:1:\"b\";s:14:\"setting.create\";s:1:\"c\";s:3:\"web\";}i:45;a:3:{s:1:\"a\";i:51;s:1:\"b\";s:14:\"setting.update\";s:1:\"c\";s:3:\"web\";}i:46;a:3:{s:1:\"a\";i:52;s:1:\"b\";s:14:\"setting.delete\";s:1:\"c\";s:3:\"web\";}i:47;a:3:{s:1:\"a\";i:53;s:1:\"b\";s:13:\"customer.view\";s:1:\"c\";s:3:\"web\";}i:48;a:3:{s:1:\"a\";i:54;s:1:\"b\";s:15:\"customer.create\";s:1:\"c\";s:3:\"web\";}i:49;a:3:{s:1:\"a\";i:55;s:1:\"b\";s:15:\"customer.update\";s:1:\"c\";s:3:\"web\";}i:50;a:3:{s:1:\"a\";i:56;s:1:\"b\";s:15:\"customer.delete\";s:1:\"c\";s:3:\"web\";}}s:5:\"roles\";a:1:{i:0;a:3:{s:1:\"a\";i:5;s:1:\"b\";s:9:\"Demo Role\";s:1:\"c\";s:3:\"web\";}}}', 1751973527);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_06_23_063828_create_permission_tables', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(5, 'App\\Models\\User', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'users.view', 'web', '2025-06-23 04:20:06', '2025-06-23 04:20:06'),
(2, 'users.create', 'web', '2025-06-23 04:24:03', '2025-06-23 04:24:03'),
(3, 'users.edit', 'web', '2025-06-23 04:24:14', '2025-06-23 04:24:14'),
(4, 'users.delete', 'web', '2025-06-23 04:24:21', '2025-06-23 04:24:21'),
(5, 'roles.view', 'web', '2025-06-23 04:24:37', '2025-06-23 04:24:37'),
(6, 'roles.create', 'web', '2025-06-23 04:29:55', '2025-06-23 04:29:55'),
(7, 'roles.edit', 'web', '2025-06-23 04:30:16', '2025-06-23 04:30:16'),
(8, 'roles.delete', 'web', '2025-06-23 04:33:34', '2025-06-23 04:33:34'),
(9, 'permissions.view', 'web', '2025-06-23 04:33:57', '2025-06-23 04:33:57'),
(10, 'permissions.assign', 'web', '2025-06-23 04:51:20', '2025-06-23 04:51:20'),
(11, 'plots.view', 'web', '2025-06-23 04:51:36', '2025-06-23 04:51:36'),
(15, 'post.view', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(16, 'post.create', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(17, 'post.update', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(18, 'post.delete', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(19, 'order.view', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(20, 'order.create', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(21, 'order.update', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(22, 'order.delete', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(23, 'order.export', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(24, 'user.view', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(25, 'user.create', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(26, 'user.update', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(27, 'user.delete', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(28, 'user.impersonate', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(29, 'roles.update', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(30, 'roles.impersonate', 'web', '2025-07-03 06:54:11', '2025-07-03 06:54:11'),
(32, 'mutation.view', 'web', '2025-07-03 07:28:36', '2025-07-03 07:28:36'),
(34, 'mutation.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(35, 'mutation.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(36, 'mutation.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(37, 'permission.view', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(38, 'permission.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(39, 'permission.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(40, 'permission.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(41, 'accouting.view', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(42, 'accouting.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(43, 'accouting.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(44, 'accouting.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(45, 'report.view', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(46, 'report.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(47, 'report.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(48, 'report.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(49, 'setting.view', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(50, 'setting.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(51, 'setting.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(52, 'setting.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(53, 'customer.view', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(54, 'customer.create', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(55, 'customer.update', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05'),
(56, 'customer.delete', 'web', '2025-07-07 00:48:05', '2025-07-07 00:48:05');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'web', '2025-06-23 00:57:40', '2025-06-23 00:57:40'),
(2, 'Mutation Team', 'web', '2025-07-03 07:39:11', '2025-07-03 07:39:11'),
(3, 'Accounts Team', 'web', '2025-07-03 07:58:52', '2025-07-03 07:58:52'),
(4, 'New Role', 'web', '2025-07-06 23:34:58', '2025-07-06 23:34:58'),
(5, 'Demo Role', 'web', '2025-07-07 00:49:25', '2025-07-07 00:49:25');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('6oEsLYFzIYb3kOwTk5m1w1IaWAgxh2MmIdBDVoip', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRGswZjBDb2hSeWtVMHVNanVwakJENEV3bmcyRDNTSVZWODh5SndPTiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1751887189);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@example.com', NULL, '$2y$12$NaPxAnKNQE3fskskSYBfDO3GMabCIFLzqThzJ8Uj7wMNM06yD/igu', 'OnjTXMabgYIpAEhKkPpTjocjU7713BJT4myuwiuNinTEil2X1Az9Bjsim3F8', '2025-06-23 00:57:40', '2025-06-23 00:57:40'),
(2, 'John Doe', 'john@example.com', NULL, '$2y$12$DW9DKFl.KIzqdbUARe4dz.SXCRf8Hlr2IpjCR1FbbFPU4z2JayR8i', 'TTa5E9Ef5hdqutST4WoCD85RwTuEdEjEXYeEFVxdYgnXBXzI6AFMGQw5uBVs', '2025-07-07 03:17:59', '2025-07-07 03:17:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

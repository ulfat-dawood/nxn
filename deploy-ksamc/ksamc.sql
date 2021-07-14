-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 06, 2021 at 09:46 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ksamc`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body_text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `timestsamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `body_text`, `image`, `timestsamp`) VALUES
(26, 'معايدة المدير العام التنفيذي منسوبي المدينة الطبية', 'قام المدير العام التنفيذي لـمدينة الملك سلمان بن عبدالعزيز الطبية بالمدينة المنورة بجولة لمعايدة منسوبي المدينة الطبية بمُناسبة حلول عيد الفطر يرافقه عدد من المدراءالتنفيذين كما اطلع على آلية سير العمل بالمدينة الطبية', '06-28-2021_12:09:04-eid-visit.jpeg', '2021-06-28 10:09:04'),
(27, 'حصول ذوي الاحتياجات الخاصة على لقاح كوفيد 19', 'التعاون مع جمعية طيبة للإعاقة الحركية و إدارة الطوارى والكوراث والازمات تم نقل ذوي الاحتياجات الخاصة مرضى الطب المنزلي إلى مركز لقاح كورونا بمدينة الملك سلمان بن عبد العزيز الطبية بالمدينة المنورة للحصول على الجرعة الأولى من لقاح كوفيد 19', '06-28-2021_12:09:40-vaccine.jpeg', '2021-06-28 10:09:40'),
(28, 'معايدة مدير عام صحة المدينة', 'معايدة مدير عام صحة المدينة بالنيابة بمناسبة عيد الفطر المبارك وجرى خلال المعايدة تبادل التهاني والتبريكات وتقديم الهدايا للمرضى و المنومين ومنسوبي مدينة الملك سلمان بن عبدالعزيز الطبية بالمدينة المنورة.', '06-28-2021_12:10:25-health-manager-eid-visit.jpeg', '2021-06-28 10:10:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin_main', '0e84024d4b14c5eea526bcfbfb1ea159'),
(2, 'admin_2', 'd7a82c7b271c17bd808fe59d998dcb05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

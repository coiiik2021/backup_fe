import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';


export default function MaintenancePage() {
    const socialLinks = [
        { name: 'Zalo', icon: '💬', url: 'https://zaloapp.com/qr/p/1qg64agb3q6dw' },
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'Email', icon: '📧', url: 'mailto:info@company.com' }
    ];

    function formatDateTime(date) {
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, '0');
        return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }

    // === ADMIN CẤU HÌNH THỜI GIAN BẢO TRÌ TẠI ĐÂY ===
    const maintenanceStart = new Date(import.meta.env.VITE_MAINTENANCE_START);
    const maintenanceDurationHours = Number(import.meta.env.VITE_MAINTENANCE_DURATION_HOURS); // ví dụ: 2 tiếng// chỉ tạo 1 lần duy nhất
    const maintenanceEnd = new Date(maintenanceStart.getTime() + maintenanceDurationHours * 60 * 60 * 1000);
    // ================================================

    const totalMs = maintenanceEnd - maintenanceStart;
    const durationInSeconds = totalMs / 1000;
    // State để cập nhật tiến độ theo thời gian thực
    const [now, setNow] = useState(Date());
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const total = maintenanceEnd - maintenanceStart;
    const elapsed = Math.max(0, Math.min(now - maintenanceStart, total));
    const percent = total > 0 ? Math.round((elapsed / total) * 100) : 0;
    const percentDisplay = percent > 100 ? 100 : percent < 0 ? 0 : percent;

    // Định dạng thời gian đã trôi qua
    function formatElapsed(ms) {
        if (ms <= 0) return "0 phút";
        const h = Math.floor(ms / (60 * 60 * 1000));
        const m = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
        return `${h > 0 ? h + " giờ " : ""}${m} phút`;
    }


    return (
        <div className="min-h-screen pt-20 pb-2 bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-10 blur-lg"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-16"
                >
                    {/* Animated Logo */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                delay: 0.2,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                            className="relative inline-block"
                        >
                            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="text-4xl sm:text-5xl text-white"
                                >
                                    🔧
                                </motion.span>
                            </div>

                            {/* Floating elements around logo */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    scale: [1, 1.3, 1]
                                }}
                                transition={{
                                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg"
                            />
                            <motion.div
                                animate={{
                                    y: [-10, 10, -10],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full shadow-lg"
                            />
                        </motion.div>
                    </div>

                    {/* Main Heading with Typewriter Effect */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
                            Đang Bảo Trì
                        </span>
                    </motion.h1>

                    {/* Subtitle with stagger animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mb-12"
                    >
                        <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                            Chúng tôi đang nâng cấp hệ thống để mang đến trải nghiệm
                            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> tuyệt vời hơn</span>
                        </p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-lg text-gray-500 mt-4"
                        >
                            Xin lỗi vì sự bất tiện này. Chúng tôi sẽ trở lại sớm nhất có thể! ✨
                        </motion.p>
                    </motion.div>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-md mx-auto">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">
                                Tiến độ bảo trì
                            </h3>
                            <div className="relative">
                                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            width:
                                                now < maintenanceStart
                                                    ? "0%"
                                                    : now > maintenanceEnd
                                                        ? "100%"
                                                        : `${percentDisplay}%`
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "linear"
                                        }}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full relative"
                                    >
                                        {/* Hiệu ứng ánh sáng di chuyển */}
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                                        />
                                    </motion.div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>
                                        {now < maintenanceStart
                                            ? "Chưa bắt đầu"
                                            : now <= maintenanceEnd
                                                ? "Đang xử lý..."
                                                : "Đã hoàn thành"}
                                    </span>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="font-semibold"
                                    >
                                        {percentDisplay}%
                                    </motion.span>
                                </div>
                                {/* <div className="text-xs text-gray-400 mt-2 text-left">
                                    Đã trôi qua: {formatElapsed(elapsed)} / {maintenanceDurationHours} giờ
                                </div> */}
                                <div className="text-xs text-gray-400 mt-1 text-right">
                                    {now < maintenanceEnd
                                        ? `Dự kiến hoàn thành: ${formatDateTime(maintenanceEnd)}`
                                        : `Đã hoàn thành lúc: ${formatDateTime(maintenanceEnd)}`}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="text-center"
                >
                    <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                        Cần hỗ trợ khẩn cấp?
                    </h4>
                    <p className="text-gray-600 mb-8 text-lg">
                        Liên hệ với chúng tôi qua các kênh sau
                    </p>

                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-2xl sm:text-3xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                                onClick={(e) => {
                                    if (social.name === 'Zalo') {
                                        e.preventDefault();
                                        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                                        if (isIOS) {
                                            window.location.href = social.url;
                                        } else {
                                            window.open(social.url, '_blank');
                                        }
                                    }
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {social.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="mt-16 pt-8 border-t border-gray-200"
                >
                    <p className="text-gray-400 text-sm">
                        © 2018 ConKin.vn. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
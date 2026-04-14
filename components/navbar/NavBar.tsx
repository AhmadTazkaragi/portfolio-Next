"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [open, setOpen] = useState(false);

	// Load theme on first render
	useEffect(() => {
		const stored = localStorage.getItem("theme");

		if (stored === "light" || stored === "dark") {
			setTheme(stored);
			document.documentElement.classList.toggle("dark", stored === "dark");
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;

			const initial = prefersDark ? "dark" : "light";
			setTheme(initial);
			document.documentElement.classList.toggle("dark", prefersDark);
		}
	}, []);

	// Apply theme change
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	const underline = {
		hidden: { width: 0 },
		show: { width: "100%" },
	};

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-100/90 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

				{/* Logo */}
				<Link
					href="/"
					className="font-bold text-lg tracking-tight text-gray-900 dark:text-white"
				>
					Ahmad
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6 items-center">
					{links.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className="relative text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
						>
							{l.label}

							<motion.span
								className="absolute left-0 -bottom-1 h-[2px] bg-blue-500"
								initial="hidden"
								whileHover="show"
								variants={underline}
								transition={{ duration: 0.25 }}
							/>
						</Link>
					))}

					{/* Theme toggle (desktop icon) */}
					<button
						onClick={toggleTheme}
						className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition text-xl"
					>
						{theme === "dark" ? "🌙" : "☀️"}
					</button>
				</div>

				{/* Mobile buttons */}
				<div className="md:hidden flex items-center gap-2">
					{/* Theme icon */}
					<button
						onClick={toggleTheme}
						className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-xl"
					>
						{theme === "dark" ? "🌙" : "☀️"}
					</button>

					{/* Burger menu */}
					<button
						className="p-2 text-2xl text-gray-800 dark:text-white"
						onClick={() => setOpen(!open)}
					>
						☰
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
					>
						<div className="flex flex-col gap-4 pt-4">
							{links.map((l) => (
								<Link
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className="text-gray-700 dark:text-gray-200 hover:pl-2 transition-all"
								>
									{l.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
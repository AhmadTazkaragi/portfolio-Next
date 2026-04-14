"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		alert("Message sent successfully 🚀");
		setForm({ name: "", email: "", message: "" });
	};

	return (
		<section className="min-h-screen pt-1 px-6 bg-background text-foreground flex items-center justify-center pb-7">

			<div className="max-w-3xl w-full">

				{/* TITLE */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-4xl md:text-5xl font-bold text-center"
				>
					Get In Touch
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-center text-muted-foreground mt-3"
				>
					Let’s build something amazing together 🚀
				</motion.p>

				{/* FORM */}
				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mt-10 space-y-4 bg-muted/30 p-6 rounded-xl border border-border"
				>

					<input
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="w-full p-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					<input
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="w-full p-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					<textarea
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Your Message"
						rows={5}
						className="w-full p-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>

					<button
						type="submit"
						className="w-full py-3 rounded-md bg-foreground text-background font-semibold hover:opacity-80 transition"
					>
						Send Message 🚀
					</button>

				</motion.form>

				{/* SOCIALS */}
				<div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground">

					<a href="https://github.com/AhmadTazkaragi" target="_blank">
						GitHub
					</a>

					<a href="https://www.linkedin.com/in/ahmad-tazkaragi-4948aa377/" target="_blank">
						LinkedIn
					</a>

					<a href="https://mail.google.com/mail/u/0/?to=tazkrhgeahmadamen@gmail.com&fs=1&tf=cm">
						Email
					</a>

				</div>

			</div>

		</section>
	);
}
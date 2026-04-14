"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
	const [selected, setSelected] = useState<any>(null);

	return (
		<section className="min-h-screen pt-16 px-6 bg-background text-foreground pb-20">

			<div className="max-w-6xl mx-auto">

				{/* TITLE */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-4xl font-bold mb-10"
				>
					My Projects
				</motion.h1>

				{/* GRID */}
				<div className="grid md:grid-cols-2 gap-6">

					{projects.map((p, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.03 }}
							transition={{ duration: 0.3 }}
							className="border border-border rounded-xl overflow-hidden bg-background cursor-pointer"
						>

							{/* IMAGE (FIXED - NO CROPPING) */}
							<div className="h-48 w-full flex items-center justify-center bg-muted">
								<img
									src={p.image}
									alt={p.title}
									className="max-h-full max-w-full object-contain"
								/>
							</div>

							{/* CONTENT */}
							<div className="p-4">

								<h2 className="text-xl font-semibold">
									{p.title}
								</h2>

								<p className="text-muted-foreground text-sm mt-1">
									{p.description}
								</p>

								{/* BUTTONS */}
								<div className="flex gap-3 mt-4">

									<a
										href={p.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition"
									>
										GitHub
									</a>

									<a
										href={p.live}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 text-sm bg-foreground text-background rounded hover:opacity-80 transition"
									>
										Live Demo
									</a>

								</div>

							</div>

						</motion.div>
					))}

				</div>

				{/* MODAL */}
				<AnimatePresence>
					{selected && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50"
							onClick={() => setSelected(null)}
						>
							<motion.div
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.8 }}
								className="bg-background max-w-lg w-full rounded-xl p-6"
								onClick={(e) => e.stopPropagation()}
							>

								<h2 className="text-2xl font-bold">
									{selected.title}
								</h2>

								<p className="mt-3 text-muted-foreground">
									{selected.demo}
								</p>

								<div className="flex gap-3 mt-6">

									<a
										href={selected.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 border border-border rounded hover:bg-muted transition"
									>
										GitHub
									</a>

									<a
										href={selected.live}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-foreground text-background rounded hover:opacity-80 transition"
									>
										Live Demo
									</a>

								</div>

							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

			</div>

		</section>
	);
}
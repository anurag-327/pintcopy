"use client";
import { useStore } from "../../lib/useStore.js";
import { twMerge } from "tailwind-merge";
import { Upload } from "@phosphor-icons/react";

export default function (props) {
	const setURI = useStore((state) => state.setURI);
	const setImageSize = useStore((state) => state.setImageSize);

	return (
		<div className="w-full aspect-video rounded-md flex p-4 bg-primary/25">
			<label
				className="m-auto bg-secondary p-6 lg:p-12 rounded-md flex items-center flex-col gap-3 cursor-pointer"
				htmlFor="fileUpload"
			>
				<Upload size={32} />
				<p>Upload A file</p>
				<input
					hidden
					id="fileUpload"
					className="m-auto"
					type="file"
					name="file"
					onChange={(e) => {
						e.preventDefault();
						let file = e.target.files[0];
						setImageSize(file.size);
						let reader = new FileReader();
						reader.readAsDataURL(file);
						reader.onload = function () {
							setURI(reader.result);
						};
						reader.onerror = function (error) {
							console.log("Error: ", error);
						};
					}}
				/>
			</label>
		</div>
	);
}

import React, { useState } from "react";
import {
	MDXEditor,
	headingsPlugin,
	listsPlugin,
	quotePlugin,
	markdownShortcutPlugin,
	toolbarPlugin,
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    linkDialogPlugin,
    diffSourcePlugin,
    DiffSourceToggleWrapper,
    imagePlugin,
    tablePlugin,
	CreateLink,
	InsertImage,
	InsertTable
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "./MarkdownEditor.css";

export default function MarkdownEditor() {
	const [markdown, setMarkdown] = useState(
		`# Welcome to MDX Editor Demo\n\nTry typing some **markdown**!`
	);

	return (
		<div className="markdown-editor-container">
			<MDXEditor
				markdown={markdown}
				onChange={setMarkdown}
				plugins={[
					headingsPlugin(),
					listsPlugin(),
					quotePlugin(),
					markdownShortcutPlugin(),
                    linkDialogPlugin(),
                    diffSourcePlugin(),
                    imagePlugin(),
                    tablePlugin(),
					toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <BlockTypeSelect/>
                                <BoldItalicUnderlineToggles/>
                                <CreateLink/>
								<InsertImage/>
                                <InsertTable/>
                                <DiffSourceToggleWrapper/>
                            </>
                        )
                    }),
				]}
				
			/>
		</div>
	);
}

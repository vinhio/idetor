import {
    AdmonitionDirectiveDescriptor,
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    codeBlockPlugin,
    codeMirrorPlugin,
    CodeToggle,
    CreateLink,
    diffSourcePlugin,
    DiffSourceToggleWrapper,
    directivesPlugin,
    frontmatterPlugin,
    headingsPlugin,
    InsertAdmonition,
    InsertCodeBlock,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    jsxPlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    ListsToggle,
    markdownShortcutPlugin,
    MDXEditor,
    quotePlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function App() {
    const markdown = `# Welcome

This is a **live demo** of MDXEditor with all default features on.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible.
> The idea is that a Markdown-formatted document should be publishable as-is, as plain text,
> without looking like it’s been marked up with tags or formatting instructions.

[— Daring Fireball](https://daringfireball.net/projects/markdown/).

In here, you can find the following markdown elements:

* Headings
* Lists
  * Unordered
  * Ordered
  * Check lists
  * And nested ;)
* Links
* Bold/Italic/Underline formatting
* Tables
* Code block editors
* And much more.

The current editor content is styled using the \`@tailwindcss/typography\` [plugin](https://tailwindcss.com/docs/typography-plugin).

## What can you do here?

This is a great location for you to test how editing markdown feels. If you have an existing markdown source, you can switch to source mode using the toggle group in the top right, paste it in there, and go back to rich text mode.

If you need a few ideas, here's what you can try:

1. Add your own code sample
2. Change the type of the headings
3. Insert a table, add a few rows and columns
4. Switch back to source markdown to see what you're going to get as an output
5. Test the diff feature to see how the markdown has changed
6. Add a frontmatter block through the toolbar button

## A code sample

MDXEditor embeds CodeMirror for code editing.

\`\`\`tsx
let x = 10;
x. = 20: 11 Works fine
\`\`\`

## A live code example

The block below is a live React component. You can configure multiple live code presets that specify the available npm packages and the default imports. You can also specify a default component that will be rendered in the live code block.

\`\`\`tsx
let x = 10;
x. = 20: 11 Works fine
\`\`\`

\`\`\`tsx
export default function App() {
  return (<div>
  <p>This is a live React component, that's being previewed in codesandbox. </p>
  <p>Editing it will update the fenced codeblock in the markdown.</p>
  </div>)
}
\`\`\`

\`\`\`tsx
function( x: int ) { return x*x; }
\`\`\`

## A table

Play with the table below - add rows, columns, change column alignment. When editing,
you can navigate the cells with \`enter\`, \`shift+enter\`, \`tab\` and \`shift+tab\`.

| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |   False  | 19.99 |
| Codecademy Hoodie |   False  | 42.99 |
`;

    return (
        <div>
            <MDXEditor
                markdown={markdown}
                plugins={[
                    diffSourcePlugin({
                        diffMarkdown: markdown,
                        viewMode: "diff",
                    }),
                    frontmatterPlugin(),
                    jsxPlugin(),
                    codeBlockPlugin({
                        defaultCodeBlockLanguage: "tsx",
                    }),
                    codeMirrorPlugin({
                        codeBlockLanguages: {
                            js: "JavaScript",
                            css: "CSS",
                            txt: "text",
                            tsx: "TypeScript",
                        },
                    }),
                    directivesPlugin({
                        directiveDescriptors: [AdmonitionDirectiveDescriptor],
                    }),
                    headingsPlugin(),
                    listsPlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    tablePlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <DiffSourceToggleWrapper>
                                <BlockTypeSelect />
                                <BoldItalicUnderlineToggles />
                                <CodeToggle />
                                <CreateLink />
                                <InsertAdmonition />
                                <InsertCodeBlock />
                                <InsertImage />
                                <InsertTable />
                                <InsertThematicBreak />
                                <ListsToggle />
                                <UndoRedo />
                            </DiffSourceToggleWrapper>
                        ),
                    }),
                    markdownShortcutPlugin(),
                ]}
            />
        </div>
    );
}

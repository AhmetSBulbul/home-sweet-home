import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDirectory = path.join(
  process.cwd(),
  "content/"
);

const snippetsDirectory = path.join(
  contentDirectory,
  "snippets"
);

export function getSortedSnippetsData() {
  const fileNames = fs.readdirSync(
    snippetsDirectory
  );
  const allSnippetsData = fileNames.map(
    (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(
        snippetsDirectory,
        fileName
      );
      const fileContents = fs.readFileSync(
        fullPath,
        "utf8"
      );

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    }
  );

  return allSnippetsData.sort(
    ({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  );
}

export function getAllSnippetsIds() {
  const fileNames = fs.readdirSync(
    snippetsDirectory
  );

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getSnippetData(id) {
  const fullPath = path.join(
    snippetsDirectory,
    `${id}.md`
  );
  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

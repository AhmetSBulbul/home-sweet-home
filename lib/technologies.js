import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDirectory = path.join(
  process.cwd(),
  "content/"
);

const technologiesDirectory = path.join(
  contentDirectory,
  "technologies"
);

export function getAllTechnologiesData() {
  const fileNames = fs.readdirSync(
    technologiesDirectory
  );

  const allTechnologiesData = fileNames.map(
    (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(
        technologiesDirectory,
        fileName
      );

      const fileContents = fs.readFileSync(
        fullPath,
        "utf-8"
      );

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    }
  );

  return allTechnologiesData;
}

export function getAllTechnologyIds() {
  const fileNames = fs.readdirSync(
    technologiesDirectory
  );

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'flutter'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'storybook'
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

export async function getTechnologyData(id) {
  const fullPath = path.join(
    technologiesDirectory,
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

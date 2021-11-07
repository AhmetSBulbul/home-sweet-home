import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDirectory = path.join(
  process.cwd(),
  "content/"
);

const subContentDirectoryByName = (dirName) =>
  path.join(contentDirectory, dirName);

export function getSortedContentsDataByFolderName(
  folderName
) {
  const allContentsData =
    getAllContentsDataByFolderName(folderName);

  return allContentsData.sort(
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

export function getAllContentsDataByFolderName(
  folderName
) {
  const fileNames = fs.readdirSync(
    subContentDirectoryByName(folderName)
  );

  const allContentsData = fileNames.map(
    (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(
        subContentDirectoryByName(folderName),
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

  return allContentsData;
}

export function getAllContentIdsByFolderName(
  folderName
) {
  const pathToContent =
    subContentDirectoryByName(folderName);

  const fileNames = fs.readdirSync(pathToContent);

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

export async function getContentDataByFolderNameAndId(
  folderName,
  id
) {
  const fullPath = path.join(
    subContentDirectoryByName(folderName),
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

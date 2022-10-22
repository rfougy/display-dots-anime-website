import { join } from "path";
import { readdirSync, readFileSync } from "fs";

export function getAbsolutePath(
  section?: string,
  category?: string,
  post?: string
) {
  return section
    ? category
      ? post
        ? join(process.cwd(), "cms", section, category, post + ".md")
        : join(process.cwd(), "cms", section, category)
      : join(process.cwd(), "cms", section)
    : join(process.cwd(), "cms");
}

export function getFileNamesInDirectory(...args: any) {
  const path = getAbsolutePath(...args);

  return readdirSync(path);
}

export function getFileContents(path: string) {
  return readFileSync(path).toString();
}

export function getCategories(sections: string[]) {
  let categories: string[][] = sections.map((section) => {
    const posts: string[] = getFileNamesInDirectory(section);

    const categoryList: any = posts.map((fileName: string) => {
      return {
        title: fileName,
        section: section,
      };
    });

    return categoryList;
  });

  categories = Array.prototype.concat.apply([], categories);

  return categories;
}

export function getPosts(categories: any) {
  let posts: any = categories.map((category: any) => {
    const { title: categoryTitle, section } = category;
    const posts: any = getFileNamesInDirectory(section, categoryTitle);

    const postList: any = posts.map((fileName: string) => {
      const postTitle = fileName.replace(/\.md/, "");
      const path = getAbsolutePath(section, categoryTitle, postTitle);
      const postContent = getFileContents(path);

      return {
        title: postTitle,
        category: categoryTitle,
        section: section,
        content: postContent,
        path: `/repo/${section}/${categoryTitle}/${postTitle}`,
      };
    });

    return postList;
  });

  posts = Array.prototype.concat.apply([], posts);

  return posts;
}
